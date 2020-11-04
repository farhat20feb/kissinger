import React, { createRef, Fragment, useState } from 'react';
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
import { Link } from 'react-router-dom';
import Badge from 'reactstrap/es/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconCardHeader from '../common/FalconCardHeader';
import orders from '../../data/e-commerce/audit';
import { getPaginationArray } from '../../helpers/utils';

const orderFormatter = (type, row) => (
  <Fragment>
    
     <strong>{type}</strong>
     
     
  </Fragment>
);

const shippingFormatter = (address, row) => (
  <Fragment>
    {address}
  </Fragment>
);
const accountFormatter = (account, row) => (
    <Fragment>
      {account}
    
    </Fragment>
  );

  const categoryFormatter = (category, row) => (
    <Fragment>
      {category}
    
    </Fragment>
  );






const columns = [
  {
    dataField: 2,
    text: 'Type',
    classes: 'py-2 align-middle',
    formatter: orderFormatter,
    sort: true
  },
  {
    dataField: 3,
    text: 'Category',
    classes: 'py-2 align-middle',
    formatter: categoryFormatter,
    sort: true
  },
  {
    dataField: 4,
    text: 'Message',
    classes: 'py-2 align-middle',
    formatter: accountFormatter,
    sort: true
  },
  {
    dataField: 16,
    text: 'Created',
    classes: 'py-2 align-middle',
    formatter: shippingFormatter,
    sort: true
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

const Auditlog = () => {
  let table = createRef();
  // State
  const [isSelected, setIsSelected] = useState(false);
  const [auditId, setAuditId] = useState('');
  const [auditList, setAuditList] = useState([]);
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

  const handleChange = (e) => {
    const accId  = e.target.value;
    setAuditId(e.target.value);

    const api =  `http://127.0.0.1:8000/api/getKaiauditlog/${accId}?iDisplayLength=100&sSearch=&iDisplayStart=1`;
   // const token = localStorage.getItem('myToken');
   // console.log('sssss'+token);
    axios.get(api)
      .then(({ data }) => {
          console.log(data);
          setAuditList(data.aaData);
      });

      console.log(options);

  }

  return (
    
    <Card className="mb-3">
    
      <FalconCardHeader title="Audit Log" light={false}>
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
             <select id="bulk-select"  onChange={handleChange}> 
              <option>Select Account</option>
              <option value="9" >Rehrig House Productions</option>
              <option value="10">SysCorp International</option>
              <option value="11">Nascent Inc.</option>
            </select>
           
          </Fragment>
        )}
      </FalconCardHeader>
      <CardBody className="p-0">
        <PaginationProvider pagination={paginationFactory(options)}>
          {({ paginationProps, paginationTableProps }) => {
            const lastIndex = paginationProps.page * paginationProps.sizePerPage;

            if (auditId) {
              return (
                <Fragment>
                <div className="table-responsive">
                  
                <BootstrapTable
                    ref={table}
                    bootstrap4
                    keyField="id"
                    data={auditList}
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
            }

            return (
              <Fragment>
                <div className="table-responsive">
                  
                  <BootstrapTable
                    ref={table}
                    bootstrap4
                    keyField="id"
                    data={auditList}
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

export default Auditlog;
