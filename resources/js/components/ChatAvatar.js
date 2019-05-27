import React, {Component} from 'react'

export default class ChatAvatar extends Component {
    render() {
        return (
            <img src={this.props.user.avatar} className="mr-3" alt={this.props.user.name}
                 style={{width: 30 + 'px', borderRadius: 100 + "%"}}/>
        )
    }
}
