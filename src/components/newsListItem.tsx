

import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList, Image } from "react-native";
import PropTypes from "prop-types";
import { NewsModel } from "../models/newsModel";
import { Icon } from "react-native-elements";
import Moment from 'react-moment';


type Props = {
    newsModel: NewsModel;
};

type StateDef = {
    title: string;
    imgUrl: string;
    publishDate: Date;
};


export default class NewsListItem extends Component<Props, StateDef> {

    static propTypes = {
        newsModel: PropTypes.object.isRequired
    };

    static defaultProps = {
        newsModel: null
    };


    constructor(props: Props) {
        super(props);

        this.state = {
            title: props.newsModel.title,
            imgUrl: props.newsModel.urlToImage,
            publishDate: props.newsModel.publishedAt
        };
    }

    componentDidMount() {
    }

    render() {
        const { title, imgUrl } = this.state;

        return (
            <View style={styles.constainer}>
                <View style={{
                    flex: 1,
                    padding: 10
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 13  }} numberOfLines={2} ellipsizeMode="tail">{title}</Text>

                    <View style={{ position: "absolute", bottom: 10, left: 10, flexDirection: "row", alignItems: "center" }}>
                        <Icon
                            name="clock-o"
                            type="font-awesome"
                            size={16}
                            color="#757575"
                        />
                        <Moment
                            date={this.state.publishDate}
                            format="MMM DD, YYYY"
                            element={Text}
                            style={{
                                fontSize: 12,
                                marginLeft: 5
                            }}
                        ></Moment>
                    </View>
                </View>
                <Image
                    style={{
                        borderRadius: 5
                    }}
                    source={{
                        uri: imgUrl,
                        width: 100,
                        height: 100
                    }}
                />
            </View>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1,
        flexDirection: "row",
        margin: 5,
        borderColor: "#E0E0E0",
        borderWidth: 1,
        borderRadius: 5,
        overflow: "hidden"
    }

});
