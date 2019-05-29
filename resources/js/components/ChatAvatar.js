import React, {Component} from 'react'

export default class ChatAvatar extends Component {
    render() {
        return (
            <div className="mr-3 text-center">
                <img src={this.props.user.avatar} className="" alt={this.props.user.name}
                     style={{width: 30 + 'px', borderRadius: 100 + "%"}}/>
                <div className="" style={{
                    fontSize: 8 + "px",
                    maxWidth: 30 + "px",
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                }}>
                    {this.props.user.name}
                </div>
            </div>
        )
    }
}
