<div class="columns @if ($required == false) nonRequired @endif">
  <div class="column column-ttl is-3">
    <div class="field-label">{!! $label !!}
    @if ($required == true)
      <span class="required">必須</span>
    @endif
    </div>
  </div>
  <div class="column column-input is-9">
    <div class="control controlw50 mb-10">
      {!!Form::select($name, $options, $value, ['class'=>'custom-select', 'v-on:change' => $name2 ."= ''", 'data-placeholder'=>$placeholder,'v-model' => $name])!!}

      <span class="control" @if(isset($vif) && $vif) v-if={{$vif}} @endif >
        {!!Form::select($name2, $options2, $value2, ['class'=>'custom-select','data-placeholder'=>'以下より選択してください' ,'v-model' => $name2])!!}
      </span>
    </div>
    <span class="validation-error" v-for=" val in {{ $error }} " v-cloak>@{{val}}</span>

  </div>
</div>
