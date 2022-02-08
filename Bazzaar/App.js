import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* import styles from '../Bazzaar/src/styles'; */
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from './src/Pages/HomeScreen'



/* import HomeScreen from '../src/components/HomeScreen';  */


const Stack = createStackNavigator();

const App = () =>{

     return   (

     <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name="Main" 
            component={Main} 
            options={{headerShown:false}} 
            />

             <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{headerShown:false}} 
            />
        </Stack.Navigator> 
      </NavigationContainer>
     ); 
}

const Main = ({navigation}) =>{
 
      return (
    
          <LinearGradient 
            style={{
            height: '100%', 
            width: '100%', 
            }}
    
            start={{x:0,y:1}}
            end={{x:1,y:0}}
              locations={[.5,1,1.5]}
            colors={['#d5a5c5','#f9ccba','#94d7ee']}>
    
        <SafeAreaView style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
    
        <View>
         <Text style={{
           fontSize: 40, 
           color:'#21315f', 
           fontFamily: 'Poppins-MediumItalic',
    
          }}>
              BaZzAaR
          </Text>
        </View>
       
    
          <TouchableOpacity 
             onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor:'#ad40af', 
            padding:10, 
            width: '90%', 
            borderRadius:10, 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            }}>
                <Text
                style={{
                  fontSize:30, 
                  color:'#ffffff',
                  fontFamily: 'Poppins-MediumItalic'
                }}>
                  Vamos as Compras</Text>
                  <Icon name="shopping-cart" size={35} color="#fff" />
          </TouchableOpacity>
    
    
        </SafeAreaView>
      </LinearGradient>
      )
    
    }
    
    const Home = () => {

          return (

          <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Home Screen</Text>
           </View>

          );
    }
    
    export default App;
    
    
    