<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class RoboNgEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mail_vars,$rows, $ngDatas)
    {
        //
        $this->mail_vars = $mail_vars;
        $this->rows = $rows;
        $this->ngDatas = $ngDatas;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("【リクナビらくらく設定フォーム】　アップロードエラー")
          ->text('emails.robo_ng_email')
          ->with([
            'mail_vars' => $this->mail_vars,
            'rows' => $this->rows,
            'ngDatas' => $this->ngDatas
          ]);
    }
}
