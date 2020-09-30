<div class="task task-progress">
  <span class="task-progress-text">必須項目入力状況：</span>
  <span class="peityjs-pie">{{isset($genkou->answer_count) ? $genkou->answer_count : 0}}/{{isset($genkou->answer_allcount) ? $genkou->answer_allcount : 0}}</span>
  <div class="twoline-group">
    <span class="percent-extend">{{isset($genkou->answer_count) && isset($genkou->answer_allcount) && $genkou->answer_allcount ? floor(($genkou->answer_count / $genkou->answer_allcount) * 100) : 0}}<span>%</span></span>
    <span><small>あと残り{{isset($genkou->answer_count) && isset($genkou->answer_allcount) ? $genkou->answer_allcount - $genkou->answer_count : $init}}項目（{{isset($genkou->answer_allcount) ? $genkou->answer_allcount : $init}}項目中）</small></span>
  </div>
</div>