import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { PagerTabIndicator, IndicatorViewPager } from 'rn-advanced-viewpager';


type Props = {};

export default class HomePage extends Component<Props> {

    // static navigationOptions = {
    // };


    constructor(props) {
        super(props);
    }


    render() {

        return (
            <SafeAreaView style={styles.constainer}>



            </SafeAreaView>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1
    }

});
