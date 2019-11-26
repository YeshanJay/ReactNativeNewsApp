import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";


type Props = {};

export default class AllNewsTab extends Component<Props> {

    static navigationOptions({ navigation }) {

        return {
            title: "ALL Title"
        };
    }

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <SafeAreaView style={styles.constainer}>

            <Text>All News</Text>

            </SafeAreaView>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1
    }

});
