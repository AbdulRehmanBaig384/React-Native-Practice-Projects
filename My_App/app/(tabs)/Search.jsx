import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";

import React, { useState } from "react";

const sampleData = [
  "React Native",
  "Expo Router",
  "JavaScript",
  "Flutter",
  "Node.js",
  "Data Science",
  "MongoDB",
];

export default function Search() {
  
  const [query, setQuery] = useState("");

  const filteredData = sampleData.filter((item) =>
    
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    
    <View style={styles.container}>
      <TextInput style={styles.searchBox} placeholder=" Search here..."  value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  searchBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
  },
  item: {
    padding: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },
});
