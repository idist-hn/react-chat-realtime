import React, {Component} from 'react';

export default class MessageWrite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _token: document.getElementById('token').getAttribute('content')
        }

    }

    render () {
        return (
            <div className="chat-write mt-3">
                <input id='message-editor' className="form-control" name="message" placeholder="Type your mess..."
                       onKeyPress={(e) => this.sendMessage(e, this)}/>
            </div>
        )
    }

    sendMessage(event, self) {
        if (event.which != 13 && event.keyCode != 13) {
            return;
        }
        let content = document.getElementById('message-editor').value;
        document.getElementById('message-editor').value = '';

        let token = document.getElementById('token').getAttribute('content');
        fetch('/send-message', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
            },
            body: JSON.stringify({
                message: content
            })
        })
            .then(function (res) {
                return res.json()
            }).then(function (data) {
            if (data.status == 200) {
                console.log("Send ok");
            }
        })
    }
}
