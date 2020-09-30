<input type="hidden" value="0" name="{{$name}}">
{{Form::checkbox($name, 1, $value, ['id'=>$id,'class' => $class,'v-model' => $name, ':checked' => $name . '==1' ])}}
