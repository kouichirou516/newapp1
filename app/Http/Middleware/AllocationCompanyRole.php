<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AllocationCompanyRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = \Auth::user();
        if($user->activeCompanies) {
            $ids = array_map(function($arg){
                return $arg['id'];
            }, $user->activeCompanies->toArray());
            if($request->route('company') && !in_array($request->route('company')->id, $ids)){
                return abort(401);
            }
        }
        if($user->role != 1) {
            return abort(401);
        }
        return $next($request);
    }
}
