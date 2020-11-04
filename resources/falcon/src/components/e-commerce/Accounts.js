import React, { createRef, Fragment, useState,useEffect } from 'react';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import {
  Button,
  Card,
  CardBody,
  Col,
  CustomInput,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  InputGroup,
  Row,
  UncontrolledDropdown
} from 'reactstrap';
import ButtonIcon from '../common/ButtonIcon';
import { Link } from 'react-router-dom';
import Badge from 'reactstrap/es/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconCardHeader from '../common/FalconCardHeader';
import orders from '../../data/e-commerce/orders';
import { getPaginationArray } from '../../helpers/utils';
import  { Redirect,useNavigate,Route,BrowserRouter } from 'react-router-dom'
import { useHistory } from 'react-router';
import HomePage from './Notification';
import About from './editAccount';
import { windows } from 'is_js';


const Accounts = () => {
const orderFormatter = (dataField, { id, name, email }, row) => (
  <Fragment>
    
     <strong>{name}</strong>
     
     
  </Fragment>
);

const shippingFormatter = (address, { shippingType }, row) => (
  <Fragment>
    {address}
    <p className="mb-0 text-500">{shippingType}</p>
  </Fragment>
);

const badgeFormatter = status => {
  let color = '';
  let icon = '';
  let text = '';
  switch (status) {
    
    case 0:
      color = 'warning';
      icon = 'check';
      text = 'Disabled';
      break;
    case 1:
      color = 'success';
      icon = 'stream';
      text = 'Enabled';
      break;
    default:
      color = 'success';
      icon = 'check';
      text = 'Enabled';
  }

  return (
    <Badge color={`soft-${color}`} className="rounded-capsule fs--1 d-block"> 
      {text}
      <FontAwesomeIcon icon={icon} transform="shrink-2" className="ml-1" />
    </Badge>
  );
};

const amountFormatter = amount => {
  return (
    <Fragment>
      {'$'}
      {amount}
    </Fragment>
  );
};



const actionFormatter = (dataField, { id,password,status }, row) => (
  // Control your row with this id
  <UncontrolledDropdown>
    <DropdownToggle color="link" size="sm" className="text-600 btn-reveal mr-3">
      <FontAwesomeIcon icon="ellipsis-h" className="fs--1" />
    </DropdownToggle>
    <DropdownMenu right className="border py-2">
<DropdownItem onClick={() => setStatusVal(id,status)}>{status== 0 ? 'Enabled' : 'Disabled'}</DropdownItem>
      {/* <DropdownItem onClick={() => console.log('Processing: ', id)}>View</DropdownItem> */}
      <DropdownItem onClick={() => setRedir(id)}>Edit</DropdownItem>
      <DropdownItem divider />
      <DropdownItem onClick={() => delAccount(id,password)} className="text-danger">
        Delete
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const columns = [
  {
    dataField: 'name',
    text: 'Name',
    classes: 'py-2 align-middle',
    formatter: orderFormatter,
    sort: true
  },
  {
    dataField: 'status',
    text: 'Status',
    classes: 'py-2 align-middle',
    formatter: badgeFormatter,
    sort: true
  },
  {
    dataField: '',
    text: '',
    classes: 'py-2 align-middle',
    formatter: actionFormatter,
    align: 'right'
  }
];

const options = {
  custom: true,
  sizePerPage: 10,
  totalSize: orders.length
};

const SelectRowInput = ({ indeterminate, rowIndex, ...rest }) => (
  <div className="custom-control custom-checkbox">
    <input
      className="custom-control-input"
      {...rest}
      onChange={() => {}}
      ref={input => {
        if (input) input.indeterminate = indeterminate;
      }}
    />
    <label className="custom-control-label" />
  </div>
);

const selectRow = onSelect => ({
  mode: 'checkbox',
  classes: 'py-2 align-middle',
  clickToSelect: false,
  selectionHeaderRenderer: ({ mode, ...rest }) => <SelectRowInput type="checkbox" {...rest} />,
  selectionRenderer: ({ mode, ...rest }) => <SelectRowInput type={mode} {...rest} />,
  onSelect: onSelect,
  onSelectAll: onSelect
});


const delAccount = (id,password) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not see the account in the list!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      delAccountId(id,password)
      
    } else {
      window.location.reload(false)
    }
  });
}

  

const delAccountId = (id,password) => {
  axios.post(`http://127.0.0.1:8000/api/deleteAccountUser/`,{
    id: id,
    password:password,
    confirmPassword:password
    })
  .then(({ data }) => {
    console.log(data)
    if(data.status == 200){
      swal("Your account has been deleted!", {
        icon: "success",
      })
.then((value) => {
  if(value==true)
  window.location.reload(false)
});
     
}
    
   //setRedirect()
  //console.log(redir);
 });
}

const setStatusVal = (id,status) => {
  let getstatus = '';
 if(status==0){
  getstatus = 1;
 }
 else{
  getstatus = 0;
 }
  axios.post(`http://127.0.0.1:8000/api/status/`, JSON.stringify({
    id: id,
    status: getstatus
    }))
  .then(({ data }) => {
    if(data.status == 200){
      swal("Your status has been changed!", {
        icon: "success",
      })
.then((value) => {
  if(value==true)
  window.location.reload(false)
});

    }
   toast.done();
   //setRedirect()
  //console.log(redir);
 });
 
  

}



  let table = createRef();
  // State
  const [isSelected, setIsSelected] = useState(false);
  const [accountList, setAccount] = useState([]); 
  const [count, setCount] = useState(0);
  const [redir, setRedir] = useState(false);

  
  const handleNextPage = ({ page, onPageChange }) => () => {
    onPageChange(page + 1);
  };



  const handlePrevPage = ({ page, onPageChange }) => () => {
    onPageChange(page - 1);
  };

  const onSelect = () => {
    setImmediate(() => {
      setIsSelected(!!table.current.selectionContext.selected.length);
    });
  };

  

  useEffect(() => {
    

    const api = 'http://127.0.0.1:8000/api/accounts'; 
    const token = localStorage.getItem('myToken');
   // console.log('sssss'+token);
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
      .then(({ data }) => {
         // console.log(data);
       setAccount(data);
      });
 }, []);


 if(redir){
  return (
    <Redirect to={{
      pathname: '/account/edit',
      state: { id: redir }
  }}/>
  )
}
  return (
    
    <Card className="mb-3">
      <FalconCardHeader title="Manage Accounts" light={false}>
        {isSelected ? (
          <InputGroup size="sm" className="input-group input-group-sm">
            <CustomInput type="select" id="bulk-select">
              <option>Bulk actions</option>
              <option value="Delete">Delete</option>
              <option value="change">Change Status</option>
            </CustomInput>
            <Button color="falcon-default" size="sm" className="ml-2">
              Apply
            </Button>
          </InputGroup>
        ) : (
          <Fragment>
             <Link to="/account/new">
            <ButtonIcon icon="plus" transform="shrink-3 down-2" color="falcon-default" size="sm">
           New Account
            </ButtonIcon>
            </Link>
            <ButtonIcon icon="filter" transform="shrink-3 down-2" color="falcon-default" size="sm" className="mx-2">
              Change Status
            </ButtonIcon>
            <ButtonIcon icon="external-link-alt" transform="shrink-3 down-2" color="falcon-default" size="sm">
              Export
            </ButtonIcon>
          </Fragment>
        )}
      </FalconCardHeader>
      <CardBody className="p-0">
        <PaginationProvider pagination={paginationFactory(options)}>
          {({ paginationProps, paginationTableProps }) => {
            const lastIndex = paginationProps.page * paginationProps.sizePerPage;
            
            return (
              
              <Fragment>
                <div className="table-responsive">
              
                  <BootstrapTable
                    ref={table}
                    bootstrap4
                    keyField="id"
                    data={accountList}
                    columns={columns}
                    selectRow={selectRow(onSelect)}
                    bordered={false}
                    classes="table-dashboard table-striped table-sm fs--1 border-bottom mb-0 table-dashboard-th-nowrap"
                    rowClasses="btn-reveal-trigger"
                    headerClasses="bg-200 text-900"
                    {...paginationTableProps}
                  />
                </div>
                <Row noGutters className="px-1 py-3 flex-center">
                  <Col xs="auto">
                    <Button
                      color="falcon-default"
                      size="sm"
                      onClick={handlePrevPage(paginationProps)}
                      disabled={paginationProps.page === 1}
                    >
                      <FontAwesomeIcon icon="chevron-left" />
                    </Button>
                    {getPaginationArray(paginationProps.totalSize, paginationProps.sizePerPage).map(pageNo => (
                      <Button
                        color={paginationProps.page === pageNo ? 'falcon-primary' : 'falcon-default'}
                        size="sm"
                        className="ml-2"
                        onClick={() => paginationProps.onPageChange(pageNo)}
                        key={pageNo}
                      >
                        {pageNo}
                      </Button>
                    ))}
                    <Button
                      color="falcon-default"
                      size="sm"
                      className="ml-2"
                      onClick={handleNextPage(paginationProps)}
                      disabled={lastIndex >= paginationProps.totalSize}
                    >
                      <FontAwesomeIcon icon="chevron-right" />
                    </Button>
                  </Col>
                </Row>
               
              </Fragment>
            );
          }}
        </PaginationProvider>
      </CardBody>
    </Card>
  );
};

export default Accounts;
