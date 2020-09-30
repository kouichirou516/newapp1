<form style="display:inline" action="{{ url($table.'/'.$id) }}" method="post">
  {{ csrf_field() }}
  {{ method_field('DELETE') }}
  <button type="submit" class="button is-danger">
    <i class="fa fa-trash" style="font-size: 20px;"></i> {{$title ? $title : "削除"}}
  </button>
</form>
