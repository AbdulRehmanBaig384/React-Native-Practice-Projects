// import { View, Text, ScrollView } from 'react-native'
// import React from 'react'

// export default function _layout() {
//   return (
//    <ScrollView  contentContainerStyle={{gap:15}} horizontal  style={{flex:1,flexDirection:'row',backgroundColor:'aqua',padding:20 
//    }}>
//     <View style={{backgroundColor:'red',alignSelf:'flex-start'}}>
//       <Text style={{padding:20,color:'black',fontSize:20}}>_layout1</Text>
//     </View>
//     <View style={{backgroundColor:'green',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout2</Text>
//     </View>
//     <View style={{backgroundColor:'blue',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout3</Text>
//     </View>
//       <View style={{backgroundColor:'black',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout4</Text>
//     </View>
//       <View style={{backgroundColor:'red',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout5</Text>
//     </View>  <View style={{backgroundColor:'blue',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout6</Text>
//     </View>  <View style={{backgroundColor:'yellow',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout7</Text>
//     </View>  <View style={{backgroundColor:'purple',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout8</Text>
//     </View>  <View style={{backgroundColor:'white',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout9</Text>
//     </View>  <View style={{backgroundColor:'orange',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout10</Text>
//     </View>  <View style={{backgroundColor:'brown',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout11</Text>
//     </View>  <View style={{backgroundColor:'b',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout12</Text>
//     </View>  <View style={{backgroundColor:'black',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout13</Text>
//     </View>
//     <View style={{backgroundColor:'yellow',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout13</Text>
//     </View><View style={{backgroundColor:'white',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout13</Text>
//     </View><View style={{backgroundColor:'black',}}>
//       <Text style={{padding:20,color:'white',fontSize:20}}>_layout13</Text>
//     </View>
// </ScrollView>

//   )
// }

import { View, Text, TextInput } from 'react-native'
import React from 'react' 
import HomeScreen from './(tabs)'
import Profile from './(tabs)/Profile'
import Home from './(tabs)/Home'
import Search from './(tabs)/Search'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'expo-router' 

// const Stack=createNativeStackNavigator()

// const StackNavigator =()=>{
//   return(
//        <Stack>
//       <Stack.Screen name="index" options={{ title: "Home" }} />
//       <Stack.Screen name="Profile" options={{ title: "Profile" }} />
//       <Stack.Screen name="Home" options={{ title: "Home" }} />
//       <Stack.Screen name="Search" options={{ title: "Search" }} />
//     </Stack>
//   )
// }
export default function _layout(){
  return (

    <View style={{width:'100%',height:'100%',justifyContent:'center',backgroundColor:'black'}}>
       <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="Profile" options={{ title: "Profile" }} />
      <Stack.Screen name="Home" options={{ title: "Home" }} />
      <Stack.Screen name="Search" options={{ title: "Search" }} />
    </Stack>
      
    </View>
  )
}








