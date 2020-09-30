<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Notifications\CustomPasswordReset;


class User extends Authenticatable {
    use Notifiable;
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    public function companies(){
        if(\Auth::user()->role == 1) {
            return $this->belongsToMany('App\Models\Company', 'user_companies')->withPivot('is_received');
        } else {
            return $this->hasMany('App\Models\Company', 'user_id');
        }
    }

    public function activeCompanies(){
        if(\Auth::user()->role == 1) {
            return $this->belongsToMany('App\Models\Company', 'user_companies')->orWhere("is_received", 1)->orWhere("is_received_dm", 1);
        } else {
            return $this->hasMany('App\Models\Company', 'user_id');
        }
    }

    public function group(){
        return $this->belongsTo('App\Models\Group');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'group_id', 'workerno', 'role', 'kananame'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new CustomPasswordReset($token));
    }

//    public function setPasswordAttribute($value){
//        $this->attributes['password'] = bcrypt($value);
//    }
}
