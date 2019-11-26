import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, Platform, ActivityIndicator, Keyboard } from "react-native";
import CustomTextInput from "../../components/core/customTextInput";
import { Button, Icon } from "react-native-elements";
import { NavigationScreenProp } from "react-navigation";
import { AuthService } from "../../services/auth/authService";


type Props = {
    navigation: NavigationScreenProp<any, any>
};

export default class LoginPage extends Component<Props> {

    static navigationOptions = {
        header: null
    };


    state = {
        isLoading: false,
        username: "",
        password: ""
    };

    constructor(props) {
        super(props);

    }

    validateLogin() {
        const { username, password } = this.state;

        if (!username) {
            alert("Please enter your username.");
            return false;
        }
        if (!password) {
            alert("Please enter your password.");
            return false;
        }

        return true;
    }


    onChangeText_Username(text) {

        this.setState({
            username: text
        });
    }

    onChangeText_Password(text) {

        this.setState({
            password: text
        });
    }

    onPress_Login() {
        const { username, password } = this.state;

        Keyboard.dismiss();

        if (!this.validateLogin()) {
            return;
        }

        this.setState({ isLoading: true });

        AuthService.authenticateUser(username, password)
            .then(() => {
                this.setState({ isLoading: false });

                this.props.navigation.navigate("App");
            })
            .catch((error) => {
                this.setState({ isLoading: false });

                alert(error);
            });
    }


    renderLoader() {
        if (!this.state.isLoading) {
            return null;
        }

        return (
            <ActivityIndicator
                animating={true}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    // backgroundColor: "yellow"
                }}
                size={Platform.OS == "ios" ? "large" : 36}
            ></ActivityIndicator>
        );
    }

    render() {

        return (
            <SafeAreaView style={styles.constainer}>

                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : undefined} style={styles.loginContainer}>
                    <Icon
                        name="newspaper-o"
                        type="font-awesome"
                        color="#616161"
                        size={72}
                        containerStyle={{
                            marginBottom: 50
                        }}
                    />

                    <CustomTextInput
                        inputProps={{
                            placeholder: "Username",
                            value: this.state.username,
                            onChangeText: this.onChangeText_Username.bind(this)
                        }}
                    ></CustomTextInput>

                    <CustomTextInput
                        inputProps={{
                            placeholder: "Password",
                            secureTextEntry: true,
                            value: this.state.password,
                            onChangeText: this.onChangeText_Password.bind(this)
                        }}
                    ></CustomTextInput>


                    <Button
                        title="Login"
                        onPress={this.onPress_Login.bind(this)}
                        style={{
                            marginTop: 20
                        }}
                    ></Button>
                </KeyboardAvoidingView>

                {this.renderLoader()}
            </SafeAreaView>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1,
        justifyContent: "center"
    },

    loginContainer: {
        maxWidth: 300,
        width: "100%",
        alignSelf: "center"
    }

});
