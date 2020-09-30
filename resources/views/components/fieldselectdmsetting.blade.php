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
        'class'=>'custom-select gyosyu-select',
        'data-placeholder'=>$placeholder,
        'v-model' => $name,
        'id' => $name
      ])!!}
      <div id="category_{{$name}}" style="font-weight:bold;padding:10px 0;">{!! $label !!}群: </div>
    </div>
    @if (isset($addtext) && $addtext != "")
    <span class="add-text"><?php echo $addtext; ?></span>
    @endif
    @if (!empty($error))
      <span class="validation-error" v-for=" val in {{ $error }} " v-cloak>@{{val}}</span>
    @endif
  </div>
</div>
