import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from "./pages/Products";
import Details from "./pages/Detail/Detail";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products} 
        options={{
          title:"Dükkan",
          headerStyle:{backgroundColor:"#90caf9"},
          headerTitleStyle:{color:"white"}

        }}
        />
        <Stack.Screen name="DetailPage" component={Details} 
         options={{
          title:"Detay",
          headerStyle:{backgroundColor:"#90caf9"},
          headerTitleStyle:{color:"white"},
          headerTintColor:"white"

        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;