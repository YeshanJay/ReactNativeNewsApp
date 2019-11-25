import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import CustomTextInput from "../../components/core/customTextInput";
import { Button, Icon } from "react-native-elements";
import { NavigationScreenProp } from "react-navigation";


type Props = {
    navigation: NavigationScreenProp<any, any>
};

export default class LoginPage extends Component<Props> {

    static navigationOptions = {
        header: null
    };


    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }


    onPress_Login() {

        this.props.navigation.navigate("App");
    }


    render() {

        return (
            <SafeAreaView style={styles.constainer}>

                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : undefined} style={{
                    // flex: 1, 
                    maxWidth: 300,
                    width: "100%",
                    alignSelf: "center"
                }}>
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
                            placeholder: "Username"
                        }}
                    ></CustomTextInput>

                    <CustomTextInput
                        inputProps={{
                            placeholder: "Password",
                            secureTextEntry: true
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

            </SafeAreaView>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1,
        justifyContent: "center"
    }

});
