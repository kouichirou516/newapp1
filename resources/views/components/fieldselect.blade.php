<div class="columns @if ($required == false) nonRequired @endif"
     @if(isset($vif) && $vif) v-if={{$vif}} @endif
>
  <div class="column column-ttl is-3">
    <div class="field-label">{!! $label !!}
    @if ($required == true)
      <span class="required">必須</span>
    @endif
    </div>
  </div>
  <div class="column column-input is-9">
    <div class="control">
      {!!Form::select($name, $options, $value, [
        'class'=>'custom-select',
        'data-placeholder'=>$placeholder,
        'v-model' => $name
      ])!!}
    </div>
    @if (!empty($error))
      <span class="validation-error" v-for=" val in {{ $error }} " v-cloak>@{{val}}</span>
    @endif
  </div>
</div>
