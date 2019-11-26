import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { NewsModel } from "../models/newsModel";
import { NewsService } from "../services/news/newsService";
import NewsListItem from "../components/newsListItem";


type Props = {};

type StateDef = {
    isLoading: boolean;
    keywords: string[];
    news: NewsModel[];

    selectedKeyword: string;
};

export default class AllNewsTab extends Component<Props, StateDef> {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            keywords: [],
            news: [],

            selectedKeyword: null
        };
    }

    componentDidMount() {
        this.loadKeywordTags();
    }

    loadKeywordTags() {
        this.setState({
            isLoading: true
        });

        NewsService.fetchNewsKeywords()
            .then((data) => {
                this.setState({
                    keywords: data
                });

                if (data && data.length) {
                    this.state.selectedKeyword = data[0];

                    this.loadNews();
                } else {
                    this.setState({
                        isLoading: false
                    });
                }
            })
            .catch((error) => {
                this.setState({
                    isLoading: false
                });

                alert(error);
            })

    }

    loadNews() {
        const { selectedKeyword } = this.state;

        if (!selectedKeyword) {
            return;
        }

        this.setState({
            isLoading: true
        });

        NewsService.fetchAllModel(selectedKeyword)
            .then((list) => {

                this.setState({
                    isLoading: false,
                    news: list
                });
            })
            .catch((error) => {
                this.setState({
                    isLoading: false
                });

                alert(error);
            });
    }

    onPress_Keyword(keyword) {
        this.state.selectedKeyword = keyword;

        this.loadNews();
    }



    renderItem_News({ item, index }: { item: NewsModel; index: number; }) {

        return (
            <NewsListItem
                newsModel={item}
            ></NewsListItem>
        );
    }

    renderItem_Keyword({ item, index }: { item: string; index: number; }) {

        let stySelected = {};
        let stySelectedText = {};
        if (item == this.state.selectedKeyword) {
            stySelected = {
                backgroundColor: "#2196F3"
            };
            stySelectedText = {
                color: "#FFF"
            };
        }

        return (
            <TouchableOpacity
                style={[{
                    padding: 6,
                    marginHorizontal: 3,
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: "#9E9E9E",
                    backgroundColor: "#FFF"
                }, stySelected]}
                onPress={this.onPress_Keyword.bind(this, item)}
            >
                <Text style={[{ color: "#424242" }, stySelectedText]}>{item}</Text>
            </TouchableOpacity>
        );
    }

    render() {

        return (
            <SafeAreaView style={styles.constainer}>
                <View style={{ backgroundColor: "#E0E0E0", paddingHorizontal: 5, paddingVertical: 8 }}>
                    <FlatList
                        data={this.state.keywords}
                        extraData={this.state}
                        horizontal={true}
                        keyExtractor={(item, index) => {
                            return "" + index;
                        }}
                        renderItem={this.renderItem_Keyword.bind(this)}
                    />
                </View>

                <FlatList
                    style={{
                        flex: 1
                    }}
                    data={this.state.news}
                    extraData={this.state}
                    keyExtractor={(item, index) => {
                        return "" + item.title;
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
