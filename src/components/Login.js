import React, { Component } from 'react'
import FormError from './Error/FormError';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",
            formError: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const nameInput = e.target.name;
        const value = e.target.value;

        this.setState({
            [nameInput]: value
        })
        console.log(nameInput)
        console.log(value)
    }
    handleSubmit(e) {
        e.preventDefault()
        let email = this.state.email
        let pass = this.state.pass
        let flag = true
        let errorSubmit = this.state.formError
        if (email == "") {
            flag = false
            errorSubmit.email = "Please enter your email"
        }
        if (pass == "") {
            flag = false
            errorSubmit.pass = "Please enter your password"
        }
        if (!flag) {
            this.setState({
                formError: errorSubmit
            })
        }
        else {
            const Login = true
            localStorage.setItem("Login", JSON.stringify(Login));
            this.props.history.push("/")
        }
    }
    renderForm() {
        return (
            <>
                <FormError formError={this.state.formError} />
                <form onSubmit={this.handleSubmit}>
                    <div className="txt_field">
                        <input type="text" value={this.state.email} name="email" placeholder="Email" onChange={this.handleChange} />
                    </div>
                    <div className="txt_field">
                        <input type="password" value={this.state.pass} name="pass" placeholder="Password" onChange={this.handleChange} />
                    </div>
                    <input type="submit" defaultValue="Login" />

                </form>
            </>
        )
    }
    render() {
        return (
            <div className="login">
                <div className="center">
                    <h1>Login</h1>
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}
export default Login