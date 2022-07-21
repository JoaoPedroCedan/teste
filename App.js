import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View, SafeAreaView, StatusBar,Image,ImageBackground,TextInput,ScrollView,Button } from 'react-native';
import {Ionicons} from '@expo/vector-icons' 
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    BossaRegular: require('./src/assets/fonts/Bossa-Regular.otf'),
    BossaBold: require('./src/assets/fonts/Bossa-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent"/>
        <ImageBackground
          source={require('./src/assets/Background.png')}
          style={styles.background}
          resizeMode='cover'
        >
          <View style={styles.header}>
            <Image
              source={require('./src/assets/LogoUniversidade.png')}
              style={styles.headerLogo}
              resizeMode='contain'
            />
          </View>

          <View style={styles.main}>
            <View style={styles.ViewRetangulo}>         
                <Image 
                  source={require('./src/assets/Criar.png')}
                  style={styles.criarLogo}
                  resizeMode='contain'
                />
              <View style={styles.ViewCirculo}>
                <Image
                  source={require('./src/assets/LogoUniversidadeLab.png')}
                  style={styles.labLogo}
                  resizeMode='contain'
                />
                <View style={styles.FormInput}>
                  <Text style={styles.TextLabel}>Login: CPF ou CNPJ</Text> 
                    <View style={styles.InputIcon}>
                      <Ionicons name='person-sharp' color="#044421" size={20}></Ionicons>
                      <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                      />
                    </View> 
                </View>  
                <View style={styles.FormInput}>
                  <Text style={styles.TextLabel}>Senha</Text> 
                    <View style={styles.InputIcon}>
                      <Ionicons name='lock-closed-sharp' color="#044421" size={20}></Ionicons>
                        <TextInput
                          style={styles.input}
                        />
                    </View>
                </View>    
                <TouchableOpacity style={styles.ButtonEntrar}>
                  <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.TextEsqueceuSenha}>Esqueceu sua senha?</Text>
                <Text style={styles.TextCliqueAqui}>CLIQUE AQUI</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Image
              source={require('./src/assets/LogoUniversidade.png')}
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
  },
  headerLogo:{
    width:'25%',
    height:'25%',
    marginTop:'6%',
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
    position:'absolute',
    top:-22,
    backgroundColor:'#e0e5cf',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
  },
  FormInput: {
    width:"95%",
    marginLeft:'7%',
    marginBottom:'6%',
  },
  input: {
    width:"80%",
    backgroundColor:"#e0e5cf",
    height: 30,
    paddingLeft: 1,
    paddingRight: 1,
    borderRadius:5
  },
  TextLabel:{
    color:"#f88b3a",
    paddingLeft:2,
    paddingRight:2,
    fontSize:12,
    marginTop:6,
    marginLeft:10,
    backgroundColor:'#e0e5cf',
    position:'absolute',
    top:-13,
    zIndex: 1,
    fontFamily:'BossaRegular',
  },
  criarLogo:{
    width:"80%",
    marginRight:'150%',
    marginTop:'130%'
  },
  ButtonEntrar: {
    alignItems:"center",
    justifyContent:"center",
    width:"50%",
    backgroundColor:"#f88b3a",
    paddingTop: 8,
    paddingBottom:12,
    borderRadius:5,
    marginTop:-9
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
  },
  textButton: {
    fontSize: 18,
    color: "#fff",
    letterSpacing:0.5,
    fontFamily:'BossaBold',
  },
  TextEsqueceuSenha:{
    fontSize:12,
    marginTop:10,
    color:'#f88b3a',
    fontFamily:'BossaRegular',
  },
  TextCliqueAqui:{
    marginTop:5,
    color:'#044421',
    fontFamily:'BossaRegular',
    letterSpacing:-0.5
  },
  InputIcon:{
    flexDirection: 'row',
    width:'90%',
    alignItems: 'center',
    borderColor:'#044421',
    borderWidth:1.2,
    borderRadius:5
  },
  labLogo:{
    width:'75%',
    height:'25%'
  }
});
