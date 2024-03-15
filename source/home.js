import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";


const Home = (props) => {
    return (
        <View >
            <Image
                source={props.menu}
                style={style.menu}
            />
            <View style={style.content}>
                <Image
                    source={props.icon}
                    style={style.icon}
                />
                <Text style={style.header}>{props.header}</Text>
            </View>

            <Text style={style.subheader}>{props.greeting}</Text>

            <TouchableOpacity style={style.button}>
                <Text style={style.text}>SIGN IN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttons}>
                <Text style={style.texts}>SIGN UP</Text>
            </TouchableOpacity>

            <Text style={style.footer}>Login with Social Media</Text>

            <View style={style.foot}>
                <Image
                    source={props.first}
                    style={style.image}
                />
                <Image
                    source={props.second}
                    style={style.image}
                />
                <Image
                    source={props.third}
                    style={style.image}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    menu: {
        width: 40,
        height: 10,
        marginLeft: 300,
        marginVertical: 50
    },
    content: {
        alignContent: 'center',
        justifyContent: "center",
        marginTop: 60,
        marginBottom: 90,
    },
    icon: {
        width: 40,
        height: 30,
        marginLeft: '45%'
    },
    header: {
        fontSize: 23,
        fontWeight: "400",
        color: '#fff',
        marginLeft: '30%'
    },
    subheader: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 30,
        color: '#fff',
        marginLeft: '25%'
    },
    button: {
        marginLeft: '14%',
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: "center",
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        width: 250,
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        fontWeight: "300",
        color: 'white'
    },
    buttons: {
        marginLeft: '14%',
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: "center",
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        width: 250,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    texts: {
        fontSize: 20,
        fontWeight: "300",
    },
    footer: {
        marginLeft: '30%',
        fontSize: 15,
        color: 'white',
        marginTop: 80,
        marginBottom:8,
    },
    foot:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 10,
        margin: 2,
    }
})

export default Home