<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GenkouAutoReply extends Model
{
    //
    protected $table = 'genkou_auto_replies';
    protected $guarded = [
        'id', 'company_id'
    ];

    public function showColumns()
    {
        $role       = new GenkouAutoReply;
        $sql        = 'SHOW COLUMNS FROM ' . $role->getTable();
        foreach (\DB::select($sql) as $column) {
            if(in_array($column->Field, $this->guarded) === false){
                $columns[] = $column->Field;
            }
        }
        return $columns;
    }

    public function initialData(){
        $this->initialData1();
        $this->initialData2();
        $this->initialData3();
    }

    public function initialData1(){
        $this->tpl1_body = "この度は弊社にエントリーいただき、ありがとうございます。
取り急ぎ、お礼とプレエントリーの受付完了のご連絡をさせていただきます。

今後のセミナーおよび選考会のスケジュールなどにつきましては、
弊社リクナビページにてお知らせいたしますので、ご確認をお願いいたします。";
    }
    public function initialData2(){
        $this->tpl2_body = "もしご都合が悪くなった場合は、
予約キャンセル日時までにリクナビの「マイページ」のマイ企業リスト画面もしくは
スケジュール画面から必ずキャンセルを行ってください。
それでは、当日お会いできることを楽しみにしています。";
    }
    public function initialData3(){
        $this->tpl3_body = "今回お会いできないのはとても残念ですが、
また是非、ご検討ください。

就職活動にお忙しい毎日をお過ごしかと思いますが、
またのご予約を心よりお待ちしております。";
    }


}
