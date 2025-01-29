import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


const Welcome = ({route}, {navigation}) => {
    const goTo = async() =>{
        navigation.navigate("newpage")
    }
    const {username}=route.params || {}
    return(<View style={style.container}>
            <Text style={style.title}>Welcome
                {username ? `, ${username}` :""}
            </Text>
            <Text>This is the second screen where we show the logged-in users</Text>
            <Button title="GO TO NEXT PAGE" onPress={goTo}/>
    </View>)
}
const style= StyleSheet.create({
    container:{
        flex:1, 
        paddingTop:80,
        paddingHorizontal:20,
        backgroundColor:'#fff'
    },
    title:{
        fontSize:24,
        marginBottom:20,
        textAlign:"center"
    }
})

export default Welcome;