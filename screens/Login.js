import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const Login=({navigation})=>{
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const Handle= async()=>{
        try{
            const pergjigjja= await fetch("https://dummyjson.com/auth/login",{
                method:"POST",
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify({
                    username:username,
                    password:password
                }),
                credentials:"omit"
            })
            const data= await pergjigjja.json()
            if(data?.accessToken){
                navigation.navigate("Welcome",{
                    username:username
                })
            }

        }
        catch(err){

        }
    }
    return(
        <View>
            <Text>Welcome to fake API call</Text>
            <TextInput
                placeholder="Username"
                autoCapitalize="none"
                value={username}
                onChangeText={text=>setUsername(text)}
            />
            <TextInput 
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                value={password}
                onChangeText={text=>setPassword(text)}
            />
            <Button title="Login" onPress={Handle}/>
        </View>
    )
}


export default Login;