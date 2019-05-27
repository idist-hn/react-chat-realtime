<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    public function getMessages() {
        $messages = Message::with('user')->get();
        return ([
            'status' => 200,
            'data' => [
                'messages' => $messages
            ]
        ]);
    }

    public function sendMessage(Request $request) {
        $message = new Message();
        $message->content = $request->message;
        $message->user_id = Auth::id();
        $message->save();

        $message = Message::with('user')->find($message->id);

        return [
            'status' => 200,
            'data' => [
                'message' => $message
            ]
        ];
    }
}
