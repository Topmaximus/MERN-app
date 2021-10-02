
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Root } from 'native-base'
import store from 'src/Store';

import Welcome from 'src/screens/Welcome'

const Stack = createStackNavigator();
const config = {
  	animation: 'none',
  	config: {
    	stiffness: 1000,
    	damping: 0.00,
    	mass: 3,
    	overshootClamping: true,
    	restDisplacementThreshold: 0.01,
    	restSpeedThreshold: 0.01,
  	},
};

class Routes extends Component {
  	render(){
		return (
			<Provider store={store}> 
	            <Root> 
					<NavigationContainer>
						<StatusBar translucent backgroundColor={'#EA5395'} barStyle="light-content" />
						<Stack.Navigator initialRouteName="Welcome">
							<Stack.Screen 
								name="Welcome" 
								component={Welcome} 
								options={({ navigation, route }) => ({
									title: 'Welcome',
									headerShown: false,
									headerTintColor: 'white',
									transitionSpec: {
								      	open: config,
								      	close: config,
								    }
								})}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</Root> 
          	</Provider>
		)
  	}
}

export default Routes