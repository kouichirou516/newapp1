<div class="fieldtextarea2 columns
    @if ($required == false)
      nonRequired
    @endif
">
  <div class="column column-ttl is-3">
    <div class="field-label {{ $class }}">
      {!!Form::textarea($name, $value, ['class' =>  'textarea', 'v-on:change' => 'changeTextarea($event)', '@paste' => 'onPaste($event)', 'rows'=>'', 'v-model' => $name])!!}
      @if (!empty($error))
      <span class="validation-error" v-for=" val in {{ $error }} " v-cloak>@{{val}}</span>
      @endif
    @if ($required == true)
      <span class="required">必須</span>
    @endif
    </div>
  </div>
  <div class="column column-input is-9">
    {!!Form::textarea($name2, $value2, ['class' => 'textarea', 'v-on:change' => 'changeTextarea($event)', '@paste' => 'onPaste($event)', 'rows'=>'', 'v-model' => $name2])!!}
    @if (!empty($error2))
    <span class="validation-error" v-for=" val in {{ $error2 }} " v-cloak>@{{val}}</span>
    @endif
  </div>
</div>
