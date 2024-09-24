import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);
  const [erroUsuario, setErroUsuario] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);
  const [loading, setLoading] = useState(false);

  function login() {
    if (loading) {
      return;
    }

    setErroUsuario(false);
    setErroSenha(false);

    if (!usuario) {
      setErroUsuario(true);
    }

    if (!senha) {
      setErroSenha(true);
    }

    if (!senha || !usuario) {
      return;
    }
    console.log("teste");

    setLoading(true);

    console.log(loading);
    setTimeout(() => {
      console.log("teste 123");
      setLoading(false);
    }, 3000);

    //Alert.alert("Login", "Usuário: " + usuario + " Senha: " + senha);
  }

  function informaUsuario(value) {
    if (!value) {
      setErroUsuario(true);
    } else {
      setErroUsuario(false);
    }

    setUsuario(value);
  }

  function informaSenha(value) {
    if (!value) {
      setErroSenha(true);
    } else {
      setErroSenha(false);
    }

    setSenha(value);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.containerImage}
        width={303}
        height={295}
        source={require("./assets/images/logo.png")}
      />
      <TextInput
        value={usuario}
        onChangeText={(value) => informaUsuario(value)}
        style={styles.caixaTexto}
        placeholder="Digite seu usuário"
      />
      {erroUsuario ? <Text>Usuário é obrigatorio</Text> : <></>}
      <TextInput
        value={senha}
        onChangeText={(value) => informaSenha(value)}
        secureTextEntry
        style={styles.caixaTexto}
        placeholder="Digite sua senha"
      />
      {erroSenha && <Text>Senha é obrigatória</Text>}
      <TouchableOpacity onPress={() => login()} style={styles.botao}>
        {loading ? (
          <ActivityIndicator size={"small"} color={"white"} />
        ) : (
          <Text style={styles.botaoTexto}>Acessar</Text>
        )}
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
