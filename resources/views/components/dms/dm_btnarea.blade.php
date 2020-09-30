<div class="is-pulled-right is-clearfix">
  <!-- 流用 -->
  <div class="is-pulled-left ml-10"><button type="button" data-confirm="流用しますか？" data-url="{!!route('dm_detail.copy', ['company' => $dm_detail->company_id,'dm_detail' => $dm_detail->id])!!}" class="button cancel" data-tooltip="コピー"><i class="fas fa-copy"></i> 流用</button></div>
  <!-- 削除 -->
  @if(in_array($dm_detail->status, [0,6,7,9]))
    <div class="is-pulled-left ml-10"><button type="button" data-confirm="本当に削除しますか？" data-url="{!!route('dm_detail.delete', ['company' => $dm_detail->company_id,'dm_detail' => $dm_detail->id])!!}" class="button cancel" data-tooltip="削除"><i class="fas fa-trash-alt"></i> 削除</button></div>
  @endif
  <!-- 一時保存 -->
  @if(in_array($dm_detail->status, [0]))
    <div class="is-pulled-left ml-10"><button type="submit" name="status" value="0" class="button is-pulled-left cancel">一時保存</button></div>
  @elseif (in_array($dm_detail->status, [3]) OR (\Auth::user()->role == 3 AND in_array($dm_detail->status, [2,5])))
    <div class="is-pulled-left ml-10"><button type="submit" name="status" value="0" class="button is-pulled-left cancel">条件編集に戻る</button></div>
  @endif

  <!-- 人数確認 -->
  @if(in_array($dm_detail->status, [0]) && count($dm_temps) != 0)
    <div class="is-pulled-left ml-10"><button type="submit" name="status" value="1" class="button is-primary">人数確認</button></div>
  @endif
  <!-- 人数確認（再実行） -->
  @if(\Auth::user()->role == 3 AND in_array($dm_detail->status, [2]))
    <div class="is-pulled-left ml-10"><button type="submit" data-confirm="人数確認（再実行）しますか？" name="status" value="1" class="button is-primary submit-confirm">人数確認（再実行）</button></div>
  @endif
  <!-- 配信予約 -->
  @if(in_array($dm_detail->status, [3,4,5,6]))
  <div style="float:left;min-width:380px;text-align:center;margin-left:20px;line-height: 2em;border:1px solid #efefef;border-radius:4px;padding:5px 10px 5px 10px;background:#fafafa;">
  <span class="robo-tsusu">検索対象人数：{{$dm_detail->robo_tsusu}} </span>
  {!!Form::hidden('robo_tsusu', $dm_detail->robo_tsusu)!!} 
  @if($dm_detail->robo_tsusu == 0)
    （再度条件を検索しなおしてください）
  @elseif(in_array(\Auth::user()->role, [1,3]))
  {!!Form::number('tsusu', $dm_detail->tsusu, ['type' => 'number', 'class' =>  'input', 'placeholder' => '', 'style' => 'width: 80px;margin-left:20px;display:inline-block;'])!!} 人に配信
  <div class="errorTsusu"></div>
  @endif
  </div>
  @endif
  @if(in_array($dm_detail->status, [3]) && in_array(\Auth::user()->role, [1,3]) && $dm_detail->robo_tsusu != 0)
  <div class="is-pulled-left ml-10"><button type="submit" name="status" value="3" class="button is-primary">配信予約</button></div>
  @endif
  <!-- 配信予約（再実行） -->
  @if(\Auth::user()->role == 3 AND in_array($dm_detail->status, [5]))
  <div class="is-pulled-left ml-10"><a type="button" class="button is-primary" href="{!!route('dm_detail.confirm', ['company' => $dm_detail->company_id, 'dm_detail' => $dm_detail->id])!!}">配信予約（再実行）</a></div>
  @endif

  <!-- 一時保存 注記 -->
  @if (in_array($dm_detail->status, [3]) OR (\Auth::user()->role == 3 AND in_array($dm_detail->status, [2,5])))
  <br style="clear:both;"><div class="add-txt">[条件編集に戻る]ボタン押下時は、再度人数確認が必要となりますのでご注意ください。</div>
  @endif

</div>
