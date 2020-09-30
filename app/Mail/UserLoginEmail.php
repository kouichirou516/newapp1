<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserLoginEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($url, $name)
    {
        //
        $this->url = $url;
        $this->name = $name;
        $this->subject = "【リクナビらくらく設定フォーム】ワンタイムURL発行完了";
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject($this->subject)
            ->text('emails.user_login_email')
            ->with([
                'url' => $this->url,
                'name' => $this->name
            ]);
    }
}
