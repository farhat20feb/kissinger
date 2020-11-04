import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col, FormGroup, Input, CustomInput, Label } from 'reactstrap';
import Divider from '../common/Divider';
import SocialAuthButtons from './SocialAuthButtons';
import withRedirect from '../../hoc/withRedirect';
import  { Redirect } from 'react-router-dom'


const LoginForm = ({ setRedirect, hasLabel, layout }) => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isRedirect, setisRedirect] = useState('');
  const [errormsg, seterrormsg] = useState('');
  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/login', {
      email    : email,
      password : password
    })
  .then(res => {
    localStorage.setItem('myToken',res.data.token);
    //console.log(res.data.token);
    if(res.data.token){
     setisRedirect(true)
    }
    else{
      seterrormsg('Invalid Username and Password!');
    }
  })
   // console.log('hiii');
   // toast.success(`Logged in as ${email}`);
   
  };

  useEffect(() => {
    setIsDisabled(!email || !password);
  }, [email, password]);

  
  if(isRedirect==true){
    return (
      <Redirect to="/notification" />
    )
  }
 
  return (
    <Form onSubmit={handleSubmit}>
      <p style={{color: "red"}}>{errormsg} </p>
      <FormGroup>
        {hasLabel && <Label>Email address</Label>}
        <Input
          placeholder={!hasLabel ? 'Email address' : ''}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
        />
      </FormGroup>
      <FormGroup>
        {hasLabel && <Label>Password</Label>}
        <Input
          placeholder={!hasLabel ? 'Password' : ''}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
        />
      </FormGroup>
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <CustomInput
            id="customCheckRemember"
            label="Remember me"
            checked={remember}
            onChange={({ target }) => setRemember(target.checked)}
            type="checkbox"
          />
        </Col>
        <Col xs="auto">
          <Link className="fs--1" to={`/authentication/${layout}/forget-password`}>
            Forget Password?
          </Link>
        </Col>
      </Row>
      <FormGroup>
        <Button color="primary" block className="mt-3" disabled={isDisabled}>
          Log in
        </Button>
      </FormGroup>
    
    </Form>
  );
};

LoginForm.propTypes = {
  setRedirect: PropTypes.func.isRequired,
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'basic',
  hasLabel: false
};

export default withRedirect(LoginForm);
