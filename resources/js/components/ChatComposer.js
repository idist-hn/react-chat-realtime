import React, {Component} from 'react';
import MessageWrite from './MessageWrite';
import ChatMessage from "./ChatMessage";

export default class ChatComposer extends Component {

    constructor(props) {
        super(props);
        this.addMessage = this.addMessage.bind(this);
        this.state = {
            messages: [],
            members: []
        };
        echo.join('chatroom-' + this.props.match.params.id)
            .here((members) => {
                this.setState({
                    members: members
                });
            })
            .joining((member) => {
                let members = this.state.members;
                members.push(member);
                this.setState({
                    members: members
                })
            })
            .leaving((member) => {
                let members = this.state.members.filter(m => m != member);
                this.setState({
                    members: members
                })
            })
            .listen('SentMessage', this.addMessage);
    }


    componentDidMount() {
        const self = this;
        fetch('/get-messages?roomId=' + this.props.match.params.id)
            .then(function (res) {

            return res.json();
            })
            .then(function (data) {
                let test = self.state.messages;
                let messages = data.data.messages;
                test = test.concat(messages);
                self.setState({
                    messages: test
                });
                self.scrollToBottom()
            });
    }

    scrollToBottom() {
        let chat_messages = document.getElementById('chat-messages');
        if (chat_messages) chat_messages.scrollTop = chat_messages.scrollHeight;

    }

    addMessage(message) {

        console.log("sent message", message);
        let messages = this.state.messages;
        messages.push(message.message);

        this.setState({
            messages: messages
        })

        console.log(this.state.messages)

        this.scrollToBottom()
    }


    render() {
        return (
            <div className="container">
                <div className="col-md-12 pt-3">
                    <div className="card box-chat">
                        <div className="card-header">
                            Room VNP - {this.state.members.length} users
                        </div>
                        <div id='chat-messages' className="chat-messages card-body">
                            <div className="text-center">
                                <i className="alert aler-info"> Room has no message before!</i>
                            </div>
                            {this.state.messages.map((value, index) => (
                                <ChatMessage key={"message-" + value.id} index={index} messagegId={value.id}
                                             message={value}/>))}
                        </div>
                    </div>
                    <MessageWrite roomID={this.props.match.params.id} addMessage={this.addMessage}/>
                </div>
            </div>
        );
    }


}
