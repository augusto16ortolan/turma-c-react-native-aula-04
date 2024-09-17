import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.texto, styles.texto2, { fontSize: 10 }]}>
          Olá Mundo!
        </Text>
        <Button color={"red"} title="Botao" />
        <ActivityIndicator size={"large"} color={"red"} />
        <StatusBar style="auto" />
      </View>
      <View style={styles.container2}>
        <Text style={styles.texto}>Olá Mundo!</Text>
        <Button color={"red"} title="Botao" />
        <ActivityIndicator size={"large"} color={"red"} />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 0.2,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: { fontSize: 50, fontWeight: "bold" },
  texto2: {
    color: "green",
    fontSize: 80,
  },
});
