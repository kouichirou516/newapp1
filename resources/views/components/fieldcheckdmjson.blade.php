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
    <div style="max-height:310px;padding: 10px 0;overflow-y: scroll;">
      @foreach ($options as $key => $option)
      <div class="mb-10">
      <label>
        {!!Form::checkbox($name, $key, in_array($key, $value) ? 'checked' : '', ['class' => 'checkbox-input']) !!}
        <span class="checkbox-label">{{ $option }}</span>
      </label>
      </div>
      @endforeach
    </div>
    @if (isset($add_text))
    <span class="add-text"><?php echo $add_text; ?></span>
    <div id="check_dm_json_error"></div>
    @endif
    <p class="validation-error" v-for=" val in {{ $error }} " v-cloak>@{{val}}</p>
  </div>
</div>
