import React, { PureComponent } from "react";
import {
    StyleSheet, View, Platform, Text, FlatList, TextInput,
    StyleProp, TextStyle, TextInputProps
} from "react-native";
import PropTypes from "prop-types";

import { Icon, IconProps } from 'react-native-elements';


type Props = {
    iconName?: string;
    rightIconName?: string;

    inputProps?: TextInputProps;

    iconProps?: IconProps;
    rightIconProps?: IconProps;

    inputStyle?: StyleProp<TextStyle>;

    onChangeText: (text: string) => void;
    onLeftIconPress: () => void;
    onRightIconPress: () => void;
};
// @flow
export default class CustomTextInput extends PureComponent<Props> {

    static propTypes = {
        iconName: PropTypes.string,
        rightIconName: PropTypes.string,

        onChangeText: PropTypes.func,
        onLeftIconPress: PropTypes.func,
        onRightIconPress: PropTypes.func
    };

    static defaultProps = {
        iconName: null,
        rightIconName: null,

        onChangeText: () => null,
        onLeftIconPress: null,
        onRightIconPress: null
    };


    /**
     * 
     * @param {Props} props 
     */
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    // renderLeftIcon() {
    //     const { iconProps, iconName, onLeftIconPress } = this.props;

    //     if (iconName) {

    //         if (onLeftIconPress) {
    //             return (
    //                 <TouchableOpacity
    //                     style={{
    //                         justifyContent: 'center'
    //                     }}
    //                     onPress={() => { alert("Left Icon Pressed") }}>
    //                     <Icon type="font-awesome" name={iconName} color={themeScheme1Codes.primaryTextColor}
    //                         containerStyle={{
    //                             marginRight: 15,
    //                         }}
    //                         size={20}
    //                         {...iconProps}
    //                     />
    //                 </TouchableOpacity>
    //             );
    //         } else {
    //             return (
    //                 <Icon type="font-awesome" name={iconName} color={themeScheme1Codes.primaryTextColor}
    //                     containerStyle={{
    //                         marginRight: 15,
    //                     }}
    //                     size={20}
    //                     {...iconProps}
    //                 />
    //             );
    //         }
    //     }
    //     return null;
    // }

    // renderRightIcon() {
    //     const { rightIconName, rightIconProps, onRightIconPress } = this.props;

    //     if (rightIconName) {

    //         if (onRightIconPress) {
    //             return (
    //                 <TouchableOpacity
    //                     style={{
    //                         justifyContent: 'center'
    //                     }}
    //                     onPress={() => { alert("Right Icon Pressed") }}>
    //                     <Icon type="font-awesome" name={rightIconName} color={themeScheme1Codes.primaryTextColor}
    //                         containerStyle={{
    //                             marginRight: 15,
    //                         }}
    //                         size={20}
    //                         {...rightIconProps}
    //                     />
    //                 </TouchableOpacity>
    //             );
    //         } else {
    //             return (
    //                 <Icon type="font-awesome" name={rightIconName} color={themeScheme1Codes.primaryTextColor}
    //                     containerStyle={{
    //                         marginRight: 15,
    //                     }}
    //                     size={20}
    //                     {...rightIconProps}
    //                 />
    //             );
    //         }
    //     }
    //     return null;
    // }


    render() {
        const { inputProps } = this.props;

        let sty = [];
        if (this.props.style) {
            if (this.props.style.length) {
                sty = this.props.style;
            } else {
                sty = [this.props.style];
            }
        }

        let inputSty = [];
        if (this.props.inputStyle) {
            if (this.props.inputStyle.length) {
                inputSty = this.props.inputStyle;
            } else {
                inputSty = [this.props.inputStyle];
            }
        }

        return (
            <View style={[styles.container, ...sty]}>
                {/* {this.renderLeftIcon()} */}

                <TextInput
                    style={[styles.textInput, ...inputSty]}
                    onChangeText={this.props.onChangeText}
                    {...inputProps}
                >

                </TextInput>

                {/* {this.renderRightIcon()} */}

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: 10,
        paddingHorizontal: 8,
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 5
    },

    textInput: {
        flexGrow: 1,
        fontSize: 16,

        ...Platform.select({
            android: {
                paddingVertical: 0
            }
        })
    }

});
