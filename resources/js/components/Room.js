import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, HashRouter} from "react-router-dom";
import ChatComposer from "./ChatComposer";

export default class Room extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            members: []
        };

        echo.join('app')
            .here((members) => {
                this.setState({
                    members: members
                });
                this.props.members(members);
            })
            .joining((member) => {
                let members = this.state.members;
                members.push(member);

                this.setState({
                    members: members
                })
                this.props.members(members);
            })
            .leaving((member) => {
                let members = this.state.members;
                members.filter(m => m != member);

                this.setState({
                    members: members
                })
                this.props.members(members);
            })
    }

    render() {
        return (
            <HashRouter>
                <div className="row">
                    {this.state.rooms.map((room, index) => (
                        <div className="col-md-3" key={"room-" + index}>
                            <div className="card table-hover">
                                <div className="card-header bg-info">
                                    <Link to={'/room/' + room.id} className=" text-white">Room: {room.name}</Link>
                                </div>
                                <div className="card-body">
                                    Has peoples online
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </HashRouter>
        );
    }

    componentDidMount() {
        fetch('/api/rooms').then((res) => {
            return res.json();
        }).then((rooms) => {
            this.setState({
                rooms: rooms
            });
        })
    }
}
