import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import TopHeadlines from '../screens/TopHeadlines';

const TopHeadlinesScreen = createStackNavigator({
  Home: TopHeadlines,
});

const tabNavigator = createDrawerNavigator({
  TopHeadlinesScreen,
});

export default tabNavigator;
