<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class RoboDmEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mail_vars, $status)
    {
        //
        $this->mail_vars = $mail_vars;
        $this->status = $status;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("【リクナビらくらく設定フォーム】アップロード完了 " . $this->status)
          ->text('emails.robo_dm_email')
          ->with([
            'mail_vars' => $this->mail_vars,
            'status' => $this->status,
          ]);
    }
}
