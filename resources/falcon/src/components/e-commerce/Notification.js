import React, { createRef, Fragment, useState,useEffect } from 'react';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
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
import { Link,Redirect } from 'react-router-dom';
import Badge from 'reactstrap/es/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconCardHeader from '../common/FalconCardHeader';
import orders from '../../data/e-commerce/notifydata';
import { getPaginationArray } from '../../helpers/utils';

const Notofication = () => {
const orderFormatter = (dataField, { id, name, email }, row) => (
  <Fragment>
    
     <strong>{name}</strong>
     
     
  </Fragment>
);

const configure = (id) => {

}

const shippingFormatter = (address, { shippingType }, row) => (
  <Fragment>
    {address}
    
  </Fragment>
);

const accountFormatter = (account, row) => (
    <Fragment>
      {account}
    
    </Fragment>
  );

const badgeFormatter = status => {
  let color = '';
  let icon = '';
  let text = '';
  switch (status) {
    case 'success':
      color = 'success';
      icon = 'check';
      text = 'Completed';
      break;
    case 'hold':
      color = 'secondary';
      icon = 'ban';
      text = 'On hold';
      break;
    case 'processing':
      color = 'primary';
      icon = 'redo';
      text = 'Processing';
      break;
    case 'pending':
      color = 'warning';
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

const actionFormatter = (dataField, { id }, row) => (
  // Control your row with this id
  <UncontrolledDropdown>
    <DropdownToggle color="link" size="sm" className="text-600 btn-reveal mr-3">
      <FontAwesomeIcon icon="ellipsis-h" className="fs--1" />
    </DropdownToggle>
    <DropdownMenu right className="border py-2">
    <DropdownItem onClick={() => console.log('Processing: ', id)}>Enabled</DropdownItem>
      <DropdownItem onClick={() => Setconfigure(id)}>Configure</DropdownItem>
      <DropdownItem onClick={() => console.log('On hold: ', id)}>Edit</DropdownItem>
      
      <DropdownItem onClick={() => console.log('Delete: ', id)} className="text-danger">
        Delete
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const columns = [
  {
    dataField: 'id',
    text: 'Name',
    classes: 'py-2 align-middle',
    formatter: orderFormatter,
    sort: true
  },
  {
    dataField: 'description',
    text: 'Description',
    classes: 'py-2 align-middle',
    formatter: shippingFormatter,
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


  let table = createRef();
  // State
  const [notifyList, setnotifyList] = useState([]); 
  const [isSelected, setIsSelected] = useState(false);
  const [redir, Setconfigure] = useState(false);
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
    const api = 'http://127.0.0.1:8000/api/notification'; 
    const token = localStorage.getItem('myToken');
   // console.log('sssss'+token);
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
      .then(({ data }) => {
          console.log(data);
       setnotifyList(data);
      });
 }, []);

 if(redir){
  return (
    <Redirect to={{
      pathname: '/configureNotification',
      state: { id: redir }
  }}/>
  )
}

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Manage Notifications" light={false}>
        {isSelected ? (
          <InputGroup size="sm" className="input-group input-group-sm">
            <CustomInput type="select" id="bulk-select">
              <option>Bulk actions</option>
              <option value="Refund">Refund</option>
              <option value="Delete">Delete</option>
              <option value="Archive">Archive</option>
            </CustomInput>
            <Button color="falcon-default" size="sm" className="ml-2">
              Apply
            </Button>
          </InputGroup>
        ) : (
          <Fragment>
              <Link to="/notification/create"> 
            <ButtonIcon icon="plus" transform="shrink-3 down-2" color="falcon-default" size="sm">
            Define Notification
            </ButtonIcon>
            </Link>
          
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
                    data={notifyList}
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

export default Notofication;
