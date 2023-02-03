import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeTile } from '../redux/actions';
import '../css/Login.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButtonDisabled: true,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(changeTile('Login'));
  }

  validateButton = () => {
    const { email, password } = this.state;
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const minLength = 6;
    const validPassword = password.length >= minLength;
    const isValid = validEmail && validPassword;
    return isValid;
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const isDisabled = this.validateButton();
    this.setState({
      [name]: value,
      isButtonDisabled: !isDisabled,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { email } = this.state;
    const user = { email };
    localStorage.user = JSON.stringify(user);
    history.push('/meals');
  };

  render() {
    const { email, password, isButtonDisabled } = this.state;
    return (
      <section>
        <div className="logo-recipes" />
        <div className="image-tomato" />
        <div className="purple-login">
          <h1
            data-testid="page-title"
            className="title"
          >
            Login

          </h1>
        </div>
        <div className="login-content">
          <input
            className="input-email"
            data-testid="email-input"
            type="email"
            value={ email }
            name="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />

          <input
            className="input-password"
            data-testid="password-input"
            type="password"
            value={ password }
            name="password"
            placeholder="Password"
            onChange={ this.handleChange }
          />

          <button
            className="enter-button"
            type="button"
            data-testid="login-submit-btn"
            disabled={ isButtonDisabled }
            onClick={ this.handleClick }
          >
            Enter
          </button>
        </div>

      </section>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
