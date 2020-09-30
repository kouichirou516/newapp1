<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Company;
use App\Models\UserCompany;
use App\Models\GenkouKaishajouhou;
use App\Models\GenkouAppeal;
use App\Models\Group;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::truncate();
        Group::truncate();

        //グループ
        factory(Group::class, 10)->create();
        DB::table('groups')->insert([
          'id' => '121',
          'name' => "group121",
          'groupcd' => "0123456789",
          'depname' => "0123456789",
          'depcd' => 244,
        ]);

        //管理者
        DB::table('users')->insert([
            'workerno' => '00000000000',
            'role' => 3,
            'email' => "admin@localhost.com",
            'password' => bcrypt('password'),
            'name' => "管理者アカウント",
            'kananame' => "カンリシャアカウント",
            'misslogincount' => 0,
            'login_token' => "",
            'is_disabled' => 0,
        ]);

        //ロボ
        DB::table('users')->insert([
            'workerno' => '',
            'role' => 10,
            'email' => "robo@localhost.com",
            'password' => bcrypt('password'),
            'name' => "robo",
            'kananame' => "ロボ",
            'misslogincount' => 0,
            'login_token' => "",
            'is_disabled' => 0,
        ]);

        $file = new SplFileObject('database/csv/users.csv');
        $file->setFlags(
          \SplFileObject::READ_CSV |
          \SplFileObject::READ_AHEAD |
          \SplFileObject::SKIP_EMPTY |
          \SplFileObject::DROP_NEW_LINE
        );
        $list = [];
        $i = 0;
        foreach($file as $line) {
          if($i != 0) {
            $list[] = [
              "id" => $line[0],
              "workerno" => $line[1],
              "role" => $line[2],
              "group_id" => $line[3],
              "group_ids" => $line[4],
              "email" => $line[5],
              "password" => bcrypt('password'),
              "name" => $line[7],
              "kananame" => $line[8],
              "misslogincount" => $line[9],
              "is_disabled" => $line[10],
              "login_token" => $line[11],
              "remember_token" => $line[12],
              "created_at" => $line[13],
              "updated_at" => $line[14],
            ];
          }
          $i++;
        }
        DB::table("users")->insert($list);
    }
}
