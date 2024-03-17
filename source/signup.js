import React from "react";
import { Text, StyleSheet, View , Image ,TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import check from "../assets/check.png";
import invicible from "../assets/invicible.png"
import Properties from "./properties";

const signUp = (props) => {
    return (
        <View>
            <View style={style.wrapper}>
                <View style={style.textContainer} >
                    <Text style={style.text}>Create Your</Text>
                    <Text style={style.text}>Account</Text>
                </View>
                <Image
                    source={props.menu}
                    style={style.menu}
                />
            </View>

            <View style={style.midContainer}>
                <Properties
                    header="Full Name"
                    placeholder="Basit Shodiya"
                    icon={check }
                />
                <Properties
                    header="Phone or Gmail"
                    placeholder="bhartoolee@gmail.com"
                    icon={check }
                />
                <Properties
                    header="Password"
                    placeholder="********"
                    icon={invicible }
                />
                <Properties
                    header="Confirm Password"
                    placeholder="***********"
                    icon={invicible}
                />
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
                <Text style={style.last}>Sign in</Text>


            </View>
        </View>
    )
}
const style = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 50
    },
    textContainer: {
        marginRight: 150
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
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        height: '100%',
        paddingHorizontal: 12,
        paddingTop: 20,
    },
    container: {
        width: '100%',
        borderRadius: 20,
        marginTop: 50,
        marginBottom: 80,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 25
    },
    enter: {
        fontSize: 18,
        color: '#fff',
        fontWeight: "300"
    },
    footer: {
        color: 'gray',
        marginLeft: '50%'
    },
    last: {
        fontSize: 15,
        marginLeft: '65%',
        fontWeight: "bold",
    }
})

export default signUp