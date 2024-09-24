import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function RMButton({
  titulo,
  action,
  customButtonStyle,
  customTextStyle,
}) {
  return (
    <TouchableOpacity
      style={[styles.botao, customButtonStyle]}
      onPress={action}
    >
      <Text style={[styles.botaoTexto, customTextStyle]}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: "80%",
    height: 39,
    backgroundColor: "#770602",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});
