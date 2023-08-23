import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [comprimento, setComp] = useState(''); 
  const [altura, setAlt] = useState('');

  function calcularArea() {
    const area = comprimento * altura; 
    alert("A área total do espaço/objeto é: " + area);
  }

  return (

    <SafeAreaView style={estilos.container}>
      <Image style={estilos.header} source={require("./assets/header.jpg")} />
      <Text style={estilos.paragraph}> Área de determinado espaço/objeto </Text>
        <TextInput style={estilos.input} keyboardType="numeric" onChangeText={(comprimento)=>setComp(comprimento)} placeholder="Digite o comprimento/base" />
        <TextInput style={estilos.input} keyboardType="numeric" onChangeText={(altura)=>setAlt(altura)} placeholder="Digita a altura/distância" />
        <TouchableOpacity style={estilos.btn} onPress={calcularArea}> 
          <Text style={estilos.txtbtn}> Calcular a área </Text>
        </TouchableOpacity>
    </SafeAreaView>

  );

}

const estilos = StyleSheet.create({

  header: { width: 400, height: 200 },

  container: { flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1', padding: 8 },

  paragraph: { margin: 24, fontSize: 16, fontWeight: 'bold', textAlign: 'center', },

  input: { fontSize: 17, padding: 20, backgroundColor: "#330099", borderRadius: 10, margin: 15, marginTop: 10},

  btn: { alignItems: "center", backgroundColor: "#3333ff", padding: 15, borderRadius: 10, margin: 15, },

  txtbtn: { fontSize: 30, color: "#4dff4d"}

});
