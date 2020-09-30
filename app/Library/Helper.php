<?php

namespace App\Library;

class Helper
{
    public static function nendo($max = 3, $min = null)
    {
        $years = [];
        $nendo = (new \DateTime('-3 month'))->format('Y');
        for ($i = 1; $i <= $max; ++$i) {
            if ($nendo - $i >= $min) {
                $years[$nendo - $i] = $nendo - $i;
            }
        }

        return $years;
    }

    public static function nendo2($max = null, $min = null)
    {
        $years = [];
        $nendo = (new \DateTime('-3 month'))->format($max);
        for ($i = 1; $i <= ($max - $min); ++$i) {
            if ($nendo - $i >= $min) {
                $years[$nendo - $i] = $nendo - $i;
            }
        }

        return $years;
    }

    public static function dmcrudlabel($route_text, $en_type = false)
    {
        if (strpos($route_text, 'edit')) {
            return $en_type ? 'edit' : '編集';
        } elseif (strpos($route_text, 'create')) {
            return $en_type ? 'create' : '新規作成';
        }

        return '詳細';
    }

    public static function dmVali($rule, $options = null)
    {
        if ('required' == $rule) {
            return '必須項目です。';
        } elseif ('max_byte' == $rule) {
            return '全角'.(($options['max_byte']) / 2).'文字以内または半角英数字'.$options['max_byte'].'文字以内で入力してください。';
        } elseif ('ban_words' == $rule) {
            return '使用できない文字が入力されているので、削除・修正してください';
        }

        return '';
    }

    public static function getCostPoint($type, $tsusu)
    {
        if (3 == $type) {
            return $tsusu;
        } else {
            return ($tsusu) * config('const_dm.DM_SPECIAL_COST_POINT');
        }
    }

    public static function getCompanyCostPointAll($company)
    {
        return $company->dm_details()->FindStatusIn([4, 5])->get()->reduce(function ($carry, $dm_detail) {
            if (3 == $dm_detail->haishintype_id) {
                return $carry += $dm_detail->tsusu;
            } else {
                return $carry += ($dm_detail->tsusu) * config('const_dm.DM_SPECIAL_COST_POINT');
            }
        });
    }
}
