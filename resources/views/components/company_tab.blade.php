<div class="tabs">
  <ul>
    <li class="tab-link @if (strpos(Request::path(),'genkou_kaishajouhou') !== false) is-active @endif">
      <a href="{{ action('GenkouKaishajouhousController@index', $company->id) }}">会社トップ</a>
    </li>
    <li class="tab-link @if (strpos(Request::path(),'genkou_appeal') !== false) is-active @endif">
      <a href="{{ action('GenkouAppealsController@index', $company->id) }}">アピール情報</a>
    </li>
    <li class="tab-link @if (strpos(Request::path(),'recruit_info_1') !== false) is-active @endif">
      <a href="{{ action('RecruitInfoOneController@index', $company->id) }}">採用情報①</a>
    </li>
    <li class="tab-link @if (strpos(Request::path(),'recruit_info_2') !== false) is-active @endif">
      <a href="{{ action('RecruitInfoTwoController@index', $company->id) }}">採用情報②</a>
    </li>
    <li class="tab-link @if (strpos(Request::path(),'recruit_info_3') !== false) is-active @endif">
      <a href="{{ action('RecruitInfoThreeController@index', $company->id) }}">採用情報③</a>
    </li>
    <li class="tab-link @if (strpos(Request::path(),'recruit_info_4') !== false) is-active @endif">
      <a href="{{ action('RecruitInfoFourController@index', $company->id) }}">採用情報④</a>
    </li>
    <li class="tab-link @if (strpos(Request::path(),'genkou_wes') !== false) is-active @endif">
      <a href="{{ action('GenkouWessController@index', $company->id) }}">WES</a>
    </li>
  </ul>
</div>