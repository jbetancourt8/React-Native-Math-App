import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import Home from '../screens/Home';
import Themes from '../screens/Themes';
import OperationsList from '../screens/OperationsList';
import { Settings } from '../screens/Settings';
import { Info } from '../screens/Info';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    },
    Info: {
      screen: Info,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    },
    Themes: {
      screen: Themes,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    }
  },
  {
    headerMode: 'screen'
  }
);

const OperationsListListStack = StackNavigator({
  OperationsList: {
    screen: OperationsList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
});

export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    },
    OperationsList: {
      screen: OperationsListListStack
    }
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none'
  }
);
