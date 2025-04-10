import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./images/FotoSemFundo.png')} style={styles.icon} />
      
      <TextInput
        style={styles.input}
        placeholder="Telefone, nome de usuário ou email"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 40,
    tintColor: '#000',
  },
  input: {
    width: '360',
    height: 45,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#0095f6',
    borderRadius: 10,
    paddingVertical: 12,
    width: '350',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '400',
  },
  link: {
    color: '#0095f6',
    marginTop: 15,
    marginLeft: 270,
    fontSize: 13,
  },
});