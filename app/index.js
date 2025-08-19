import React from 'react'
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Butto, TouchableOpacity} from 'react-native'
import { createStaticNavigation } from '@react-navigation/native';

const App = ({onGetStarted}) =>{
const handlePress =()=>{
    onGetStarted()
}

   return(
       <View style ={styles.container}>
        <View style ={styles.ellipse8}/>
        <View style ={styles.ellipse10}/>
         <View style ={styles.ellipse12}/>
           <Image
           source ={require( '../assets/images/clearimgrubie.png')}
           style ={{width: 300, height:400,
               justifyContent: 'center',
               alignItems:'center'

           }}
           />
           <Text style ={styles.appTitle}> Your PCOS Journey Awaits </Text>
           
       
        <TouchableOpacity onPress ={handlePress} activeOpacity = {0.8}>
            <View style ={styles.buttonSection}> 
        <Text style ={styles.buttonText}>Press to Begin</Text>
           </View>
   </TouchableOpacity>
    
       
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
    paddingVertical:20,
    top:-30,
     
    },
    ellipse8: {
    position: "absolute",
    width: 624,
    height: 751,
    left: -195,
    top: -251,
    backgroundColor: "rgba(235, 86, 148, 0.32)",
    transform: [{ rotate: "41.57deg" }],
    borderRadius: 312.14, // makes it oval
  },
  ellipse10: {
    position: "absolute",
    width: 500,
    height: 491,
    left: 221,
    top: -144,
    backgroundColor:"rgba(173, 108, 176, 0.8)",
    borderRadius: 263,
    
  },
  ellipse12: {
    position: "absolute",
    width: 549,
    height: 481,
    left: 288,
    top: -169,
    borderWidth: 1,
    borderColor: "rgba(172, 255, 134, 0.6)",
    borderRadius: 300,
  },

    buttonSection:{
        backgroundColor:"#AD6CB0",
        paddingHorizontal:20,
        top:-40,
        borderRadius:60,
        width:300,
        height:80,
        alignItems:'center'
    },
    buttonText:{
        color:"white",
        fontWeight:'bold',
        textAlign: 'center',

    paddingVertical:30,
    fontSize:35


    }
})

export default App;