URL: {{$url}}
Current User: USER_ID={{$current_user}}

## messages
------------------------------------------------
@foreach($errors->messages() as $messageName => $message)
- {{$messageName}}: @foreach($message as $name => $v) {{$v}}, @endforeach

@endforeach


## data
------------------------------------------------
@foreach($data as $k => $v)
@endforeach