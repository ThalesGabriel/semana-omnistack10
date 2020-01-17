import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Detail from './pages/Detail';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevRadar'
      }
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        title: 'Github Profile'
      }
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7d40e7'
      },
      headerTintColor: '#fff'
    }
  }
));

export default Routes;