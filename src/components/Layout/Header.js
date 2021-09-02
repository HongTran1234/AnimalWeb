import React, { Component } from 'react'
import { withRouter } from 'react-router';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom"

class Header extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }
    renderLogin() {
        const Login = localStorage.getItem("Login")
        if (Login == "true") {
            return (
                <li ><a onClick={this.logout}><i className="fa fa-lock icon-log" />Logout</a></li>
            )
        }
        else {
            return (
                <li><Link to="/login"><i className="fa fa-lock icon-log" />Login</Link></li>
            )
        }
    }
    logout() {
        localStorage.clear()
        let a = JSON.stringify(false)
        localStorage.setItem("Login", a)
        this.props.history.push("/login")
    }
    render() {
        return (
            <div>
                <div class="header">
                    <ul class="menu">
                        <li><Link to="/"><img class="logo" src="./animal/image/Women's-Animal-Center-Logo-Color-Stacked-Tagline-Alternate.png" /></Link></li>
                        {this.renderLogin()}
                    </ul>
                </div>
            </div>
        );
    }
}
export default withRouter(Header);