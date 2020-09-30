<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ErrorNotificationEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($url, $current_user, $errors = null, $data = null)
    {
        //
        $this->url = $url;
        $this->current_user = $current_user;
        $this->title = "フォーム入力でエラーが発生しました";
        $this->errors = $errors;
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("【RPAForm】" .$this->title)
            ->markdown('emails.error_notification_email')
            ->with([
                'errors' => $this->errors,
                'url' => $this->url,
                'current_user' => $this->current_user,
                'data' => $this->data
            ]);
    }
}
