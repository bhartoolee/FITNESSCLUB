import React from "react";
import { Text, TextInput, Image, StyleSheet, View } from "react-native";

const properties = (props) => {
    return (
        <View style={style.container}>
            <Text style={style.header}>{props.header}</Text>
            <View style={style.input}>
                <TextInput
                    placeholder="{props.placeholder}"
                />
                <Image
                    source={props.icon}
                    style={style.icon}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginVertical:15,
    },
    header:{
        color:'red',
        fontSize:15,
        fontWeight:"300"
    },
    input:{
        flexDirection:'row',
        borderBottomColor:'gray',
        borderBottomWidth:1,
    },
    icon:{
        width:15,
        height:10,
        marginLeft:'55%',
        marginTop:10
    }
})

export default properties