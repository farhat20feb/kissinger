import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';

import AuthCardLayout from '../../../layouts/AuthCardLayout';

const Login = () => {
  return (
    <AuthCardLayout
      leftSideContent={
        <Fragment>
         
         
        </Fragment>
      }
    >
      <h3>Account Login</h3>
      <LoginForm layout="card" hasLabel />
    </AuthCardLayout>
  );
};

export default Login;
