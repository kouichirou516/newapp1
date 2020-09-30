<?php

namespace app\Library;

use Goodby\CSV\Import\Standard\Lexer;
use Goodby\CSV\Import\Standard\Interpreter;
use Goodby\CSV\Import\Standard\LexerConfig;

class CustomCsv {
  public static function getCsvDownloadData($datas, $csvHeader, $filename) {
    array_unshift($datas, $csvHeader);
    $stream = fopen('php://temp', 'r+b');
    foreach ($datas as $data) {
      fputcsv($stream, $data);
    }
    rewind($stream);
//    $csv = str_replace(PHP_EOL, "\r\n", stream_get_contents($stream));
    $csv = stream_get_contents($stream);
//    $csv = mb_convert_encoding($csv, 'SJIS-win', 'UTF-8');
    $headers = array(
      'Content-Type' => 'text/csv',
      'Content-Disposition' => 'attachment; filename='.$filename,
    );
    return \Response::make($csv, 200, $headers);
  }

  public static function getCsvData($datas, $csvHeader) {
    array_unshift($datas, $csvHeader);
    $stream = fopen('php://temp', 'r+b');
    foreach ($datas as $data) {
      fputcsv($stream, $data);
    }
    rewind($stream);
//      $csv = str_replace(PHP_EOL, "\r\n", stream_get_contents($stream));
      $csv = stream_get_contents($stream);
//    $csv = mb_convert_encoding($csv, 'SJIS-win', 'UTF-8');
      fclose($stream);
    return $csv;
  }

  public static function getCsvImportData($file, $shiftjis_flg = false){
    try {
      //Goodby CSVのconfig設定
      $config = new LexerConfig();
      if ($shiftjis_flg) {
        $config->setDelimiter(",")//区切り文字は何かの指定
        ->setToCharset('UTF-8')//読み込んだ後の出力で文字コードをどうするかの指定
        ->setFromCharset('SJIS-win')//読み込んだcsvファイルの文字コードを指定
        ->setIgnoreHeaderLine(true);
      } else {
        $config->setDelimiter(",")//区切り文字は何かの指定
        ->setIgnoreHeaderLine(true);
      }

      $interpreter = new Interpreter();
      $lexer = new Lexer($config);

      //CharsetをUTF-8に変換
//    $config->setToCharset("UTF-8");
//    $config->setFromCharset("sjis-win");

      $rows = array();
      $interpreter->addObserver(function(array $row) use (&$rows){
        $rows[] = $row;
      });

      // CSVデータをパース
      $lexer->parse($file, $interpreter);

      return $rows;
    }catch(\Exception $e) {
      return false;
    }
  }

  public static function download($list, $header, $filename)
  {
      if (count($header) > 0) {
          array_unshift($list, $header);
      }
      $stream = fopen('php://temp', 'r+b');
      foreach ($list as $row) {
          fputcsv($stream, $row);
      }
      rewind($stream);
      $csv = str_replace(PHP_EOL, "\r\n", stream_get_contents($stream));
      $csv = mb_convert_encoding($csv, 'SJIS-win', 'UTF-8');
      $headers = array(
          'Content-Type' => 'text/csv',
          'Content-Disposition' => "attachment; filename=$filename",
      );
      return \Response::make($csv, 200, $headers);
  }

}
