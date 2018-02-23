import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="row">
        <form className="col s4">
          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              onClick={(event) => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onClick={(event) => this.setState({ password: event.target.value })}
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;