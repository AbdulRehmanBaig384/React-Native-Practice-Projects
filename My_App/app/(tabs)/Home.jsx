// import { View, Text } from 'react-native'
// import React from 'react'
// import { Button } from '@react-navigation/elements'
// import Profile from './Profile'
// export default function Home({navigation}) {
  return (
    <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:'500',marginBottom:10}}>Home</Text>
      <Button title='Profile' onPress={()=>navigation.navigate("Profile")}/>
    </View>
  )
}


import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome Home!</Text>
      <Text style={styles.subtitle}>This is your home screen.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/Profile")}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/Search")}
      >
        <Text style={styles.buttonText}>Go to Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, color: "#333" },
  subtitle: { fontSize: 16, marginBottom: 20, color: "#666" },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
