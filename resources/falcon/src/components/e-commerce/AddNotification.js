import React,{Fragment,useState} from 'react';
import ReactDOM from 'react-dom';
import { useForm,watch } from "react-hook-form";
import { Button, Form, Row, Col, FormGroup, Input, CustomInput, Label, Card,CardBody } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import classNames from 'classnames';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const AddNotification = () => {
    const [value, setValue] = useState('');
  const { register, handleSubmit, errors, watch,getValues } = useForm();
  const onSubmit = values => console.log(values);
  
    return (
        <div className="container">
            <Card className="mb-3">
      <FalconCardHeader title="Create New Notification" light={false}>

      </FalconCardHeader>
        <CardBody className="bg-light card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
  <FormGroup>
    <Label for="exampleName">Name</Label>
    <Input
            type="text"
            name="name"
            id="name"
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
  <Label for="exampleName">Description</Label>
  <Input
            type="text"
            name="desc"
            id="desc"
            placeholder="Description"
            className={classNames({ 'border-danger': errors.desc })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.desc && <span className="text-danger fs--1">{errors.desc.message}</span>}
  </FormGroup>
  </Col>
  </Row>
  <Row>
    <Col>
  <FormGroup>
      <Label for="exampleName">Notification Type</Label>
        <select name="type" id="type" class="form-control"  ref={register({
     required: "select one option"
  })}>
              <option value="">Select</option>
              <option value="kissinger">Kissinger Only</option>
              <option value="both">All</option>
        </select> 
        {errors.type && <p style={{color:'red'}}> {errors.type.message}</p> }
      </FormGroup>
      </Col>
      <Col>
  <FormGroup>
  <Label for="exampleName">Notification Condition</Label>
  <Input
            type="text"
            name="notification_condition"
            id="notification_condition"
            placeholder="Notification Condition"
            className={classNames({ 'border-danger': errors.notification_condition })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.notification_condition && <span className="text-danger fs--1">{errors.notification_condition.message}</span>}
  </FormGroup>
  </Col>
  </Row>
  <Row>
    
  <Col>
  <FormGroup>
  <Label for="exampleName">Scheduler</Label>
  <select name="schedule" id="role" class="form-control" placeholder="schedule" ref={register({
     required: "select one option"
  })}>
              <option value="">Select scheduler</option>
              <option value="Immediate">Immediate</option>
           
        </select> 
        {errors.schedule && <p style={{color:'red'}}> {errors.schedule.message}</p> }
  </FormGroup>
  </Col>
  <Col>
  <FormGroup>
  <Label for="exampleName">Dashboard</Label>
  <select name="dashboard" id="role" class="form-control" placeholder="dashboard" ref={register({
     required: "select one option"
  })}>
              <option value="">Select Dashboard</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="Superadmin">Superadmin</option>
        </select> 
        {errors.dashboard && <p style={{color:'red'}}> {errors.dashboard.message}</p> }
        </FormGroup>
  </Col>
  
  </Row>
  <Row>
  <Col>
  <FormGroup>
  <Label for="exampleName">Subject</Label>
  <Input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className={classNames({ 'border-danger': errors.subject })}
            innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            
          />
          {errors.subject && <span className="text-danger fs--1">{errors.subject.message}</span>}
  </FormGroup>
  </Col>
   </Row> 
  <Row>
    <Col>
  <FormGroup>
  <Label for="exampleName">Body</Label>
  <ReactQuill theme="snow" value={value} onChange={setValue}  style={{ border: '1px solid gainsboro' }}/>
          
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


export default AddNotification;