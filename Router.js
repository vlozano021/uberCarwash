import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
const Router = createStackNavigator(
  {
    App,
    Second,
    Third,
    Fourth,
    Fifth
  },
  {
    initialRouteName: 'App',
  }
);

export default createAppContainer(Router);
