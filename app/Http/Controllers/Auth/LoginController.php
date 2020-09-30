<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

use App\Models\User;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    protected $maxAttempts = 10;     // ログイン試行回数（回）
    // protected $decayMinutes = 10;   // ログインロックタイム（分）

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    //ログイン処理上書き
    protected function attemptLogin(Request $request)
    {
        $user = User::where('email', $request['email'])->first();
        if($user && $user->misslogincount >= 5) {
            throw ValidationException::withMessages([
                $this->username() => "アカウントがロックされています。",
            ]);
            return false;
        }
        //お客様ロールはパスワードログインできない
        if($user && $user->role == 1) {
            throw ValidationException::withMessages([
                $this->username() => "入力情報が登録内容と一致しません。",
            ]);
            return false;
        }
        return $this->guard()->attempt(
            $this->credentials($request), $request->filled('remember')
        );
    }

    //ログイン成功時上書き
    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        $user = User::where('email', $request['email'])->first();
        if($user) {
            $user->misslogincount = 0;
            $user->save();
        }



        return $this->authenticated($request, $this->guard()->user())
                ?: redirect()->intended($this->redirectPath());
    }

    //ログイン失敗時上書き
    protected function sendFailedLoginResponse(Request $request)
    {
        $user = User::where('email', $request['email'])->first();
        if($user) {
            $user->misslogincount = $user->misslogincount + 1;
            $user->save();
        }
        throw ValidationException::withMessages([
            $this->username() => [trans('auth.failed')],
        ]);
    }

    protected function credentials(Request $request) {
        return array_merge($request->only($this->username(), 'password'), ['is_disabled' => 0]);
    }

    public function logout(Request $request)
    {
      $redirectURL = "/";
      $user = \Auth::user();
      if($user->role == 1) {
        $redirectURL = "/";
      }
      $this->guard()->logout();

      $request->session()->invalidate();

      return redirect($redirectURL);
    }
}
