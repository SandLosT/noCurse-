import {View, Text, StyleSheet, Image }from 'react-native'
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.colorText}>im not have more curse! this my secund hello-word</Text>
      <Image style={styles.image} source={require("../(tabs)/images/eminem.jpg")}/>
      <Text style={styles.secundText}>if you need cry, no problem you can cry, but beliver in you in to the end</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  colorText:{
    color: 'yellow',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 5,
    padding: 10,
    borderRadius: 10
  },
  image:{
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 5,
    marginTop: 20
  },
  secundText:{
    color: 'black',
    textDecorationLine: 'underline',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20
  }
})