import React, {Component} from 'react';
import MessageWrite from './MessageWrite';
import ChatMessage from "./ChatMessage";

export default class ChatComposer extends Component {
    componentDidMount() {
       let chat_messages=  document.getElementById('chat-messages');
       if(chat_messages) chat_messages.scrollTop = chat_messages.scrollHeight;
    }

    render() {
        return (
            <div className="col-md-12 pt-3">
                <div className="card box-chat">
                    <div className="card-header">
                        Room VNP
                    </div>
                    <div id='chat-messages' className="chat-messages card-body">
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                    </div>
                </div>
                <MessageWrite />
            </div>
        );
    }


}
