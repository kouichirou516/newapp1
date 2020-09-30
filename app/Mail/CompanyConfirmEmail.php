<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class CompanyConfirmEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($url, $type)
    {
        //
      $this->url = $url;
      $types = [
        1 => "ロボ1",
        2 => "ロボ2",
        3 => "ロボ3",
      ];

      $this->subject = $types[$type] . "の確認";
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject($this->subject)
          ->markdown('emails.company_confirm_email')
          ->with([
            'url' => $this->url
          ]);
    }
}
