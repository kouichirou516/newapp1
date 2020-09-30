<div class="task task-status">
  <span class="task-progress-text">状態：</span>
  <div class="ticket-action">
    @if(!isset($genkou))
      <span class="tag is-warning">未反映</span>
    @elseif($genkou->status == 0)
      <span class="tag is-info">{{ \Config::get("const.GENKOU_STATUS")[$genkou->status] }}</span>
    @elseif($genkou->status == 1)
      <span class="tag is-success">{{ \Config::get("const.GENKOU_STATUS")[$genkou->status] }}</span>
    @endif
  </div>
</div>
<!-- inputfinished_atがNULLでない時 -->
@if(isset($genkou->inputfinished_at))
<!-- inpitfinished_atを表示させる -->
<div style="position: absolute;right: 200px;bottom: 8px;">{{ $genkou->inputfinished_at }}</div>
@endif
