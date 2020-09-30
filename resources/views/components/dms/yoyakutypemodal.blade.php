<div class="modal-background"></div>
<div class="modal-content">
  <div class="field field-extend mb-10">
    <label class="label label-group dark-text mt-30">予約方法設定</label>
    @if ($dm_detail->status != 0)
    <b>■{!!Form::hidden('yoyakutype_id', $dm_detail->yoyakutype_id)!!}
    {{Config::get('const_dm.DM_YOYAKUTYPES')[$dm_detail->yoyakutype_id]}}</b>
    @else
      @component('components.dms.fieldselect',['label'=>'予約方法を選択する', 'name'=>'yoyakutype_id', 'options'=>Config::get('const_dm.DM_YOYAKUTYPES'), 'value'=>$dm_detail->yoyakutype_id, 'placeholder'=>'', 'class' => 'targeting-select', 'error'=>'errors.senddate_id_error', 'required'=>true,'addtext'=>'行動ターゲティング配信：検索対象者の中から上限人数を指定して配信する方法です。検索対象人数が10万人以上の場合は選択できません<br>オート差分配信：設定した配信の上限人数または配信終了日に達するまで、検索条件に新しく合致した学生に自動的に配信（配信予約）することができます'])
      @endcomponent
    @endif

    @if (in_array($dm_detail->status, [0,3]))
      @component('components.dms.fieldselect',['label'=>'配信開始日', 'name'=>'senddate_id', 'options'=>['' => '選択してください'] + $dm_haishin_schedules, 'value'=>$dm_detail->senddate_id, 'placeholder'=>'', 'error'=>'errors.senddate_id_error', 'class' => '','required'=>true,'addtext'=>'本日から3営業日後から1か月先まで指定可能です'])
      @endcomponent
    @else
      <div class="columns">
        <div class="column column-ttl is-3"><div class="field-label">配信開始日</div></div>
        <div class="column column-input is-9"><div class="control">{{ $dm_detail->senddate_id ? $dm_haishin_schedule_alls[$dm_detail->senddate_id] : ''}}</div></div>
      </div>
    @endif

    @if ($dm_detail->status == 0 || $dm_detail->yoyakutype_id == 1)
      <div class="actionTargeting @if($dm_detail->yoyakutype_id == 2) donot-display @endif">
        <div class="add-text">以下は設定した配信人数内での配信優先順位を設定することができます</div>
        @if (in_array($dm_detail->status, [0,3]))
          @component('components.fieldselect',['label'=>'本社所在地に多くアクションした学生', 'name'=>'koudo_honsha_id', 'options'=>['' => '条件指定しない']+ Config::get('const.SM_PREFECTURE'), 'value'=>$dm_detail->koudo_honsha_id, 'placeholder'=>'', 'error'=>'errors.koudo_honsha_id_error', 'required'=>true])
          @endcomponent
          @component('components.fieldselect',['label'=>'特定の業種に多くアクションした学生', 'name'=>'koudo_gyoshu_id', 'options'=>['' => '条件指定しない']+ Config::get('const_dm.DM_GYOSHUS'), 'value'=>$dm_detail->koudo_gyoshu_id, 'placeholder'=>'', 'error'=>'errors.senddate_id_error', 'required'=>true])
          @endcomponent
          @component('components.fieldselect',['label'=>'特定の従業員数の企業に多くアクションした学生', 'name'=>'koudo_kibo_id', 'options'=>['' => '条件指定しない']+ Config::get('const_dm.DM_KOUDO_KIBOS'), 'value'=>$dm_detail->koudo_kibo_id, 'placeholder'=>'', 'error'=>'errors.koudo_kibo_id_error', 'required'=>true])
          @endcomponent
        @else
        <div class="columns">
          <div class="column column-ttl is-3"><div class="field-label">本社所在地に多くアクションした学生</div></div>
          <div class="column column-input is-9"><div class="control">{{ $dm_detail->koudo_honsha_id ? Config::get('const.SM_PREFECTURE')[$dm_detail->koudo_honsha_id ] : '条件指定しない' }}　</div></div>
        </div>
        <div class="columns">
          <div class="column column-ttl is-3"><div class="field-label">特定の業種に多くアクションした学生</div></div>
          <div class="column column-input is-9"><div class="control">{{ $dm_detail->koudo_gyoshu_id ? Config::get('const_dm.DM_GYOSHUS')[$dm_detail->koudo_gyoshu_id ] : '条件指定しない' }}　</div></div>
        </div>
        <div class="columns">
          <div class="column column-ttl is-3"><div class="field-label">特定の従業員数の企業に多くアクションした学生</div></div>
          <div class="column column-input is-9"><div class="control">{{ $dm_detail->koudo_kibo_id ? Config::get('const_dm.DM_KOUDO_KIBOS')[$dm_detail->koudo_kibo_id ] : '条件指定しない' }}　</div></div>
        </div>
        @endif
      </div>
    @endif
    @if ($dm_detail->status == 0 || $dm_detail->yoyakutype_id == 2)
    <div class="autoTargeting @if($dm_detail->yoyakutype_id == 1) donot-display @endif">
      @if (in_array($dm_detail->status, [0,3]))
      <div class="columns">
        <div class="column column-ttl is-3"><div class="field-label">差分配信対象<span class="required">必須</span></div></div>
        <div class="column column-input is-9">
          <div class="control">
            <div class="radio-box mb-10">
@foreach (Config::get('const_dm.DM_SABUN_FUKUMUS') as $key => $name)
<input id="sabun_fukumu_flg{{$dm_detail->id . '_' .$key}}" name="sabun_fukumu_flg" {!!($dm_detail->sabun_fukumu_flg == $key) ? 'checked="checked"':''!!} type="radio" value="{{$key}}">
<label for="sabun_fukumu_flg{{$dm_detail->id . '_' . $key}}">{{$name}}</label>
@endforeach
            </div>
          </div>
        </div>
      </div>
      @component('components.fieldselect',['label'=>'配信終了日', 'name'=>'sabun_finishdate_id', 'options'=>$dm_haishin_finish_schedules, 'value'=>$dm_detail->sabun_finishdate_id, 'placeholder'=>'', 'error'=>'errors.senddate_id_error', 'required'=>true])
      @endcomponent
      <div class="columns">
        <div class="column column-ttl is-3"><div class="field-label">配信タイミング<span class="required">必須</span></div></div>
        <div class="column column-input is-9">
          <div class="control">
            <div class="check-box">
@foreach (config('const.DATE_WEEKS') as $key => $option)
  {!!Form::checkbox("sabun_week_keys[]", $key, in_array($key, json_decode($dm_detail->sabun_week_keys)), ['id'=> "sabun_week_keys[]" . $dm_detail->id . '_' . $key, 'class'=>'styled-checkbox'])!!}
  <label class="checklabel" style="display:inline-block;padding: 0.9em 1em 1em 2em;" for="{{ 'sabun_week_keys[]' . $dm_detail->id . '_' . $key }}">{{ $option }}</label>
@endforeach
            </div><span class="add-text">※配信開始日の曜日と配信終了日の曜日を必ず選択してください</span>
          </div>
        </div>
      </div>
      @else
        <div class="columns">
          <div class="column column-ttl is-3"><div class="field-label">差分配信対象</div></div>
          <div class="column column-input is-9"><div class="control">{{ Config::get('const_dm.DM_SABUN_FUKUMUS')[$dm_detail->sabun_fukumu_flg ] }}　</div></div>
        </div>
        <div class="columns">
          <div class="column column-ttl is-3"><div class="field-label">配信終了日</div></div>
          <div class="column column-input is-9"><div class="control">{{ $dm_detail->sabun_finishdate_id ? $dm_haishin_schedule_alls[$dm_detail->sabun_finishdate_id ] : '条件指定しない' }}　</div></div>
        </div>
        <div class="columns">
          <div class="column column-ttl is-3"><div class="field-label">配信タイミング</div></div>
          <div class="column column-input is-9"><div class="control">
          @foreach (config('const.DATE_WEEKS') as $key => $option)
            @if (in_array($key, json_decode($dm_detail->sabun_week_keys)))
            {{ $option }}　
            @endif
          @endforeach
          </div></div>
        </div>
      @endif
    </div>
    @endif
  </div>
  <div class="buttons is-right">
  @if ($dm_detail->status == 0 || $dm_detail->status == 3)
    <button type="button" class="button is-primary save-reservation-btn">設定</button>
  @else
  <button type="button" class="button save-reservation-btn">閉じる</button>
  @endif
  </div>
</div>
<button type="button" class="modal-close is-large close-reservation-btn"></button>
