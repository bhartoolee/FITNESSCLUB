import React from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Properties from "./properties";
import check from "../assets/check.png";
import invicible from "../assets/invicible.png"

const signIn = (props) => {
    return (
        <View>
            <View style={style.wrapper}>
                <View style={style.textContainer} >
                    <Text style={style.text}>Hello</Text>
                    <Text style={style.text}>Sign in!</Text>
                </View>
                <Image
                    source={props.menu}
                    style={style.menu}
                />
            </View>

            <View style={style.midContainer}>
                <Properties
                    header="Gmail"
                    placeholder="bhartoolee@gmail.com"
                    icon={check}
                />
                <Properties
                    header="Password"
                    placeholder="*************"
                    icon={invicible}
                />

                <Text style={style.subscript}>forgot password?</Text>

                <LinearGradient
                    style={style.container}
                    colors={['rgb(253,29,29)', 'rgba(84,66,97,1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.8, y: 0 }}
                >
                    <TouchableOpacity style={style.button}>
                        <Text style={style.enter}>SIGN IN</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <Text style={style.footer}>Dont't have an account</Text>
                <Text style={style.last}>Sign Up</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical:90
    },
    textContainer: {
        marginRight: 200
    },
    text: {
        fontSize: 30,
        color: '#fff',
        fontWeight: "bold"
    },
    menu: {
        width: 30,
        height: 20,
    },
    midContainer: {
        backgroundColor: '#fff',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        height: '100%',
        // width:'100%',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    subscript: {
        fontSize: 15,
        marginLeft: '65%',
        fontWeight: "bold",
        marginBottom: 60,
    },
    container: {
        width: '100%',
        borderRadius:20,
        marginBottom: 80,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 25
    },
    enter: {
        fontSize: 18,
        color: '#fff',
        fontWeight: "300"
    },
    footer:{
        color:'gray',
        marginLeft:'55%',
        marginTop:20
    },
    last:{
        fontSize: 15,
        marginLeft: '82%',
        fontWeight: "bold",
    }
})

export default signIn