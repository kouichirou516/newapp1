<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use App;
use Closure;
use Illuminate\Support\Facades\Auth;

class RequestLogger
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ( $request->isMethod('post') || $request->isMethod('put') ) {
            $this->writeLog($request);
        }

        return $next($request);
    }

    /**
     * @param Request $request
     * @return void
     */
    private function writeLog(Request $request): void
    {
        if (Auth::check()){
            \Log::info($request->method(), ['url' => $request->fullUrl(), 'request' => $request->all(), 'loginuser_id'=>Auth::user()->id]);
        } else {
            \Log::info($request->method(), ['url' => $request->fullUrl(), 'request' => $request->all()]);
        }
    }
}
