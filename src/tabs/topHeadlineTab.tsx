import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";


type Props = {};

export default class TopHeadlineTab extends Component<Props> {

    static navigationOptions({ navigation }) {

        return {
            title: "Headline Title"
        };
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }


    render() {

        return (
            <SafeAreaView style={styles.constainer}>

            <Text>Top Headline</Text>

            </SafeAreaView>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1
    }

});
