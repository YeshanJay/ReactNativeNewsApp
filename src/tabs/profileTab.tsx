import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";


type Props = {};

export default class ProfileTab extends Component<Props> {


    constructor(props) {
        super(props);
    }


    render() {

        return (
            <SafeAreaView style={styles.constainer}>

            <Text>Profile</Text>

            </SafeAreaView>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1
    }

});
