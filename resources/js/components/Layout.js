import React, {Component} from 'react';
import Room from "./Room";


export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: []
        }
        this.allMembers = this.allMembers.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        User Online: {this.state.members.length}
                    </div>
                </div>
                <Room members={this.allMembers}/>
            </div>
        );
    }

    allMembers(members) {
        this.setState({
            members: members
        })
    }
}
