import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{title:'About'}}
        />
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{title:'Contact'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source = {{uri:'https://rsb.org/wp-content/uploads/2018/04/Maersk_Logo.png'}}
          style = {styles.maerskLogo}
        />
        <Image source = {{uri:'https://www.maersk.com/~/media_sc9/maersk/news/news/images/2019/02/chastine-maersk-feeder_1024x586_v1.jpg?w=877&hash=A62A1A55CE52098120D109D7D1AF84EB'}}
          style = {styles.maerskShip} 
        />
        
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.buttons}
            title="Contact"
            onPress={() => navigation.navigate('Contact')}
          />
          <Button
            style={styles.buttons}
            title="   about   "
            onPress={() => navigation.navigate('About')}
          />
        </View>
        <Text style={styles.text}>A.P. Møller - Mærsk A/S, fork. APMM, er et danskejet konsortium med aktiviteter i 130 lande, primært indenfor transport af containere med tørlast og frosne eller nedkølede varer. Målt på omsætning er det Danmarks største virksomhed og den næststørste i Norden, kun overgået af Equinor ASA, mens den målt på antallet af ansatte overgås af ISS. I Forbes Global 2000 fra 2020 er Møller-Mærsk rangeret som den 622-ende største børsnoterede virksomhed. På verdensplan er containerrederiet Mærsk Line verdens største.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source = {{uri:'https://rsb.org/wp-content/uploads/2018/04/Maersk_Logo.png'}}
          style = {styles.maerskLogo}
        />
        <Image source = {{uri:'https://www.maersk.com/~/media_sc9/maersk/news/news/images/2019/02/chastine-maersk-feeder_1024x586_v1.jpg?w=877&hash=A62A1A55CE52098120D109D7D1AF84EB'}}
          style = {styles.maerskShip} 
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text>Foundation — 1904-1912
A.P. Moller - Maersk was established on 16 April 1904, in the midst of the second industrial revolution, in a little town called Svendborg on the Danish island of Funen.

A.P. Møller, the driver of the Steamship Company Svendborg, had started out in tramp shipping, where vessels operate on the spot market without fixed schedules or port calls. Keen to expand the fleet beyond its modest three vessels, A.P. Møller was met with resistance from some of the company’s board members, so he struck out on his own.

Founding the Steamship Company of 1912, he secured himself operational independence and paved the way for the rapid expansion of the company over the coming years.
</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const ContactScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source = {{uri:'https://rsb.org/wp-content/uploads/2018/04/Maersk_Logo.png'}}
          style = {styles.maerskLogo}
        />
        <Image source = {{uri:'https://www.maersk.com/~/media_sc9/maersk/news/news/images/2019/02/chastine-maersk-feeder_1024x586_v1.jpg?w=877&hash=A62A1A55CE52098120D109D7D1AF84EB'}}
          style = {styles.maerskShip} 
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text>Contact us Information is key to make decisions on the go. That’s why, our dedicated team of experts are here for you. Do reach out to us, should you need any intel from your cargo status to our solutions, and we’ll be happy to help you out.
        We’re only a click away!</Text>
        <Text>Telephone: 33 63 33 63</Text>
        <Text>Email: maersk@maersk.dk</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#33E9FF'
  },
  bottomContainer: {
    flex: 5,
    backgroundColor: '#E9ED8C',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  buttonsContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  maerskLogo: {
    height:100,
    width: 200
  },
  text: {
    textAlign: 'center'
  },
  maerskShip: {
    height:120,
    width: 102,
    justifyContent: 'flex-end'
  }
});
