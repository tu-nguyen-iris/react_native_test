import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const style = StyleSheet.create({
    container: {
        marginTop: 40
    },
    text: {
        fontWeight: "700"
        , margin: 20
    },
    inPut: {
        height: 40,
        padding: 10,
        borderWidth: 1
        , margin: 10,
        // color: "black"
    }
})
export default class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }
    render() {
        return (
            <View
                keyboardDismissMode={true}
                style={style.container}>
                <Text style={style.text}>
                    Email

                </Text>
                <TextInput style={style.inPut}
                    placeholder="enter your email"
                    placeholderTextColor="blue"
                    keyboardType="email-address"
                    onChangeText={(text) => {
                        this.setState({
                            text
                        })
                    }}

                />





                <Text style={style.text}>Password</Text>

                <TextInput style={style.inPut} />


                <Text>{this.state.text}</Text>

            </View>
        )
    }
}
