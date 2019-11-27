import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Linking } from "react-native";
import { NavigationInjectedProps, ScrollView } from "react-navigation";
import { NewsModel } from "../../models/newsModel";
import { Icon } from "react-native-elements";
import Moment from "react-moment";
import { Transition } from "react-navigation-fluid-transitions";


type Props = {
    newsModel: NewsModel;
} & NavigationInjectedProps;

export default class NewsDetailPage extends Component<Props> {

    index = null;
    newsModel: NewsModel = null;

    constructor(props: Props) {
        super(props);

        this.index = props.navigation.state.params.index;
        this.newsModel = props.navigation.state.params.newsModel;
    }

    async onPress_OpenLink() {
        const newsModel = this.newsModel;

        if (newsModel.url) {
            try {
                const canOpen = await Linking.canOpenURL(newsModel.url);
                if (canOpen) {
                    await Linking.openURL(newsModel.url);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }


    renderImage() {
        const newsModel = this.newsModel;

        if (!newsModel.urlToImage) {
            return null;
        }

        return (
            <View style={{ flex: 1 }}>
                <Image
                    style={{
                        flex: 1
                    }}
                    source={{
                        uri: newsModel.urlToImage,
                        // width: "100%",
                        height: 200
                    }}
                    resizeMode="cover"
                />
            </View>
        );
    }

    render() {
        const newsModel = this.newsModel;

        return (
            <SafeAreaView style={styles.constainer}>
                <ScrollView style={{ flex: 1 }}>

                    {this.renderImage()}

                    <View style={{ flex: 2 }}>
                        <View style={{
                            marginBottom: 40
                        }}>
                            <View style={{ position: "absolute", top: 10, left: 10, flexDirection: "row", alignItems: "center" }}>
                                <Icon
                                    name="user"
                                    type="font-awesome"
                                    size={16}
                                    color="#757575"
                                />
                                <Text
                                    style={{
                                        fontSize: 12,
                                        marginLeft: 5
                                    }}
                                >{newsModel.author}</Text>
                            </View>

                            <View style={{ position: "absolute", top: 10, right: 10, flexDirection: "row", alignItems: "center" }}>
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

                        <View style={{
                            padding: 10
                        }}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: "bold"
                            }}>{newsModel.title}</Text>

                            <Text style={{
                                marginTop: 20,
                                textAlign: "justify"
                            }}>{newsModel.description}</Text>

                            {/* <Text style={{
                                marginTop: 20,
                                textAlign: "justify"
                            }}>{newsModel.content}</Text> */}
                        </View>
                    </View>
                </ScrollView>

                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "flex-end",
                        backgroundColor: "#EEE",
                        borderRadius: 10,
                        padding: 10,
                        marginTop: 10,
                        marginBottom: 20,
                        marginRight: 20
                    }}
                    onPress={this.onPress_OpenLink.bind(this)}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            marginRight: 10
                        }}
                    >{newsModel.sourceName}</Text>
                    <Icon
                        name="external-link"
                        type="font-awesome"
                        size={16}
                        color="#757575"
                    />
                </TouchableOpacity>

            </SafeAreaView>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1
    }

});
