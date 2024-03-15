import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './source/home';
import menu from './assets/menu.png'
import dumbell from './assets/dumbell.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import instagram from './assets/instagram.png'

export default function App() {
  return (
    <View style={styles.container}>


      <LinearGradient
        colors={['rgb(253,29,29)', 'rgba(84,66,97,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 0 }}
        style={styles.container}
      >
        <Home
          menu={menu}
          icon={dumbell}
          header="FITNESS CLUB"
          greeting="Welcome Back"
          third = {facebook}
          second = {twitter}
          first = {instagram}
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
