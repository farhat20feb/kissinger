import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Badge } from 'reactstrap';
import Flex from '../common/Flex';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faBuilding,faUser,faList,faBell,faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faBuilding,faUser,faList,faBell,faTachometerAlt)


const NavbarVerticalMenuItem = ({ route }) => (
  
  <Flex align="center">
    {route.icon && (
      <span className="nav-link-icon">
  <FontAwesomeIcon icon={route.icon} />
      </span>
    )}
    <span className="nav-link-text">{route.name}</span>
    
    {!!route.badge && (
      <Badge color={route.badge.color || 'soft-success'} pill className="ml-2">
        {route.badge.text}
      </Badge>
    )}
  </Flex>
);

NavbarVerticalMenuItem.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default React.memo(NavbarVerticalMenuItem);
