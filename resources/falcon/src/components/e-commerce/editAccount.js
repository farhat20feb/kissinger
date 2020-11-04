import React,{Fragment,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useForm,watch } from "react-hook-form";
import { Button, Form, Row, Col, FormGroup, Input, CustomInput, Label, Card,CardBody,Spinner } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { set } from 'lodash';

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

const editAccount = (props) => {
  const [checked, setChecked] = useState(true);
  const [AccountList, setAccount] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [server, setServer] = useState('');
  const [port, setPort] = useState('');
  const [database, setDatabase] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [timezone, setTimezone] = useState('');
  const [portal, setPortal] = useState('');
  const [monitor, setMonitor] = useState('');
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
    axios.post(`http://127.0.0.1:8000/api/updateAccountUser`, { 
    id:props.location.state.id,
    name: values.name,
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
           
          toast.success('Your Acoount is updated Successfully!', {
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
 
  useEffect(() => {
    
    const id = props.location.state.id 
    const api = `http://127.0.0.1:8000/api/editAccountUser/${id}`; 
    const token = localStorage.getItem('myToken');
   // console.log('sssss'+token);
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
      .then(({ data }) => {
         // console.log(data);
       setAccount(data);
      // console.log({AccountList})
       data.map((person, index) => (
        setName(person.name),setServer(person.server),setPort(person.port),setDatabase(person.database_name),setUsername(person.username),setPassword(person.password),setTimezone(person.timezone),setPortal(person.portal_url),setMonitor(person.disable_monitoring)  
        //setAccount(false)
        
        ))
      });
 }, []);

 

    return (
        <div className="container">
              <form onSubmit={handleSubmit(onSubmit)}>
                
   
            <Card className="mb-3">
      <FalconCardHeader title="Super Admin Portal Accounts - Edit" light={false}>

      </FalconCardHeader>
        <CardBody className="bg-light card-body">
        {loading && <div style={mystyle}><Spinner color="success" style={{position:'fixed',top:'45%',left:'55%'}}/></div>}
   
          <Row>
            <Col>
  <FormGroup>
    <Label for="exampleName">Name</Label>
    <Input
            type="text"
            name="name"
            id="name"
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Enter your name"
            className={classNames({ 'border-danger': errors.name })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.name && <span className="text-danger fs--1">{errors.name.message}</span>}
  </FormGroup>
  </Col>
  <Col>
  <FormGroup>
  <Label for="exampleName">Server</Label>
  <Input
            type="text"
            name="server"
            id="server"
            value={server}
            onChange={e => setServer(e.target.value)}
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
            onChange={e => setPort(e.target.value)}
            value={port}
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
            onChange={e => setDatabase(e.target.value)}
            value={database}
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
            onChange={e => setUsername(e.target.value)}
            value={username}
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
            onChange={e => setPassword(e.target.value)}
            value={password}
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
        <select name="timezone" id="timezone" value={timezone}  onChange={e => setTimezone(e.target.value)} className="form-control" placeholder="timezone" ref={register({
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
            onChange={e => setPortal(e.target.value)}
            value={portal}
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
  <Input type="checkbox" name="disable_monitoring" checked={monitor == 1 ? checked:!checked} onChange={() => setChecked(!checked)}/>
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

</CardBody>
    </Card>
  
    </form>
        </div>
    );

    }


export default editAccount;