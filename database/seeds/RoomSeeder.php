<?php

use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Room::create([
                'name' => 'Default'
        ]);
        \App\Room::create([
                'name' => 'VNP Group'
        ]);
    }
}
