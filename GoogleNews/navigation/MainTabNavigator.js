import { createDrawerNavigator } from 'react-navigation';

import Search from '../screens/Search';
import Top from '../screens/Top';
import Sports from '../screens/Sports';
import Health from '../screens/Health';
import Technology from '../screens/Technology';
import Science from '../screens/Science';
import Business from '../screens/Business';
import Entertainment from "../screens/Entertainment";

import WebViewNews from '../screens/WebViewNews';

let routeConfig = {
  "Search": { screen: Search },
  "Top": { screen: Top },
  "Sports": { screen: Sports },
  "Health": { screen: Health },
  "Technology": { screen: Technology },
  "Science": { screen: Science },
  "Business": { screen: Business },
  "Entertainment": { screen: Entertainment },
  "WebViewNews": { screen: WebViewNews },
}

let drawerNavigatorConfig = {
  initialRouteName: "Search"
}

const tabNavigator = createDrawerNavigator(routeConfig, drawerNavigatorConfig);

export default tabNavigator;
