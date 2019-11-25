import React, { Component } from "react";
import { View, Button } from "react-native";
import {
    createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator
} from "react-navigation";
import LoginPage from "../pages/login/loginPage";
import HomePage from "../pages/home/homePage";
import { Icon } from "react-native-elements";



const AuthStack = createStackNavigator({
    Login: {
        screen: LoginPage
    }
});




const AppStack = createBottomTabNavigator({
    TopHeadlineTab: {
        screen: HomePage,
        navigationOptions: {
            title: "kjbj",
            tabBarIcon: ({ focused, horizontal, tintColor }) => {

                return (
                    <Icon
                        name="flash"
                        type="font-awesome"
                        color={focused ? "#9E9E9E" : "#212121"}
                    />
                );
            }
        }
    },
    NewsTab: {
        screen: LoginPage,
        navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => {

                return (
                    <Icon
                        name="newspaper-o"
                        type="font-awesome"
                        color={focused ? "#9E9E9E" : "#212121"}
                    />
                );
            }
        }
    },
    ProfileTab: {
        screen: LoginPage,
        navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => {

                return (
                    <Icon
                        name="user"
                        type="font-awesome"
                        color={focused ? "#9E9E9E" : "#212121"}
                    />
                );
            }
        }
    }
}, {
    tabBarOptions: {
        showLabel: false
    }
});



const AppNavigator = createSwitchNavigator(
    {
        App: {
            screen: AppStack
        },
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
)




const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
