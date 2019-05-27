import React, { Component } from 'react';
import ChatAvatar from "./ChatAvatar";

export default class ChatMessage extends Component {
    render(){
        return (
            <div className="media mt-2 border-info border px-1 py-3">
                <ChatAvatar />
                <div className="media-body">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </div>
        )
    }
}
