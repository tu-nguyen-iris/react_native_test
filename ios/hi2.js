import React, { Component } from 'react'
// import Button from "react-native-button"
import { Button, ScrollView, Dimensions, View, Text, StyleSheet } from 'react-native'
const style = StyleSheet.create({
    text: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: 50
    }
})
export default class Hi2 extends Component {
    render() {
        let screenWidth = Dimensions.get("window").width // lay chieu dai screem
        let screenHeigh = Dimensions.get("window").height
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true} //cho phep lat trang
                scrollIndicatorInsets={{ top: 1, left: 1, bottom: 1, right: 1 }}//like dot carousel
            >
                <View
                    style={{ flex: 1, width: screenWidth, height: screenHeigh, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}
                >
                    <Text style={style.text}>This is a text</Text>
                </View>
                <View
                    style={{ flex: 1, width: screenWidth, height: screenHeigh, backgroundColor: "blue", justifyContent: "center" }}
                >

                    <Button style={{ color: "red", justifyContent: "center", backgroundColor: "black" }} onPress={() => alert("oke boi")} title="clickme" />
                </View>
                <View
                    style={{ flex: 1, width: screenWidth, height: screenHeigh, backgroundColor: "black", justifyContent: "center" }}
                >
                </View>

            </ScrollView>
        )
    }
}
