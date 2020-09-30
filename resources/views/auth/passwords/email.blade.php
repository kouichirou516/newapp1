@extends('layouts.app_auth')

@section('content')
  <section class="hero is-fullheight is-light-grey is-bold">
    <div class="hero-body">
      <div class="container">

        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">

            <!-- Classic inputs -->
            <div id="classic" class="login-form-wrapper">

              <!-- Classic recover form -->
              <div id="recover-form" class="animated preFadeInLeft fadeInLeft">
                <div class="flex-card auth-card is-light-raised light-bordered card-overflow">
                  <div class="auth-card-header">
                    <img src="/assets/images/logos/logo_2020.png" alt="">
                  </div>
                  <div class="auth-card-header auth-card-header-ttl">
                    <h1>リクナビらくらく設定フォーム</h1>
                  </div>
                  <form class="form-horizontal" method="POST" action="{{ route('password.email') }}">
                    {{ csrf_field() }}
                    <div class="field pb-10">
                      <div class="control has-icons-right">
                        <input id="email" type="email" class="input is-large" placeholder="メールアドレス" name="email" value="{{ old('email') }}" required>
                        <span class="icon is-medium is-right">
                                                    <i class="sl sl-icon-paper-plane"></i>
                                                </span>
                      </div>
                    </div>
                    <div class="pt-10 pb-10">
                      <button class="button button-cta btn-align primary-btn is-fullwidth btn-outlined is-bold rounded raised no-lh" type="submit">パスワード再設定メール送信</button>
                    </div>
                  </form>
                </div>
                <p class="has-text-centered">
                  <a class="return" href="/login">←　ログインページに戻る</a>
                </p>
              </div>
              <!-- /Classic recover form -->
            </div>
            <!-- /Classic inputs -->
          </div>
        </div>
      </div>
    </div>
  </section>

@endsection
