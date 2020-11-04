    import React,{Fragment,useEffect,useState} from 'react';
    import ReactDOM from 'react-dom';
    import { useForm,watch } from "react-hook-form";
    import { Button, Form, Row, Col, FormGroup, Input, CustomInput, Label, Card,CardBody } from 'reactstrap';
    import FalconCardHeader from '../common/FalconCardHeader';
    import classNames from 'classnames';
    import { toast } from 'react-toastify';
    
    
    const NewUser = () => {
      const { register, handleSubmit, errors, watch,getValues } = useForm();
      const [AccountList, setAccountList] = useState([]);
      const onSubmit = values => {
        axios.post(`http://127.0.0.1:8000/api/users_create`, { 
        name: values.name,
        email : values.email,
        password : values.password,
        password_confirmation:values.password_confirmation,
        role_id : values.role,
        created_by : 1,
        new_account_user_id : values.account,
        status : 1
       })
          .then(res => {
            if(res.status ==200){
              toast.success('User is created Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
                });
            }
           // console.log(res.data); 
          })
          .catch(function (error) {
            toast.error('Error creating your account!.', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined
              });
        });
      }
    
      useEffect(() => {
        const api = 'http://127.0.0.1:8000/api/getAccountList'; 
        //const token = localStorage.getItem('myToken');
       // console.log('sssss'+token);
        axios.get(api)
          .then(({ data }) => {
              
           setAccountList(data);

           console.log(AccountList);
          });
     }, []);

        return (
            <div className="container">
                <Card className="mb-3">
          <FalconCardHeader title="Create New User" light={false}>

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
      <Label for="exampleName">E-Mail Address</Label>
      <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter your email"
            className={classNames({ 'border-danger': errors.email })}
            innerRef={register({
              required: 'Email is required',
              pattern: {
                value: /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/i,
                message: 'Email must be valid'
              }
            })}
          />
          {errors.email && <span className="text-danger fs--1">{errors.email.message}</span>}

      </FormGroup>
      </Col>
      </Row>
      <Row>
      <Col>
      <FormGroup>
      <Label for="exampleName">Password</Label>
      <Input
              aria-label="Enter your password"
              aria-required="true"
              placeholder="Password"
              className={classNames({ 'border-danger': errors.password })}
              type="password"
              name="password"
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
      <Col>
      <FormGroup>
      <Label for="exampleName">Confirm Password</Label>
      <Input
              aria-label="Enter your password"
              aria-required="true"
              placeholder="Password Confirmation"
              className={classNames({ 'border-danger': errors.password_confirmation })}
              type="password"
              name="password_confirmation"
              className={classNames({ 'border-danger': errors.password_confirmation })}
              innerRef={register({
              required: 'required',
              minLength: {
                value: 2,
                message: 'Minimum two word'
              }
            })}
            />

            {errors.password_confirmation && <p>{errors.password_confirmation.message}</p>}

      </FormGroup>
      </Col>
      </Row>
      <Row>
        <Col>
      <FormGroup>
      <Label for="exampleName">Role</Label>
        <select name="role" id="role" className="form-control" placeholder="Role" ref={register({
     required: "select one option"
  })}>
              <option value="">Select</option>
              <option value="5">Admin</option>
              <option value="6">User</option>
              <option value="7">Superadmin</option>
        </select> 
        {errors.role && <p style={{color:'red'}}> {errors.role.message}</p> }
      </FormGroup>
      </Col>
      <Col>
      <FormGroup>
      <Label for="exampleName">Account Users</Label>
     

      <select name="account" id="exampleName" className="form-control" ref={register({
     required: "select one option"
  })}>
              <option value="">Select</option>
              {AccountList.map((person, index) => (
        <option value={person.id}>{person.name}</option>
    ))}
              
         
        </select> 
              {errors.account && <span className="text-danger fs--1">{errors.account.message}</span>}
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

    export default NewUser;