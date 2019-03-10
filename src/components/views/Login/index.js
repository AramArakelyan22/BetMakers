import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import LoginForm from './components/LoginForm';
import { login } from "../../../actions/index";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

const FormWrapper = styled.div`
 max-width: 300px;
 width: 100%;
 border: 1px solid light-grey
`;

const Heading = styled.h1`
  padding: 15px 25px;
  line-height: 30px;
  font-size: 25px;
  font-weight: 300;
  color: #ADADAD;
  text-align:center;
  background: #e8eff1;
  margin: 0;
`;


class Login extends Component {

  handleSubmit = values => {
    const { login, history } = this.props;
   login(values.email, values.password, history)
  }

  render() {
    const {
      isLogin,
      loginError
    } = this.props;

    return (
      <Wrapper >
        <FormWrapper>
          <Heading>Login</Heading>
          <LoginForm
            handleSubmit={this.handleSubmit}
            loginError={loginError}
            isLogin={isLogin}
          />
        </FormWrapper>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({authReducer}) => ({isLogin: authReducer.isLogin, loginError: authReducer.loginError});

export default connect(mapStateToProps, {login})(Login)