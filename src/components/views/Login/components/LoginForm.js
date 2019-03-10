import React from 'react';
import { Form } from 'react-final-form'
import styled from 'styled-components';

import Spinner from '../../../common/Spinner';
import InputField from '../../../common/InputField';
import { validators } from '../../../../utils/validators';

const Button = styled.button`
  max-width: 285px;
  width: 100%;
  height: 50px;
  padding: 0;
  font-size: 20px;
  color: #fff;
  text-align: center;
  background: #f0776c;
  border: 0;
  border-radius: 5px;
  cursor: pointer; 
  outline:0;
  margin: 30px auto
  display: block
`;

const ErrorMessage = styled.span`
  display: block;
  color: red;
  text-align: center
`;

const LoginForm = ({handleSubmit, loginError, isLogin}) => (
  <div>
    <ErrorMessage>{loginError}</ErrorMessage>

    {
      isLogin ? <Spinner /> : null
    }

    <Form
      onSubmit={handleSubmit}
      validate={validators}
      render={({ handleSubmit, submitting, values, ...props}) => (
        <form onSubmit={handleSubmit} >
          <InputField
            name="email"
            label="Email"
            placeholder="test@gmail.com"
            {...props}
          />

          <InputField
            name="password"
            label="Password"
            placeholder="Password"
            {...props}
          />

          <Button type='submit'>Login</Button>
        </form>
      )}
    />
  </div>
);


export default LoginForm