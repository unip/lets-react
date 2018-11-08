import { createStackNavigator } from 'react-navigation';

import LoginScreen from './src/components/LoginScreen/LoginScreen';
import AppListScreen from './src/components/AppListScreen/AppListScreen';
import NotifListScreen from './src/components/NotifListScreen/NotifListScreen';

export default createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        Apps: AppListScreen,
        NotifList: NotifListScreen,
    },
);
