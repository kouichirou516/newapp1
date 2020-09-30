<div class="columns">
  <div class="column column-input is-9">
    <div class="control">
      <div class="check-box">
        @foreach ($options as $key => $option)
          {!!Form::checkbox($name, 1, array_key_exists($key, $value), ['id'=> $name . $key, 'class'=>'styled-checkbox','v-model' => $name])!!}
          <label class="checklabel" style="display:inline-block;padding: 0.9em 1em 1em 2em;" for="{{ $name . $key }}">{{ $option }}</label>
        @endforeach
      </div>
      @if (isset($add_text))
      <span class="add-text">{{$add_text}}</span>
      @endif
    </div>
    <p class="validation-error" v-for=" val in {{ $error }} " v-cloak>@{{val}}</p>
  </div>
</div>