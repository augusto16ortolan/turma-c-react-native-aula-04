import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.containerImage}
        width={303}
        height={295}
        source={require("./assets/images/logo.png")}
      />
      <TextInput style={styles.caixaTexto} placeholder="Digite seu usuário" />
      <TextInput
        secureTextEntry
        style={styles.caixaTexto}
        placeholder="Digite sua senha"
      />
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Acessar</Text>
      </TouchableOpacity>

      <View style={styles.containerSenha}>
        <TouchableOpacity style={styles.botaoSenha}>
          <Text style={styles.botaoTextoSenha}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerCadastro}>
        <Text style={styles.botaoTextoCadastro}>
          Ainda não possuí um cadastro?
        </Text>
        <TouchableOpacity style={styles.botaoCadastro}>
          <Text style={[styles.botaoTextoCadastro, { fontWeight: "bold" }]}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7EEE9",
    alignItems: "center",
    justifyContent: "center",
  },
  caixaTexto: {
    width: "60%",
    borderBottomWidth: 1,
    height: 50,
    fontSize: 20,
    marginBottom: 24,
  },
  containerImage: {
    marginBottom: 65,
  },
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
  botaoTextoSenha: {
    fontSize: 16,
    color: "#898A8D",
  },
  botaoSenha: {
    borderBottomWidth: 0.8,
    borderBottomColor: "#898A8D",
    width: "50%",
  },
  containerSenha: {
    width: "80%",
    alignItems: "flex-end",
  },
  containerCadastro: {
    width: "80%",
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
  },
  botaoTextoCadastro: {
    fontSize: 16,
  },
});
