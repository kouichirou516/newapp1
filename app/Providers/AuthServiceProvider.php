<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('author', function ($user) {
            return in_array($user->role, [1,2,3,4,6,7]) === true;
        });

        Gate::define('contributor', function ($user) {
            return in_array($user->role, [1,4]) === true;
        });

        Gate::define('editor', function ($user) {
            return in_array($user->role, [1,2,3,6,7]) === true;
        });

        Gate::define('reporter', function ($user) {
            return in_array($user->role, [2,3,6,7]) === true;
        });

        Gate::define('lancers', function ($user) {
            return $user->role === 4;
        });
    }
}
