<nav class="cd-breadcrumb-wrap">
  <ol class="cd-breadcrumb triangle">
  @foreach (Config::get('const_dm.DM_4USER_STATUSES') as $status_key => $status_value)
  @if($status_key == $dm_detail->status || ($dm_detail->status == 2 && $status_key == 1) || ($dm_detail->status == 5 && $status_key == 4))
  <li class="current"><em>{{$status_value}}</em></li>
  @else
  <li><span>{{$status_value}}</span></li>
  @endif
  @endforeach
  </ol>
<!--  {{Config::get('const_dm.DM_STATUSES')[$dm_detail->status]}} -->
  @if($dm_detail->error_msg)
  <p class="status-error">{{ $dm_detail->error_msg }}</p>
  @endif
</nav>
