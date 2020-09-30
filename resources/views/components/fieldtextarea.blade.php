
<div class="columns
    @if ($required == false)
      nonRequired
    @endif
">
  <div class="column column-ttl is-3">
    <div class="field-label">{{ $label }}
    @if ($required == true)
      <span class="required">必須</span>
    @endif
    </div>
  </div>
  <div class="column column-input is-9">
    <div class="control">
@if (isset($rows))
      {!!Form::textarea($name, $value, ['class' =>  $class, 'placeholder' => $placeholder, 'v-on:change' => 'changeTextarea($event)', '@paste' => 'onPaste($event)', 'v-model' => $name, 'rows'=>$rows])!!}
@else
      {!!Form::textarea($name, $value, ['class' =>  $class, 'placeholder' => $placeholder, 'v-on:change' => 'changeTextarea($event)', '@paste' => 'onPaste($event)', 'v-model' => $name])!!}
@endif
    @if (isset($addtext) && $addtext != "")
    <span class="add-text"><?php echo $addtext;?></span>
    @endif
    </div>
    @if (!empty($error))
    <span class="validation-error" v-for=" val in {{ $error }} " v-cloak>@{{val}}</span>
      @endif
  </div>
</div>
