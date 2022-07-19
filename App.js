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
          <View>
            <Image
                  style={styles.retangulo}
                  source={require('./assets/Retangulo.png')}
                >
            </Image>
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
  },
  retangulo:{
    width:'100%',
    height:'100%',
  },
  footer:{
    height:'10%',
    backgroundColor:'#19aa6d'
  }


});
