<?php

namespace app\Library;

use Goodby\CSV\Import\Standard\Lexer;
use Goodby\CSV\Import\Standard\Interpreter;
use Goodby\CSV\Import\Standard\LexerConfig;
use Response;

class CustomFile {

  public static function uploadFile($file, $filename, $directory){
    $ext = $file->getClientOriginalExtension();
    $filename = "{$filename}.{$ext}";
    $path = $file->storeAs($directory, $filename, ['disk' => 'public']);
    $basepath = basename($path);
    return $basepath;
  }
}
