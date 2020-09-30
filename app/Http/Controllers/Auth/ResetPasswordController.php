<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
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
        $this->middleware('guest');
    }

    protected function rules()
    {
        return [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed|regex:/^(?=.*[a-z])(?=.*[0-9])(?=.*[#$%&?!@^*()_\+=\-\[\]\"\'<>\/\.,~])[!-~]{8,48}$/i',
        ];
    }

    protected function validationErrorMessages()
    {
        return [
            'token.required' => 'パスワード再設定の有効期限が切れています。再度再設定メールを発行してください。',
            'email.required' => 'メールアドレスは必須です。',
            'email.email' => 'メールアドレスの形式が間違っています。',
            'password.required' => '新しいパスワードは必須です。',
            'password.min' => '新しいパスワードは8文字以上で設定してください。',
            'password.confirmed' => '新しいパスワード[確認]が正しくありません。',
            'password.regex' => '新しいパスワードは半角英語、半角数字、半角記号を1文字以上含めて設定してください。',
        ];
    }


    protected function sendResetResponse($response)
    {
        return redirect("/login")
            ->with('status', trans($response))->with("message",  "パスワードを再設定しました");
    }

    protected function sendResetFailedResponse(Request $request, $response)
    {
        return redirect()->back()
            ->withInput($request->only('email'))
            ->withErrors(['email' => "メールアドレスが正しくありません。"]);
    }

    public function reset(Request $request)
    {
        $this->validate($request, $this->rules(), $this->validationErrorMessages());

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        try {
            $response = $this->broker()->reset(
                $this->credentials($request), function($user, $password) use ($request){
                if(Hash::check($password, $user->password)) {
                    throw new \Exception('新しいパスワードは現在のパスワードと違うものにしてください。');
                }
                $this->resetPassword($user, $password);
            }
            );
        }catch(\Exception $e) {
            return redirect()->back()
                ->withInput($request->only('email'))
                ->withErrors(['email' => "新しいパスワードは現在のパスワードと違うものにしてください。"]);
        }



        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        return $response == Password::PASSWORD_RESET
            ? $this->sendResetResponse($response)
            : $this->sendResetFailedResponse($request, $response);
    }

    protected function resetPassword($user, $password)
    {
        $user->password = Hash::make($password);

        $user->setRememberToken(Str::random(60));
        $user->misslogincount = 0;

        $user->save();

        event(new PasswordReset($user));

//        $this->guard()->login($user);
    }
}
