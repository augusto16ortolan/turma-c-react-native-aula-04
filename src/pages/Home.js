import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Home({ navigation, route }) {
  const { usuarioLogado } = route.params;

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{usuarioLogado}</Text>
      <Button title="Logout" onPress={() => navigation.replace("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
