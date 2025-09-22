import { StyleSheet, Text, View,TouchableHighlight,Image } from 'react-native'
import React from 'react'
import { Alert } from 'react-native'
import { useTheme } from './ThemeContext'

export const Modu = () => {
    const { theme, toggleTheme } = useTheme();
  return (
   
     <View style={styles.card}>
      <View style={styles.textContainer}>
           
           <Text style={{ color: theme.title }}>Open New Account</Text>
           <Text style={{ color: theme.subtitle }}>Open a new account with us  in just a few easy steps</Text>
          <TouchableHighlight style={{padding:10}} onPress={()=>Alert.alert("Pressed")} >
           <Text style={{ color: theme.btn }}>Apply Button</Text>
          </TouchableHighlight>
         </View>
         <View >
         <Image
           source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/035/314/037/small_2x/ai-generated-professional-man-in-suit-standing-confidently-in-office-generative-ai-free-photo.jpg" }}
           style={styles.image}
         />
       </View>
       </View>
       
   
  )
}

export default Modu

const styles = StyleSheet.create({
    container1: {
                flex: 1,
                marginTop:150
  },
  
  container:{
           width:"100%",
           height:"100%",
           backgroundColor:"#fff",
           paddingVertical:10,
           paddingHorizontal:20,
           marginTop:300,

  },
  card: {
    flexDirection: "row", // 👈 this makes items parallel
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    margin: 10,
    borderRadius: 10,
    justifyContent:"space-evenly",
    
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 70,
    height: 70,
    //borderRadius: 50,
    
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    marginTop: 4,
  },
  btn:{
        fontSize: 25,
        color:"red"
  }
})