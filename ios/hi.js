import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, ScrollView, TextInput } from "react-native"


const style = StyleSheet.create({
    container: {
        marginTop: 40,
        marginLeft: 40,
        color: "red"
    }
})


export default class Hi extends Component {
    render() {
        return (
            <ScrollView keyboardDismissMode="on-drag" maximumZoomScale={3} minimumZoomScale={0.3} style={style.container}>
                <Text style={style.container}>dasfsfvfsd</Text>


                <Image source={{
                    uri: "https://upload.wikimedia.org/wikipedia/vi/thumb/0/0e/Mature_flower_diagram-vi.svg/1000px-Mature_flower_diagram-vi.svg.png"
                }} style={{ width: 200, height: 300 }}
                ></Image>

                <View style={{ width: 200, height: 200, backgroundColor: "red" }}></View>
                <View style={{ width: 200, height: 200, backgroundColor: "black" }}></View>

                <View style={{ width: 200, height: 200, backgroundColor: "blue" }}></View>
                <TextInput style={{ margin: 20, borderWidth: 1 }} placeholder='easdasd'></TextInput>
            </ScrollView>

        )
    }
}
