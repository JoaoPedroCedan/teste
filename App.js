import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View, SafeAreaView, StatusBar,Image,ImageBackground,TextInput,ScrollView,Button } from 'react-native';

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
                
                <View style={styles.FormInput}>
                  <Text style={styles.TextLabel}>Login CPF ou CNPJ</Text>  
                    <TextInput
                      style={styles.input}
                    />
                </View>  
                <View style={styles.FormInput}>
                  <Text style={styles.TextLabel}>Senha</Text>  
                    <TextInput
                      style={styles.input}
                    />
                </View>    
                <TouchableOpacity style={styles.ButtonEntrar}>
                  <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
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
    position:'absolute',
    top:-22,
    backgroundColor:'#e0e5cf',
    alignItems:'center',
    justifyContent:'center'

  },
  FormInput: {
    width:"90%",
    marginLeft:'7%',
    marginBottom:'7%',
  },
  input: {
    width:"90%",
    backgroundColor:"#e0e5cf",
    height: 40,
    paddingLeft: 10,
    borderColor:'#044421',
    borderWidth:4,
    borderRadius:5

  },
  TextLabel:{
    color:"#f88b3a",
    fontWeight:'300',
    padding:1,
    backgroundColor:'#e0e5cf',
    position:'absolute',
    top:-13,
    zIndex: 1,
    
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
    paddingTop: 13,
    paddingBottom:13,
    borderRadius:5,
    
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
    fontSize: 15,
    color: "#fff",
    fontWeight: 'bold',
}


});
