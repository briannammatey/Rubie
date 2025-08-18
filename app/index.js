import React from 'react'
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Butto, TouchableOpacity} from 'react-native'
import { createStaticNavigation } from '@react-navigation/native';

const App = ({onGetStarted}) =>{
const handlePress =()=>{
    onGetStarted()
}

   return(
       <View style ={styles.container}>
          
           <Image
           source ={require( '../assets/images/clearimgrubie.png')}
           style ={{width: 300, height:400,
               justifyContent: 'center',
               alignItems:'center'

           }}
           />
           <Text style ={styles.appTitle}> Your PCOS Journey awaits </Text>
           
       <View style ={styles.buttonSection}>
        <TouchableOpacity onPress ={handlePress} activeOpacity = {0.8}>
        <Text style ={styles.buttonText}>Press to Begin</Text>
   </TouchableOpacity>
       </View>
       
       </View>
   );
   
};

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#f4e0e8ff",
        justifyContent: "space-between",
        paddingVertical:60,
        paddingHorizontal:50,
    },
    appTitle:{
     fontSize : 28,
     fontWeight: 'bold',
     color : 'fff',
     textAlign:'center',
    paddingVertical:20
     
    },
    buttonSection:{
        backgroundColor:"#6b146bff",
        paddingHorizontal:20,
        borderRadius:60,
        width:300,
        height:80,
        alignItems:'center'
    },
    buttonText:{
        color:"white",
        fontWeight:'bold',
        textAlign: 'center',

    paddingVertical:25,
    fontSize:20


    }
})

export default App;