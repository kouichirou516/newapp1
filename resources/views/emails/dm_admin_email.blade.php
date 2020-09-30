ご担当者様

Webフォームにて{{$mail_vars['status']}}が押下されました。

{{$mail_vars['company']['scode']}}
{{$mail_vars['company']['rid']}}
{{$mail_vars['company']['name']}}
{{Config::get("const.USER_ROLES")[$mail_vars['user']['role']]}}
{{$mail_vars['user']['name']}}
{{$mail_vars['user']['email']}}
{{$mail_vars['dm_detail']['id']}}
{{$mail_vars['dm_detail']['name']}}

以上、よろしくお願いいたします。