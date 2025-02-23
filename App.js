import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import newpage from './screens/newpage';
import Product from './screens/Product';
import Item from './screens/Item';
const Stack=createStackNavigator()
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name ="Login" component={Login} options={{title: "Login Screen"}}/>
    //     <Stack.Screen name ="Welcome" component={Welcome} options={{title: "Welcome Screen"}}/>
    //     <Stack.Screen name ="newpage" component={newpage}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Product></Product>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="Product" component={Product}/>
          <Stack.Screen name ="Item" component={Item}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
