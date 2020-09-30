<?php

namespace app\Library;

class CustomSpreadSheet
{
    function __construct($file) {
        $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
        $spreadsheet = $reader->load($file);
        $this->spreadsheet = $spreadsheet;
    }

    public function getSheet($sheet_name) {
      return $this->spreadsheet->getSheetByName($sheet_name);
    }

    public function setSheet($sheet_name) {
      $this->sheet = $this->spreadsheet->getSheetByName($sheet_name);
    }

    public function getDatas() {
      $row = 2;
      foreach ($this->sheet->getRowIterator() as  $eachRow) {
          foreach ($this->sheet->getColumnIterator() as $column) {
              $sheetData[$row - 2][]=$this->sheet->getCell($column -> getColumnIndex() . $row )->getValue();
          }
          
          $row++;
      }

      return $sheetData;
    }



}
