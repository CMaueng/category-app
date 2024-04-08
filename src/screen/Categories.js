import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import data from '../data/meal.json'
import ImageSet from '../component/ImageSet'

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
          <FlatList 
            data={data}
            keyExtractor={item => item.idMeal}
            renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate("Meal")} name={item.strMeal}>
     
            </TouchableOpacity>
            }
           />
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#EBF3E8",
      alignItems: "center",
      justifyContent: "center",
    },
  title:{
    paddingTop : 20,
    marginStart:50,
    fontSize:20,
    color:'#86A789',
    textAlign:'center',
  }
}
);

export default Categories