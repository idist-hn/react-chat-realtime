<?php

namespace App\Http\Controllers;

use App\Events\SentMessage;
use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    public function getMessages(Request $request) {

        $messages = Message::where('room_id', $request->roomId)->with('user')->get();
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
        $message->room_id = $request->roomId;
        $message->user_id = Auth::id();
        $message->save();

        $message = Message::with('user')->find($message->id);

        // Announce that a new message has been posted
        broadcast(new SentMessage($message->user, $message))->toOthers();

        return [
            'status' => 200,
            'data' => [
                'message' => $message
            ]
        ];
    }
}
