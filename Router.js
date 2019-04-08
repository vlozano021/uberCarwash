import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from "./App";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth"

const Router = createStackNavigator(
  {
    App,
    Second,
    Third,
    Fourth
  },
  {
    initialRouteName:'App',
  }
);

export default createAppContainer(Router);
