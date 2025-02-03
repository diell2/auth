import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const Product = ({navigation}) => {
    const [teDhenat, setTeDhenat]=useState([])
    const thirrjaAPI=async()=>{
        const pergjigjja=await fetch("https://fakestoreapi.com/products")
        const tedhenatNew= await pergjigjja.json()
        setTeDhenat(tedhenatNew)
    }
    useEffect(()=>{
        thirrjaAPI();
    },[])
    return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <FlatList
        data={teDhenat}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title} onPress={()=> navigation.navigate('Item')}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: '#333',
    },
    card: {
      backgroundColor: '#fff',
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3, 
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
  });

export default Product;