import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllCategories from './src/screen/AllCategories';
import Categories from './src/screen/Categories';
import Meal from './src/screen/Meal';

const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#86A789"}, headerTintColor: '#EBF3E8'}}>
      <Stack.Screen name="AllCategory" component={AllCategories} />
      <Stack.Screen name="Category" component={Categories}/>
      <Stack.Screen name="Meal" component={Meal}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

