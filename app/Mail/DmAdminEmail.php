<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class DmAdminEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mail_vars)
    {
        //
        $this->mail_vars = $mail_vars;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("【リクナビらくらく設定フォーム】" .$this->mail_vars["status"]."ボタンが押下されました ")
          ->text('emails.dm_admin_email')
          ->with([
            'mail_vars' => $this->mail_vars,
          ]);
    }
}
