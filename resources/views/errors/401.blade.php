@extends('layouts.app_auth')


@section('content')
<div class="error_message"></div>
<p>ページを表示できません。<br>弊社担当までお問い合わせください。</p>
<style>
.error_message {
  position:relative;
  height:650px;
  background-color: white;
}
p {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #636b6f;
  text-align: center;
}
</style>
@endsection
