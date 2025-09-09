// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Profile() {
//   return (
//     <View>
//       <Text>P</Text>
//     </View>
//   )
// }







import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Abdul Rehman</Text>
      <Text style={styles.bio}> Software Engineering Student | MERN & Data Science Learner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold", color: "#222" },
  bio: { fontSize: 16, textAlign: "center", marginTop: 10, color: "#666", paddingHorizontal: 30 },
});
