import React, {Component} from 'react';
import {Switch, HashRouter, BrowserRouter as Router, Route, Link} from "react-router-dom";
import Navigation from "./Navigation";
import Layout from "./Layout";
import ChatComposer from "./ChatComposer";

export default class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
        }

        echo.join('app')
            .here((members) => {
                this.setState({
                    members: members
                })
            })
            .joining((member) => {
                let members = this.state.members;
                members.push(member);
                this.setState({
                    members: members
                });
            })
            .leaving((member) => {
                let members = this.state.members.filter(m => m != member);
                this.setState({
                    members: members
                })
            });
    }

    render() {
        return (
            <Router>
                <Navigation/>
                <div className="container-fluid mt-5">
                    <HashRouter>
                        <div className="row">
                            <Switch>
                                <Route exact path='/' component={Layout}/>
                                <Route path={`/room/:id`} component={ChatComposer}/>
                            </Switch>
                        </div>
                    </HashRouter>
                </div>
            </Router>
        )
    }
}
