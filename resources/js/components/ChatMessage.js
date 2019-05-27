import React, { Component } from 'react';
import ChatAvatar from "./ChatAvatar";

export default class ChatMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message
        }

    }
    render(){
        return (
            <div id={this.props.messagegId} className="media mt-2 border-info border px-1 py-3">
                <ChatAvatar user={this.state.message.user}/>
                <div className="media-body">
                    <div>
                        {this.state.message.content}
                    </div>
                    <i style={{
                        fontSize: 10 + 'px'
                    }}>
                        {this.state.message.created_at}
                    </i>
                </div>
            </div>
        )
    }
}
