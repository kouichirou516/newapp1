<div class="columns @if ($required == false) nonRequired @endif"
     @if(isset($vif) && $vif) v-if={{$vif}} @endif
>
  <div class="column column-ttl is-3">
    <div class="field-label">{!!  $label !!}
    @if ($required == true)
      <span class="required">必須</span>
    @endif
    @if (isset($help) && $help != "")
      <a class="tooltipicon">i<span class="tooltip"><span class="text">{{$help}}</span></span></a>
    @endif
    </div>
  </div>
  <div class="column column-input is-9">
    <div class="control">
      {!!Form::text($name, $value, ['class' =>  $class, 'placeholder' => $placeholder, 'v-model' => $name])!!}
    </div>
    @if (isset($addtext) && $addtext != "")
    <span class="add-text">{{$addtext}}</span>
    @endif
    @if (!empty($error))
      <div v-cloak>
        <span class="validation-error" v-for=" val in {{ $error }} ">@{{val}}</span>
      </div>
    @endif
  </div>
</div>
