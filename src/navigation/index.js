import React, { Component } from "react";
import {
    createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, StackNavigator
} from "react-navigation";
import LoginPage from "../pages/login/loginPage";
import { Icon } from "react-native-elements";
import TopHeadlineTab from "../tabs/topHeadlineTab";
import AllNewsTab from "../tabs/allNewsTab";
import ProfileTab from "../tabs/profileTab";
import NewsDetailPage from "../pages/news/newsDetailPage";
import { createFluidNavigator } from "react-navigation-fluid-transitions";



const AuthStack = createStackNavigator({
    Login: {
        screen: LoginPage
    }
});




const AppStack = createBottomTabNavigator({
    TopHeadlineTab: {
        screen: TopHeadlineTab,
        navigationOptions: {
            title: "kjbj",
            tabBarLabel: "sfs",
            tabBarIcon: ({ focused, horizontal, tintColor }) => {

                return (
                    <Icon
                        name="flash"
                        type="font-awesome"
                        color={focused ? "#2196F3" : "#616161"}
                    />
                );
            }
        }
    },
    NewsTab: {
        screen: AllNewsTab,
        navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => {

                return (
                    <Icon
                        name="newspaper-o"
                        type="font-awesome"
                        color={focused ? "#2196F3" : "#616161"}
                    />
                );
            }
        }
    },
    ProfileTab: {
        screen: ProfileTab,
        navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => {

                return (
                    <Icon
                        name="user"
                        type="font-awesome"
                        color={focused ? "#2196F3" : "#616161"}
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
            screen: createStackNavigator({
                Home: {
                    screen: AppStack,
                    navigationOptions: ({ navigation }) => {
                        let title = "";
                        let routeKey = "";
                        if (navigation.state && navigation.state.routes && navigation.state.routes[navigation.state.index]) {
                            routeKey = navigation.state.routes[navigation.state.index].key;
                        }

                        switch (routeKey) {
                            case "TopHeadlineTab":
                                title = "Top Headlines"
                                break;
                            case "NewsTab":
                                title = "News"
                                break;
                            case "ProfileTab":
                                title = "Profile"
                                break;
                        }

                        return {
                            title
                        };
                    }
                },
                NewsDetail: {
                    screen: NewsDetailPage
                }
            })
        },
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
)



const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
