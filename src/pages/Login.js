import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import RMButton from "../components/RMButton";
import RMTextInput from "../components/RMTextInput";
import { FontAwesome } from "@expo/vector-icons";

export default function Login() {
  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);
  const [erroUsuario, setErroUsuario] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordInvisible, setPasswordInvisible] = useState(true);

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

    Alert.alert("Login", "Usuário: " + usuario + " Senha: " + senha);
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

  function mostrarOcultarSenha() {
    setPasswordInvisible(!passwordInvisible);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.containerImage}
        width={303}
        height={295}
        source={require("../assets/images/logo.png")}
      />
      <RMTextInput
        value={usuario}
        onChangeText={informaUsuario}
        placeholder="Digite seu usuário"
      />
      {erroUsuario ? <Text>Usuário é obrigatorio</Text> : <></>}
      <RMTextInput
        value={senha}
        onChangeText={informaSenha}
        placeholder="Digite sua senha"
        secureTextEntry={passwordInvisible}
      >
        <TouchableOpacity onPress={mostrarOcultarSenha}>
          {passwordInvisible ? (
            <FontAwesome name="eye" size={24} />
          ) : (
            <FontAwesome name="eye-slash" size={24} />
          )}
        </TouchableOpacity>
      </RMTextInput>
      {erroSenha && <Text>Senha é obrigatória</Text>}
      <RMButton titulo="Acessar" action={login} />

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
    padding: 16,
  },

  containerImage: {
    marginBottom: 65,
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
  botaoCadastro1: {
    borderWidth: 1,
    borderColor: "#770602",
    backgroundColor: "#F7EEE9",
  },
  textoBotaoCadastro1: {
    color: "#770602",
  },
});
