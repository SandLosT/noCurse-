import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput}from 'react-native'
import { useState } from 'react'
const [contador, setContador] = useState(0)
const [texto, setTexto] = useState('')
const wishList = [ 
  "Coca Cola",
  "Pepsi",
  "Fanta",
  "Sprite",
]


export default function Index() {
  return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../(tabs)/images/lista.webp")}/>
      
        <FlatList
          keyExtractor={(index) => index.toString()}
          data={wishList}
          renderItem={({ item }) =>
            <View>
                <Text style={styles.list}>{contador + " "+ item}</Text>
            </View> 
          }
        />
          <TextInput
          style={styles.input}
          placeholder="Digite algo..."
          value={texto}
          onChangeText={setTexto} // Atualiza o estado ao digitar
        /> 
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'column',
    gap: 50,
  },
  input:{
    width: 300,
    height: 50,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 10,
    padding: 10,
  },
  button:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  colorText:{
    color: 'yellow',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 5,
    padding: 10,
    borderRadius: 10,
    marginBottom: 200
  },
  image:{
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 5,
  },
  secundText:{
    color: 'black',
    textDecorationLine: 'underline',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20
  },
  list:{
    width: 350,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 10,
    marginBottom: 10,
  }
})