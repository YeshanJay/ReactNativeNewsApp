import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";
import { UserLogin } from "../models/userLogin";


type Props = {};

export default class ProfileTab extends Component<Props> {


    constructor(props) {
        super(props);
    }


    render() {

        return (
            <SafeAreaView style={styles.constainer}>

                <Image
                    style={{
                        width: 180,
                        height: 180,
                        borderWidth: 1,
                        borderColor: "#EEE",
                        borderRadius: 90,
                        marginTop: 30,
                        alignSelf: "center"
                    }}
                    source={{
                        uri: UserLogin.instance.profileImage,
                        width: 180,
                        height: 180
                    }}
                />

                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20, alignSelf: "center" }}>{UserLogin.instance.displayName}</Text>

            </SafeAreaView>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1
    }

});
