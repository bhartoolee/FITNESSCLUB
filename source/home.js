import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native'

const home = (props) => {
    return (
        <View>
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

            <Text style={style.subheader}>{props.greetings}</Text>

            <TouchableOpacity style={style.button}>
                <Text style={style.text}>SIGN IN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttons}>
                <Text style={style.texts}>SIGN IN</Text>
            </TouchableOpacity>

            <Text style={style.footer}>Login with Social Media</Text>

            <View style={style.last}>
                <Image
                    source={props.first}
                    style={style.social}
                />
                <Image
                    source={props.second}
                    style={style.social}
                />
                <Image
                    source={props.third}
                    style={style.social}
                />
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    menu: {
        width: 30,
        height: 20,
        marginLeft: 290,
        marginVertical: 40
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 130
    },
    icon: {
        width: 40,
        height: 40,
    },
    header: {
        fontSize: 25,
        fontWeight: "400",
        color: '#fff'
    },
    subheader: {
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 20,
        color: '#fff',
        marginLeft: '25%'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 15
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: "300"
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    texts: {
        fontSize: 18,
        fontWeight: "300"
    },
    footer: {
        color: '#fff',
        fontSize: 13,
        marginBottom: 8,
        marginLeft: '28%',
        marginTop: 100
    },
    last: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    social: {
        width: 20,
        height: 20,
        borderRadius: 10,
        margin: 3,
        backgroundColor: '#fff'
    }
})
export default home