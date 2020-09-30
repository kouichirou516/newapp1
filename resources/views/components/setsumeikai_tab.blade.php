<div class="tabs">
  <ul class="nav nav-tabs" role="tablist">
    @for($i = 1;$i <= 5;$i++)
      <li class="presentation @if($i == 1) is-active @endif"><a href=".tab{{$i}}" aria-controls="tab{{$i}}" role="tab" data-toggle="tab">画面{{$i}}</a></li>
    @endfor
  </ul>
</div>
