@if($company->neo_orid_flg == 1)
<div class="columns">
  <div class="column column-ttl is-3"><div class="field-label">表示デザイン</div></div>
  <div class="column column-input is-9"><div class="control">{{$temp->orid_id ? $dm_orids[$temp->orid_id] : '通常デザイン'}}</div></div>
</div>
@endif
<div class="columns">
  <div class="column column-ttl is-3"><div class="field-label">タイトル</div></div>
  <div class="column column-input is-9"><div class="control">{!! nl2br(htmlspecialchars ($temp->title, ENT_QUOTES)) !!}</div></div>
</div>
<div class="columns">
  <div class="column column-ttl is-3"><div class="field-label">キャッチフレーズ</div></div>
  <div class="column column-input is-9"><div class="control">{!! nl2br(htmlspecialchars ($temp->catch, ENT_QUOTES)) !!}</div></div>
</div>
<div class="columns">
  <div class="column column-ttl is-3"><div class="field-label">本文</div></div>
  <div class="column column-input is-9"><div class="control">{!! nl2br(htmlspecialchars ( $temp->body, ENT_QUOTES)) !!}</div></div>
</div>
<div class="columns">
  <div class="column column-ttl is-3"><div class="field-label">リクナビフォーム添付</div></div>
  <div class="column column-input is-9"><div class="control">
  @php
      $wes_keys = $temp->wes_keys ? json_decode($temp->wes_keys) : [];
  @endphp
  @foreach ($wes_keys as $key=>$wes) 
    @if (isset($dm_wess[$wes])) 
      {{$dm_wess[$wes]}}<br>
    @endif
  @endforeach
  </div></div>
</div>
<div class="columns">
  <div class="column column-ttl is-3"><div class="field-label">連絡先</div></div>
  <div class="column column-input is-9"><div class="control">{!! nl2br(htmlspecialchars ( $temp->signature, ENT_QUOTES)) !!}</div></div>
</div>