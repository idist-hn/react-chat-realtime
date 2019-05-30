import React, {Component} from 'react';
import {Switch, HashRouter, BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <HashRouter>
                <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            Laravel
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">

                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <Link id="navbarDropdown" className="nav-link dropdown-toggle" to="#" role="button"
                                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Idist
                                        <span className="caret"></span>
                                    </Link>

                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/logout">
                                            Logout
                                        </a>

                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </HashRouter>
        );
    }
}
