

import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { NewsModel } from "../models/newsModel";
import { Icon } from "react-native-elements";
import Moment from 'react-moment';
import { Transition } from 'react-navigation-fluid-transitions';


type Props = {
    index?: number;
    newsModel: NewsModel;
    onPress: (model: NewsModel, index: number) => void;
};

type StateDef = {
    title: string;
    imgUrl: string;
    publishDate: Date;
};


export default class NewsListItem extends Component<Props, StateDef> {

    static propTypes = {
        newsModel: PropTypes.object.isRequired,
        onPress: PropTypes.func
    };

    static defaultProps = {
        newsModel: null,
        onPress: () => null
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

    onPress_NewsItem() {
        if (this.props.onPress) {
            this.props.onPress(this.props.newsModel, this.props.index);
        }
    }

    render() {
        const { title, imgUrl } = this.state;

        return (
            <TouchableOpacity style={styles.constainer} onPress={this.onPress_NewsItem.bind(this)}>
                <View style={{
                    flex: 1,
                    padding: 10
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 13 }} numberOfLines={2} ellipsizeMode="tail">{title}</Text>

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
            </TouchableOpacity>
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
