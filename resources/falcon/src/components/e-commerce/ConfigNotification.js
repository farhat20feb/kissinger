import React,{Fragment,useState} from 'react';
import ReactDOM from 'react-dom';
import { useForm,watch } from "react-hook-form";
import { Button, Form, Row, Col, FormGroup, Input, CustomInput, Label, Card,CardBody,Spinner  } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import classNames from 'classnames';
import { toast } from 'react-toastify';

const mystyle = {
 
  color: '#666666',
  position: 'fixed',
  height: '100%',
  width: '100%',
  zIindex: '5000',
  top: '0',
  left: '0',
  float: 'left',
  textAlign: 'center',
  paddingTop: '25%',
  opacity: '8000',
};

const ConfigNotification = () => {
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, watch,getValues } = useForm();
  const onSubmit = values => {
    let getcheck =  '';
    if(checked == true){
      getcheck = 1;
    } 
    else{
      getcheck = 0;
    }
   
    setLoading(true);
    axios.post(`http://127.0.0.1:8000/api/account_new`, { name: values.name,
    server : values.server,
    port : values.port,
    database_name : values.database_name,
    username : values.username,
    password : values.password,
    portal_url : values.portal,
    disable_monitoring : getcheck,
    status:1,
    timezone:values.timezone })
      .then(res => {
        setLoading(false);
        if(res.status ==200){
          toast.success('Your Acoount is created Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
       // console.log(res.data); 
      })
      .catch(function (error) {
        toast.error('Error creating your account!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    });
  }
 
  console.log(checked)
 
  
    return (
        <div className="container">
            <Card className="mb-3">
      <FalconCardHeader title="Super Admin Portal Notification - Configration" light={false}>

      </FalconCardHeader>
        <CardBody className="bg-light card-body">
          {loading && <div style={mystyle}><Spinner color="success" style={{position:'fixed',top:'45%',left:'55%'}}/></div>}
     
    
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
  <FormGroup>
    <Label for="exampleName">Account</Label>
    <Input
            type="text"
            name="account"
            id="account"
            placeholder="Enter your account"
            className={classNames({ 'border-danger': errors.name })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.account && <span className="text-danger fs--1">{errors.account.message}</span>}
  </FormGroup>
  </Col>
  <Col>
  <FormGroup>
  <Label for="exampleName">Notifications Enabled For</Label>
  <Input
            type="text"
            name="server"
            id="server"
            placeholder="Server"
            className={classNames({ 'border-danger': errors.server })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.server && <span className="text-danger fs--1">{errors.server.message}</span>}
  </FormGroup>
  </Col>
  </Row>
  <Row>
    <Col>
  <FormGroup>
  <Label for="exampleName">Port</Label>
  <Input
            type="text"
            name="port"
            id="port"
            placeholder="Port"
            className={classNames({ 'border-danger': errors.port })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.port && <span className="text-danger fs--1">{errors.port.message}</span>}
  </FormGroup>
  </Col>
  <Col>
  <FormGroup>
  <Label for="exampleName">Database</Label>
  <Input
            type="text"
            name="database_name"
            id="database"
            placeholder="Database name"
            className={classNames({ 'border-danger': errors.port })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.port && <span className="text-danger fs--1">{errors.port.message}</span>}
  </FormGroup>
  </Col>
  </Row>
  <Row>
    <Col>
  <FormGroup>
  <Label for="exampleName">Username</Label>
  <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className={classNames({ 'border-danger': errors.username })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.username && <span className="text-danger fs--1">{errors.username.message}</span>}
  </FormGroup>
  </Col>
  <Col>
  <FormGroup>
  <Label for="exampleName">Password</Label>
  <Input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            className={classNames({ 'border-danger': errors.password })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.password && <span className="text-danger fs--1">{errors.password.message}</span>}
  </FormGroup>
</Col>
</Row>
<Row>
  <Col>
  <FormGroup>
      <Label for="exampleName">Timezone</Label>
        <select name="timezone" id="timezone" class="form-control" placeholder="timezone" ref={register({
     required: "select one option"
  })}>
          <option value="">Select Zone</option> 
          <option value="Pacific/Honolulu">Pacific/Honolulu</option> 
          <option value="America/Anchorage">America/Anchorage</option> 
          <option value="America/Los_Angeles">America/Los_Angeles</option> 
          <option value="America/Phoenix">America/Phoenix</option>
          <option value="America/Denver">America/Denver</option> 
          <option value="America/Chicago">America/Chicago</option> 
          <option value="America/New_York">America/New_York</option>
          <option value="America/Adak">America/Adak</option>
          <option value="Pacific/Honolulu">Pacific/Honolulu</option>
                      
        </select> 
        {errors.timezone && <p style={{color:'red'}}> {errors.timezone.message}</p> }
      </FormGroup>
</Col>
<Col>
<FormGroup>
  <Label for="exampleName">Portal URL</Label>
  <Input
            type="text"
            name="portal"
            id="portal"
            placeholder="Portal URL"
            className={classNames({ 'border-danger': errors.portal })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.portal && <span className="text-danger fs--1">{errors.portal.message}</span>}
  </FormGroup>
  </Col>
  </Row>
  <Row>
    <Col>
    <FormGroup className="form-check">
  <Input type="checkbox" name="disable_monitoring" checked={checked} onChange={() => setChecked(!checked)}/>
    <Label check>
    Disable Monitoring
    </Label>
  </FormGroup>
</Col>
<Col>
    <FormGroup>
      <Label for="exampleFile">Logo</Label>
      <Input type="file" name="file" id="exampleFile" />
     </FormGroup>
  </Col>
  </Row>
 
  <Button color="primary">Save</Button>
</form>
</CardBody>
    </Card>
        </div>
    );
    }


export default ConfigNotification;