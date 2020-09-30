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
      <div class="radio-box">
        @foreach ($options as $key => $option)
          @if ($value == $key)
            {!!Form::radio($name, $key, true, ['v-model'=>$name,'id'=>$name . $key])!!}
          @else
            {!!Form::radio($name, $key, false, ['v-model'=>$name,'id'=>$name . $key])!!}
          @endif
        <label for="{{$name . $key}}">{{ $option }}</label>
        @endforeach
      </div>
    </div>
    @if (!empty($error))
    <p class="validation-error" v-for=" val in {{ $error }} " v-cloak>@{{val}}</p>
    @endif
  </div>
</div>