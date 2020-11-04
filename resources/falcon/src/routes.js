import { version } from './config';
import { faBuilding,faUser,faList,faBell,faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

export const homeRoutes = {
  name: 'Dashboard',
  to: '/',
  exact: true,
  icon: faTachometerAlt
};

export const authenticationRoutes = {
  name: 'Logout',
  to: '/authentication/card/login',
  exact: true,
  icon: faBell
};


export const pageRoutes = {
  name: 'Manage Accounts',
  to: '/accounts',
  exact: true,
  icon: faBuilding
};
export const widgetsRoutes = {
  name: 'Manage Notifications',
  to: '/notification',
  exact: true,
  icon: faBell
};
 
export const editsRoutes = {
  name: 'Manage Notifications',
  to: '/edit',
  exact: true,
  icon: faBell
};

export const chatRoutes = {
  name: 'Manage Users',
  to: '/users',
  exact: true,
  icon: faUser
};

 

export const emailRoutes = {
  name: 'Audit Log',
  to: '/viewers',
  exact: true,
  icon: faList
};

 



export default [
  homeRoutes,
  pageRoutes,
  chatRoutes,
  emailRoutes,
  widgetsRoutes,
  authenticationRoutes
];
