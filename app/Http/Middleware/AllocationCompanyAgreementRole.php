<?php

namespace App\Http\Middleware;

use App\Models\Company;
use App\Models\User;
use App\Models\UserCompany;
use Closure;

class AllocationCompanyAgreementRole
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = \Auth::user();
        $select_company = $request->route('company');
        $userGroupIds = explode(',', $user->group_ids);

        if (1 == $user->role) {//お客様
            $user_company = UserCompany::where('user_id', $user->id)->where('company_id', $select_company->id)->first();
            if ($user->companies) {
                $ids = array_map(function ($arg) {
                    return $arg['id'];
                }, $user->companies->toArray());
                if ($request->route('company') && ! in_array($request->route('company')->id, $ids)) {
                    return abort(401);
                }
            }

            // user_company wis側送っているなら、is_agreedが0なら同意画面
            if (1 == $user_company->is_received && ! $select_company->is_agreed) {
                return redirect('/companies/agreement/'.$select_company->id);
            }

            if (in_array($select_company->user_depcd, \Config::get('const.DM_TARGET_DEPCDS'))) {
                // user_company DM側送っているなら、is_agreed_dmが0なら同意画面
                if (1 != $select_company->is_agreed_dm) {
                    return redirect('/companies_dm/agreement/'.$select_company->id);
                }
            }
        } elseif (2 == $user->role) {//営業
            if ($select_company->user_id != $user->id) {
                return redirect('/companies/');
            }
        } elseif (4 == $user->role) {//ランサーズ
            if ($select_company->user_depcd != $user->group->depcd) {
                return redirect('/companies/');
            }
        } elseif (6 == $user->role) {//GM
            if ($select_company->user_group_id != $user->group_id) {
                return redirect('/companies/');
            }
        }

        return $next($request);
    }
}
