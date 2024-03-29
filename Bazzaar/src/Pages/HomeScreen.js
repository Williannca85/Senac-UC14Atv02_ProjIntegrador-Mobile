import React, {useState}  from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';

import {Novidades, Promocoes, sliderData} from '../../src/model/data';
import CustomSwitch from '../components/CustomSwitch'; 
import ListItem from '../components/ListItem'; 



export default function HomeScreen ({navigation}) {

     const [botaoTab, setbotaoTab] = useState(1);

     const renderBanner = ({item, index}) => {
       return <BannerSlider data={item} />;
     };
   
     const onSelectSwitch = value => {
       setbotaoTab(value);
     };

     return(
      
      <LinearGradient 
      style={{
      height: '100%', 
      width: '100%', 
      }}

      start={{x:0,y:1}}
      end={{x:1,y:0}}
        locations={[.5,1,1.5]}
      colors={['#d5a5c5','#f9ccba','#94d7ee']}>
          
          <SafeAreaView style={{flex: 1, /* backgroundColor: '#999999' */}}>
               <ScrollView style={{padding: 20}}>

               <View
                     style={{
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         marginBottom: 20,
                         }}>
                         <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium', color:'#0e105cff'}}>
                         Olá
                         </Text>
                         <TouchableOpacity onPress={() => navigation.goBack()}>
                              <ImageBackground
                              source={require('../assets/images/user-profile.jpg')}
                              style={{width: 35, height: 35}}
                              imageStyle={{borderRadius: 25}}
                              />
                         </TouchableOpacity>
               </View>


                          {/*  Pesquisar Produto  */}
                <View 
                         style={{
                              flexDirection:'row', 
                              borderColor:'#0aada8aa', 
                              borderWidth: 1,
                              borderRadius: 50,
                              paddingHorizontal: 10,
                              paddingVertical: 2,
                              }}>
                              <Feather 
                              name="search" size={30} color={"#8200d6ff"} style={{marginRight: 15}}/>
                              <TextInput placeholder='Search' color={"#0e105cff"} />
               </View>

                      <View><Text></Text></View>
                                                
                    <View>
                         <Carousel
                         data={sliderData}
                         renderItem={renderBanner}
                         sliderWidth={windowWidth - 40}
                         itemWidth={300}
                         loop={true}
                         />
                     </View>   

          <View style={{
              marginVertical: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
      
            }}>

            <Text   
                style={{
                fontSize: 20, 
                fontFamily: 'Poppins-Medium',
                color:'#0e105cab',
                borderRadius:10, 
                flexDirection: 'row', 
                justifyContent: 'space-between',
                }}>  
                BaZzAaR - Moda Verão
            </Text>
               <TouchableOpacity 
                    onPress={() => {}}>
                    <Text style={{color:'#0e105cab'  ,             
                    borderRadius:10, 
                flexDirection: 'row', 
                justifyContent: 'space-between',}}>Tudo</Text>
               </TouchableOpacity>
          </View>
           <View style={{marginVertical: 20}}>
                    <CustomSwitch
                    selectionMode={1}
                    option1="Novidades"
                    option2="Promoções"
                    onSelectSwitch={onSelectSwitch}
                    />
          </View>
        {botaoTab == 1 &&
          Novidades.map(item => (
            <ListItem
              key={item.id}
              imagem={item.poster}
              titulo={item.titulo}
              subtitulo={item.subtitulo}
              Novo={item.Novo}
              onPress={() =>
                navigation.navigate('RoupaDetails', {
                  titulo: item.titulo,
                  id: item.id,
                })
              }
            />
          ))}
        {botaoTab == 2 &&
          Promocoes.map(item => (
            <ListItem
              key={item.id}
              imagem={item.poster}
              titulo={item.titulo}
              subtitulo={item.subtitulo}
              Novo={item.Novo}
              valor={item.valor}
              onPress={() =>
                navigation.navigate('RoupaDetails', {
                  titulo: item.titulo,
                  id: item.id,
                })
              }
            />
          ))}
      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
}
