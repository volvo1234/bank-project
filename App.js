import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import LoginScreen from './src/screens/LoginScreen';
// import SummaryScreen from './src/screens/SummaryScreen';
import RootNavigator from './src/config/router';


//
// const App = StackNavigator({
//
// });
//
// export default App;
export default class App extends React.Component {
    render() {
        return (
            <RootNavigator />
        );
    }
}


//
// const App = StackNavigator({
//     Login: {
//         screen: LoginScreen,
//     },
//     Summary: {
//         screen: SummaryScreen,
//     },
// });
//
// export default App;
