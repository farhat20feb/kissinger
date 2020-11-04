import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, Button, InputGroup, CustomInput } from 'reactstrap';
import CountUp from 'react-countup';
import CardSummary from './CardSummary';
import ActiveUsersBarChart from './ActiveUsersBarChart';
import PaymentsLineChart from './PaymentsLineChart';
import { toast } from 'react-toastify';
import FalconCardHeader from '../common/FalconCardHeader';
import ButtonIcon from '../common/ButtonIcon';
import OrderShare from './OrderShare';
import ItemShare from './ItemShare';
import CustomerShare from './CustomerShare';
import ProcessShare from './ProcessShare';
import FailureShare from './FailureShare';
import TotalSales from './TotalSales';
import loadable from '@loadable/component';
import processShare from '../../data/dashboard/processShare';
import failureShare from '../../data/dashboard/failureShare';
import orderShare from '../../data/dashboard/orderShare';
import itemShare from '../../data/dashboard/itemShare';
import customerShare from '../../data/dashboard/customerShare';
import DashBoardDepositStatus from './DashboardDepositStatus';

const PurchasesTable = loadable(() => import('./PurchasesTable'));
const ActiveUsersMap = loadable(() => import('./ActiveUsersMap'));

const Dashboard = () => {
  // State
  const [isSelected, setIsSelected] = useState(false);

  // useEffect(() => {
  //   toast(
  //     <Fragment>
  //       Welcome to <strong>Falcon React</strong>!<br />
  //       ReactJS Dashboard and WebApp Template 
  //     </Fragment>
  //   );
  // }, []);

  return (
    <Fragment>
        <div className="card-deck">
      <CardSummary rate="" title="Offline" color="warning" linkText=" ">
          PrestaShop 
        </CardSummary>
        <CardSummary rate="" title="Online" color="success" linkText="">
          Web-Store
        </CardSummary>
        <CardSummary rate="" title="Online" color="success" linkText="">
          Magento
        </CardSummary>
      
      </div>
      {/* <PaymentsLineChart />
      <DashBoardDepositStatus /> */}
      <Row noGutters>
        <Col md={4} className="col-xxl-3 mb-3 pr-md-2">
          <OrderShare data={orderShare} />
        </Col>
        <Col md={4} className="col-xxl-3 mb-3 pr-md-2">
          <ItemShare data={itemShare} />
        </Col> 
        <Col md={4} className="col-xxl-3 mb-3 pr-md-2">
          <CustomerShare data={customerShare} />
        </Col>
      
      </Row>

    

      <Card className="mb-3">
        {/* <FalconCardHeader title="Recent Purchases" light={false}>
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
              <ButtonIcon icon="plus" transform="shrink-3 down-2" color="falcon-default" size="sm">
                New
              </ButtonIcon>
              <ButtonIcon icon="filter" transform="shrink-3 down-2" color="falcon-default" size="sm" className="mx-2">
                Filter
              </ButtonIcon>
              <ButtonIcon icon="external-link-alt" transform="shrink-3 down-2" color="falcon-default" size="sm">
                Export
              </ButtonIcon>
            </Fragment>
          )}
        </FalconCardHeader> */}
        {/* <CardBody className="p-0">
          <PurchasesTable setIsSelected={setIsSelected} />
        </CardBody> */}

      
        </Card>
        <Row noGutters>
        <Col lg={6} className="mb-3 pr-lg-2 mb-3">
        <ProcessShare data={processShare} />
        </Col>
        <Col lg={6} className="mb-3 pl-lg-2 mb-3">
        <FailureShare data={failureShare} />
        </Col>
      </Row>

        <Card className="mb-3">
        <CardBody className="p-0">
          <TotalSales className="h-lg-100" />
        </CardBody>
      </Card>
     
      {/* <Row noGutters>
        <Col lg="4" className="pr-lg-2">
          <ActiveUsersBarChart />
        </Col>
        <Col lg="8" className="pl-lg-2">
          <ActiveUsersMap />
        </Col>
      </Row> */}
    </Fragment>
  );
};

export default Dashboard;
