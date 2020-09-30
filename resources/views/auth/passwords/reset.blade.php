@extends('layouts.app_auth')

@section('content')
  <section class="hero is-fullheight is-light-grey is-bold">
    <div class="hero-body">
      <div class="container">

        <div class="columns is-vcentered">
          <div class="column is-8 is-offset-2">

            <!-- Classic inputs -->
            <div id="classic" class="login-form-wrapper">

              <!-- Classic recover form -->
              <div id="recover-form" class="">
                <div class="flex-card auth-card is-light-raised light-bordered card-overflow">
                  <div class="auth-card-header">
                    <img src="/assets/images/logos/logo_2020.png" alt="">
                  </div>
                  <div class="auth-card-header auth-card-header-ttl">
                    <h1>パスワード再設定</h1>
                  </div>
                  <form class="form-horizontal" method="POST" action="{{ route('password.request') }}">
                    {{ csrf_field() }}
                    <input type="hidden" name="token" value="{{ $token }}">
                    <div class="field field-extend mb-10">
                      <div class="columns">
                        <div class="column column-ttl is-4">
                          <div class="field-label">メールアドレス
                          </div>
                        </div>
                        <div class="column column-input is-8">
                          <div class="control">
                            <input id="email" type="email" class="input is-medium" name="email" value="{{ $email or old('email') }}" required autofocus>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field field-extend mb-10">
                      <div class="columns">
                        <div class="column column-ttl is-4">
                          <div class="field-label">新しいパスワード
                          </div>
                        </div>
                        <div class="column column-input is-8">
                          <div class="control">
                            <input id="password" type="password" class="input is-medium" name="password" required>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field field-extend mb-10">
                      <div class="columns">
                        <div class="column column-ttl is-4">
                          <div class="field-label">新しいパスワード[確認]
                          </div>
                        </div>
                        <div class="column column-input is-8">
                          <div class="control">
                            <input id="password-confirm" type="password" class="input is-medium" name="password_confirmation" required>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="has-text-centered">
                      {!! Form::submit('更新', ['class' => 'button is-primary is-medium', "id" => ""]) !!}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection