import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar,Image,ImageBackground } from 'react-native';

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
            <View style={styles.ViewCirculo}>
            </View>
            <Image
              source={require('./assets/Criar.png')}
              style={styles.headerLogo}
              resizeMode='contain'
            />
          </View>
        </View>

        <View style={styles.footer}>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow:'hidden'
  },
  background:{
    flex:1,
    width:'100%',
  },
  header: {
    width:'100%',
    height:'10%',
    backgroundColor:'#19aa6d',
    justifyContent:'center',
    alignItems: 'flex-start',
  },
  headerLogo:{
    width:'50%',
    height:'50%',
    marginTop:'8%'
  },
  main:{
    height:'82%',
    width:'100%',
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  retangulo:{
    width:'100%',
    height:'100%',
    
    
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
    backgroundColor:'#e0e5cf'

  },
  footer:{
    height:'8%',
    backgroundColor:'#19aa6d'
  }


});
