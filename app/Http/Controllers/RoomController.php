<?php

namespace App\Http\Controllers;

use App\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index(Room $room) {
        return view("room.index");
    }

    public function list() {
        return Room::all();
    }
}
