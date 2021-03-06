import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { NewsService } from "../services/news/newsService";
import { NewsModel } from "../models/newsModel";
import NewsListItem from "../components/newsListItem";
import { NavigationInjectedProps } from "react-navigation";


type Props = {

} & NavigationInjectedProps;

type StateDef = {
    isLoading: boolean;
    news: NewsModel[];
};

export default class TopHeadlineTab extends Component<Props, StateDef> {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            news: []
        };
    }

    componentDidMount() {

        this.loadNews();
    }

    loadNews() {
        this.setState({ isLoading: true });

        NewsService.fetchTopHeadlinesModel(null, {
            country: "us"
        })
            .then((list) => {

                this.setState({
                    isLoading: false,
                    news: list
                });
            })
            .catch((error) => {
                this.setState({ isLoading: false });

                alert(error);
            });
    }
    

    onPress_NewsItem(model: NewsModel, index: number) {
        this.props.navigation.navigate("NewsDetail", {
            newsModel: model,
            index
        });
    }


    renderItem_News({ item, index }: { item: NewsModel; index: number; }) {

        return (
            <NewsListItem
                index={index}
                newsModel={item}
                onPress={this.onPress_NewsItem.bind(this)}
            ></NewsListItem>
        );
    }

    render() {

        return (
            <SafeAreaView style={styles.constainer}>

                <FlatList
                    data={this.state.news}
                    extraData={this.state}
                    keyExtractor={(item, index) => {
                        return "" + index;
                    }}
                    renderItem={this.renderItem_News.bind(this)}

                    refreshing={this.state.isLoading}
                    onRefresh={() => {
                        this.loadNews();
                    }}
                />

            </SafeAreaView>
        );
    }

}



const styles = StyleSheet.create({

    constainer: {
        flex: 1
    }

});
