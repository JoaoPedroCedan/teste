import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar,Image,ImageBackground,TextInput,ScrollView } from 'react-native';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent"/>
        <ImageBackground
          source={require('./assets/Background.png')}
          style={styles.background}
          resizeMode='cover'
        >
          <View style={styles.header}>
            <Image
              source={require('./assets/LogoUniversidade.png')}
              style={styles.headerLogo}
              resizeMode='contain'
            />
          </View>

          <View style={styles.main}>
            <View style={styles.ViewRetangulo}>         
                <Image 
                  source={require('./assets/Criar.png')}
                  style={styles.criarLogo}
                  resizeMode='contain'
                />
              <View style={styles.ViewCirculo}>
                <TextInput>Insira aqui</TextInput>
                <TextInput>Insira aqui 2</TextInput>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Image
              source={require('./assets/LogoUniversidade.png')}
              style={styles.footerLogo}
              resizeMode='contain'
            >

            </Image>
            <Text style={styles.footerText} color="#fff">Copyright Universidade Rodobens 2022</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  background:{
    flex:1,
    width:'100%',
  },
  header: {
    width:'100%',
    height:'12%',
    backgroundColor:'#19aa6d',
    justifyContent:'center',
    alignItems: 'flex-start',
  },
  headerLogo:{
    width:'30%',
    height:'30%',
    marginTop:'6%',
    marginBottom:'1%'
  },
  main:{
    height:'80%',
    width:'100%',
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  ViewRetangulo: {
    width: 900,
    height: 0,
    borderBottomWidth: 290,
    borderBottomColor: '#044421',
    borderLeftWidth: 380,
    borderLeftColor: 'transparent',
    borderRightWidth: 380,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    alignItems:'center',
  },
  ViewCirculo: {
    height:250,
    width:250,
    borderRadius:250,
    backgroundColor:'#fff',
    position:'absolute',
    top:-22,
    backgroundColor:'#e0e5cf',
    alignItems:'center',
    justifyContent: 'space-around'

  },
  criarLogo:{
    width:"80%",
    marginRight:'150%',
    marginTop:'130%'
  },
  footer:{
    height:'8%',
    backgroundColor:'#19aa6d',
    alignItems:'center',
    justifyContent: 'center',
  },
  footerLogo:{
    width:'30%',
    height:'30%',
    marginBottom:'2%'
  },
  footerText:{
    fontSize:7,
    color:'#fff',
  }


});
