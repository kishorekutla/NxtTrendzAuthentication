// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showError: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = msg => {
    this.setState({showError: true, errorMsg: msg})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = ' https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, showError} = this.state

    return (
      <div className="loginform-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        />
        <form onSubmit={this.onSubmit} className="form">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="input-field">
            <label htmlFor="username">USERNAME</label>

            <input
              type="text"
              placeholder="username"
              value={username}
              id="username"
              onChange={this.onChangeUsername}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              id="password"
              onChange={this.onChangePassword}
            />
          </div>

          <button type="submit" className="shop-now-button">
            Login
          </button>

          {showError && <p>{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
