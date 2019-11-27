import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Linking } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { NewsModel } from "../../models/newsModel";
import { Icon } from "react-native-elements";
import Moment from "react-moment";
import { Transition } from "react-navigation-fluid-transitions";


type Props = {
    newsModel: NewsModel;
} & NavigationInjectedProps;

export default class NewsDetailPage extends Component<Props> {

    index = null;
    newsModel = null;

    constructor(props: Props) {
        super(props);

        this.index = props.navigation.state.params.index;
        this.newsModel = props.navigation.state.params.newsModel;
    }


    render() {
        const newsModel = this.newsModel;

        return (
            <SafeAreaView style={styles.constainer}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{
                            flex: 1
                        }}
                        source={{
                            uri: newsModel.urlToImage,
                            width: "100%",
                            height: 150
                        }}
                        resizeMode="cover"
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <View>
                        <Text>{newsModel.author}</Text>

                        <View style={{ position: "absolute", bottom: 10, left: 10, flexDirection: "row", alignItems: "center" }}>
                            <Icon
                                name="clock-o"
                                type="font-awesome"
                                size={16}
                                color="#757575"
                            />
                            <Moment
                                date={newsModel.publishedAt}
                                format="MMM DD, YYYY"
                                element={Text}
                                style={{
                                    fontSize: 12,
                                    marginLeft: 5
                                }}
                            ></Moment>
                        </View>
                    </View>


                    <Text>{newsModel.title}</Text>

                    <Text>{newsModel.description}</Text>

                    <TouchableOpacity
                        onPress={() => {
                            if (newsModel.url) {
                                Linking.canOpenURL
                            }
                        }}
                    >
                        <Icon
                            name="external-link"
                            type="font-awesome"
                            size={16}
                            color="#757575"
                        />
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1
    }

});
