import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SummaryScreen from '../screens/SummaryScreen';
import DetailsScreen from '../screens/DetailsScreen';

const RootNavigator = StackNavigator({
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                title: 'Login',
            }
        },

        Summary: {
            screen: SummaryScreen,
            navigationOptions: {
                title: 'Summary',
            },
        },

        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                title: 'Details'
            },
        },
    }
);

export default RootNavigator;
