import React, {Component} from 'react';
import MessageWrite from './MessageWrite';
import ChatMessage from "./ChatMessage";

export default class ChatComposer extends Component {

    constructor(props) {
        super(props);
        this.addMessage = this.addMessage.bind(this);
        this.state = {
            messages: []
        }
    }

    render() {
        return (
            <div className="col-md-12 pt-3">
                <div className="card box-chat">
                    <div className="card-header">
                        Room VNP
                    </div>
                    <div id='chat-messages' className="chat-messages card-body">
                        <div className="text-center">
                            <i className="alert aler-info"> Room has no message before!</i>
                        </div>
                        {this.state.messages.map((value, index) => (
                            <ChatMessage messagegId={value.id} message={value}/>))}
                    </div>
                </div>
                <MessageWrite addMessage={this.addMessage}/>
            </div>
        );
    }

    componentDidMount() {
        const self = this;
        fetch('/get-messages').then(function (res) {
            return res.json();
        }).then(function (data) {
            let test = self.state.messages;
            let messages = data.data.messages;
            test = test.concat(messages);
            self.setState({
                messages: test
            })
            self.scrollToBottom()
        })
    }

    scrollToBottom() {
        let chat_messages = document.getElementById('chat-messages');
        if (chat_messages) chat_messages.scrollTop = chat_messages.scrollHeight;

    }

    addMessage(message) {
        this.state.messages.push(message);
        this.setState({
            messages: this.state.messages
        })
        this.scrollToBottom()
    }

}
