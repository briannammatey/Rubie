import React from 'react'
import {View, Text, Image, ScrollView, TextInput} from 'react-native'

const App = () =>{

    return(
        <View>
            
            <Image
            source ={require( '../assets/images/clearimgrubie.png')}
            style ={{width: 400, height:500,
                justifyContent: 'center',
                alignItems:'center'

            }}
            />
        </View>
    );
};

export default App;


/*import {useState} from 'react'

import{ View, Text } from 'react-native';

import{Stack, useRouter} from 'expo-router'
import {COLORS, icons, images, SIZES} from '../constants';
import{Nearbyjobs, Popularjiobs, ScreenHeaderBtn, Welcome} from '../componsents'
const Home = () => {
    const router = useRouter();
    return(
        // save area view allows us to shows the constant safely without notcher
        <SafeAreaView style = {{flex : 1, backgroundColor: COLORS.lightWhite}}>

           <Stack.Screen
            options ={{
                headerStyle:{background:Colors.lightWhite},
                headerShadowVisible: false,
                headerLeft:() =>(
                    <ScreenHeaderBtn iconUrl ={icons.menu} dimension = "60%" />
                ),headerRight:()=>(<ScreenHeaderBtn iconUrl = {icons.profile} dimension = "100%"/>),
                headerTitle: ""
            }}

           />
        <ScrollView showsVerticalScrollIndicator = {false}></ScrollView>
        </SafeAreaView>

    )


}


export default Home;
*/