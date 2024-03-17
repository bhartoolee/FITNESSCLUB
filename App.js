import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './source/home';
import menu from './assets/menu.png'
import dumbell from './assets/dumbell.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import instagram from './assets/instagram.png'
import SignIn from './source/signIn';
import SignUp from './source/signup';

export default function App() {
  return (
    <View style={styles.container}>


      <LinearGradient
        style={styles.container}
        colors={['rgb(253,29,29)', 'rgba(84,66,97,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 0 }}
      >
        {/* <Home
          menu={menu}
          icon={dumbell}
          header="FITNESS CLUB"
          greetings="Welcome Back"
          third={facebook}
          second={twitter}
          first={instagram}
        /> */}

        {/* <SignIn
          menu={menu}
          /> */}

          <SignUp
          menu={menu}
          />

      </LinearGradient>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
