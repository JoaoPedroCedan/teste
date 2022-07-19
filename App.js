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
    overflow: 'hidden',
  },
  headerLogo:{
    width:'50%',
    height:'50%',
    marginTop:'5%'
  },
  main:{
    height:'80%',
    width:'100%',
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  retangulo:{
    width:'100%',
    height:'100%',
    
    
  },
  ViewRetangulo: {
    width: 700,
    height: 0,
    borderBottomWidth: '15em',
    borderBottomColor: '#044421',
    borderLeftWidth: '15em',
    borderLeftColor: 'transparent',
    borderRightWidth: '15em',
    borderRightColor: 'transparent',
    borderStyle: 'solid'
  },
  ViewCirculo: {
    height:250,
    width:260,
    borderRadius: '100%',
    backgroundColor:'#fff',
    position:'absolute',
    alignItems:'center',
    bottom:-90
  
    

  },
  footer:{
    height:'10%',
    backgroundColor:'#19aa6d'
  }


});
