{!! Form::open(['method' => 'POST', 'action' => ['DmDetailsController@update', $company->id, $dm_detail->id], 'class' => 'status-'.$dm_detail->status]) !!}
<div class="pack__inner is-clearfix {{ ($dm_detail->status >= 6 ? 'pack__inner_gray' : '') }}">
  <div class="is-clearfix mb-10">
  　{!!Form::hidden('id', $dm_detail->id)!!}
    <div class="is-pulled-left" style="width: 70%;">
      @component('components.dms.dm_breadcrumb',['dm_detail'=>$dm_detail])
      @endcomponent
      <b class="dmdetail_senddate">配信日：@if($dm_detail->senddate_id){{ date("Y/m/d", strtotime($dm_haishin_schedule_alls[$dm_detail->senddate_id])) }}@endif</b>
      <b style="font-size: 16px;">　DM登録名：</b>{!!Form::text('name', $dm_detail->name, ['class' =>  'input', 'placeholder' => '', 'style' => 'width: 480px;display:inline-block;', 'v-model' => ''])!!} _{{$dm_detail->id}}{{Config::get('const_dm.DM_ROBO_PREFIX')}}
      <div class="errorName" style="padding-left: 120px;"></div>
    </div>
    <div class="is-pulled-right" style="font-size: 11px;">
      <div>最終更新： {{ $dm_detail->lastset_at }} {{ $dm_detail->lastsetuser_name }}</div>
      @if ($dm_detail->usg_haishistatus)
      <div>
        <span class="is-inline-block">開封率：{{$dm_detail->usg_kaifuritsu}}</span>
        <span class="is-inline-block">DM送付人数：{{$dm_detail->usg_haishinninzu}}人</span>
      </div>
      @endif
    </div>
  </div>
  <table style="width:100%">
    <tr>
      <td style="font-size:16px;font-weight:bold;padding-top:2px;padding-right:20px;">条件<td>
      <td style="padding-right:10px;">
      <div class="columns mb-5">
        <div class="column">
          <b>学校</b>
          @if ($dm_detail->status == 0)
            <div class="control select select90">{!! Form::select('dmschool_id', ['' => '選択しない']+$dm_schools, $dm_detail->dmschool_id) !!}</div>
          @else
            {{ $dm_detail->dmschool_id ? $dm_schools[$dm_detail->dmschool_id ] : '選択しない' }}
          @endif
        </div>
        <div class="column">
          <b>地域</b>
          @if ($dm_detail->status == 0)
            <div class="control select select90">{!! Form::select('dmarea_id', ['' => '選択しない']+$dm_areas, $dm_detail->dmarea_id) !!}</div>
          @else
            {{ $dm_detail->dmarea_id ? $dm_areas[$dm_detail->dmarea_id ] : '選択しない' }}
          @endif
        </div>
        <div class="column">
          <b>志望業種</b>
          @if ($dm_detail->status == 0)
            <div class="control select select80">{!! Form::select('dmgyoshucategory_id', ['' => '選択しない']+Config::get('const_dm.DM_GYOSHUCATEGORIES'), $dm_detail->dmgyoshucategory_id) !!}</div>
          @else
            {{ $dm_detail->dmgyoshucategory_id ? Config::get('const_dm.DM_GYOSHUCATEGORIES')[$dm_detail->dmgyoshucategory_id ] : '選択しない' }}
          @endif
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b>行動</b>
          @if ($dm_detail->status == 0)
          <div class="select actionSelect select90">
          {!! Form::select('dmaction_id', ['' => '選択しない']+Config::get('const_dm.DM_ACTIONS'), $dm_detail->dmaction_id) !!}
          </div>
          <div class="select gyosyuOrHonsya doNotShow">
            {!! Form::select('dmaction_gyoshucategory_id', Config::get('const_dm.DM_GYOSHUCATEGORIES'), $dm_detail->dmaction_gyoshucategory_id) !!}
          </div>
          <div class="select actionTerm doNotShow">
          {!! Form::select('dmaction_jiki_id', Config::get('const_dm.DM_ACTION_JIKI'), $dm_detail->dmaction_jiki_id) !!}
          </div>
          @else
            {{ $dm_detail->dmaction_id ? Config::get('const_dm.DM_ACTIONS')[$dm_detail->dmaction_id ] : '選択しない' }}
            @if ($dm_detail->dmaction_id != "") 　
              @if ($dm_detail->dmaction_id != 3) 　
              {{ $dm_detail->dmaction_gyoshucategory_id ? Config::get('const_dm.DM_GYOSHUCATEGORIES')[$dm_detail->dmaction_gyoshucategory_id ] : '' }}　
              @endif
              {{ $dm_detail->dmaction_jiki_id ? Config::get('const_dm.DM_ACTION_JIKI')[$dm_detail->dmaction_jiki_id ] : '' }}
            @endif
          @endif
        </div>
      </div>
      <td>
      <td rowspan="2" style="padding-left:20px;width:30%;border-left:1px solid #e3e3e3;">
      <div class="field-body mb-10">
        <span class="reservation-name mr-10" style="line-height: 35px;">
          {!! Config::get('const_dm.DM_YOYAKUTYPES')[$dm_detail->yoyakutype_id] !!}
        </span>
        @if ($dm_detail->status == 0 || $dm_detail->status == 3)
        <button type="button" class="button reservation-btn">変更</button>
        @else
        <button type="button" class="button reservation-btn">確認</button>
        @endif
      </div>
      <div class="errorReservation"></div>
      <div class="modal modal-reservation mb-10">
      @component('components.dms.yoyakutypemodal',['dm_detail'=>$dm_detail, 'dm_haishin_schedules'=>$dm_haishin_schedules, 'dm_haishin_finish_schedules'=>$dm_haishin_finish_schedules,'dm_haishin_schedule_alls'=>$dm_haishin_schedule_alls])
      @endcomponent
      </div>
      <div class="field">
        @if ($dm_detail->status == 0)
        <div class="control select">
          @if($company->neo_orid_flg != 1)
          {!! Form::select('haishintype_id', Config::get('const_dm.DM_NOORID_HAISHIN_TYPES'), $dm_detail->haishintype_id) !!}
          @elseif($company->neo_gensenhyoji_flg != 1)
          {!! Form::select('haishintype_id', Config::get('const_dm.DM_NOGENSEN_HAISHIN_TYPES'), $dm_detail->haishintype_id) !!}
          @else
          {!! Form::select('haishintype_id', Config::get('const_dm.DM_HAISHIN_TYPES'), $dm_detail->haishintype_id) !!}
          @endif
          </div>
        @else
          {{Config::get('const_dm.DM_HAISHIN_TYPES')[$dm_detail->haishintype_id]}}
        @endif
        @if($company->neo_gensenhyoji_flg == 1)
          @if ($dm_detail->status == 0)
          <div class="control select">
            {!! Form::select('jinzai_id', [""=>'選択しない'] + $dm_jinzais, $dm_detail->jinzai_id) !!}
          </div>
          @elseif ($dm_detail->haishintype_id != 3)
          <div class="control">{{$dm_detail->jinzai_id ? $dm_jinzais[$dm_detail->jinzai_id] : ""}}</div>
          @endif
        @endif
        <div class="errorJinzaiId"></div>
      </div>
      <div class="column column-input">
        <div class="control">
          <div class="check-box">
            @foreach (config('const_dm.DM_SOTSUNENS') as $key => $option)
              <input id="sotsunen_keys_{{ $dm_detail->id }}_{{ $key }}" class="styled-checkbox" name="sotsunen_keys[]" type="checkbox" value="{{$key}}" {!!(in_array($key, json_decode($dm_detail->sotsunen_keys))) ? 'checked="checked"':''!!}>
              <label class="checklabel" style="display:inline-block;padding: 0.9em 1em 1em 2em;" for="sotsunen_keys_{{ $dm_detail->id }}_{{ $key }}">{{ $option }}</label>
            @endforeach
          </div>
          <div class="errorSotsunenKeys"></div>
        </div>

      <td>
    </tr>
    <tr>
      <td style="font-size:16px;font-weight:bold;padding-top:23px;padding-right:10px;">文面<td>
      <td style="padding-top:20px;padding-right:20px;">
          @if ($dm_detail->status == 0)
            @if (count($dm_temps) == 0)
              <span style="color:red">文面を作成してください</span>
            @else
            <div class="control select select50">{!! Form::select('dmtemp_id', ['' =>'選択してください'] + $dm_temps, $dm_detail->dmtemp_id) !!}</div>
            @endif
          @else
            {{ $dm_temps[$dm_detail->dmtemp_id ] }}
          @endif
        <a href="/dm_temps/{{$company->id}}" class="button is-text">[文面作成]</a>
        <div class="add-text">※厳選表示配信、スペシャル配信を設定する場合はオリジナルデザインの文面を選択ください</div>
        <div class="errorDmTempId"></div>
      <td>
    </tr>
  </table>
  @component('components.dms.dm_btnarea',['dm_detail'=>$dm_detail, 'dm_temps'=>$dm_temps])
  @endcomponent
</div>
{!! Form::close() !!}
