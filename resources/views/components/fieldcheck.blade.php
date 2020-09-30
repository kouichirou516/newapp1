<div class="columns @if ($required == false) nonRequired @endif
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
      <div class="radio-box">
        @foreach ($options as $key => $option)
         {!!Form::checkbox($name, 1, null, ['id'=> $name . $key, 'class'=>'styled-checkbox','v-model' => $name])!!}
         <label class="checklabel" for="{{ $name . $key }}">{{ $option }}</label>
        @endforeach
      </div>
    </div>
    <p class="validation-error" v-for=" val in {{ $error }} " v-cloak>@{{val}}</p>
  </div>
</div>