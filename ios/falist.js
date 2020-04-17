import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, ScrollView, Alert } from 'react-native'
import Swipeout from "react-native-swipeout"



var list = [
    {
        id: 1,
        name: "hello",
        urlImgae: "https://dulichvietnam.com.vn/vnt_upload/File/Image/anh_dep_viet_nam_1.jpg"
    },
    {
        id: 1,
        name: "hello",
        urlImgae: "https://dulichvietnam.com.vn/vnt_upload/File/Image/anh_dep_viet_nam_1.jpg"
    },
    {
        id: 2,
        name: "hi",
        urlImgae: "https://dulichvietnam.com.vn/vnt_upload/File/Image/anh_dep_viet_nam_1.jpg"
    },
    {
        id: 3,
        name: "thaks",
        urlImgae: "https://dulichvietnam.com.vn/vnt_upload/File/Image/anh_dep_viet_nam_1.jpg"
    }
    , {
        id: 4,
        name: "bye",
        urlImgae: "https://dulichvietnam.com.vn/vnt_upload/File/Image/anh_dep_viet_nam_1.jpg"
    }


]


const style = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: "yellow"
    },
    text: {
        fontSize: 30,
        color: "red"
    },
    img: {
        height: 30,
        width: 30
    }
})


export default class Falist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowKey: ""
        }
    }
    list1 = () => {

        return list.map((item, index) => {
            const swipeoutSetting = {
                autoClose: true,
                //truot trai de hien delete button,truot phai de hide button
                onOpen: (secId, rowId, direction) => {
                    this.setState({ activeRowKey: item.id })
                },
                onClose: (secId, rowId, direction) => {
                    if (this.state.activeRowKey !== null) {
                        this.setState({
                            activeRowKey: ""
                        })
                    }
                },
                right: [
                    {
                        onPress: () => {
                            Alert.alert(
                                "alert", [
                                { text: "no", onPress: () => console.log("Asdad") },
                                {
                                    text: "yes", onPress: () => {
                                        list.splice(index, 1)
                                    }
                                }

                            ]
                            )

                        },
                        text: "Delete",
                        type: "delete"
                    }
                ],
                rowId: index,
                sectionId: 1
            }
            return <Swipeout {...swipeoutSetting} style={style.container} key={index} item={item}>
                <Text style={style.text}>{item.name}</Text>
                <Image style={style.img} source={{ uri: item.urlImgae }} />
            </Swipeout>
        })

    }


    render() {
        return (
            <ScrollView>

                {this.list1()}


            </ScrollView>
        )
    }
}
