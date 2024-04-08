import { View, Text, FlatList,TouchableOpacity, StyleSheet } from 'react-native'
import data from '../data/category.json'
import ImageSet from '../component/ImageSet'
import React from 'react'


const AllCategories = ({navigation}) => {
  return (
    <View style={styles.container}>
          <FlatList 
            data={data}
            keyExtractor={item => item.idCategory}
            renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate("Category")}>
             <ImageSet ImgSource={{uri:item.strCategoryThumb}} name={item.strCategory}/>
             <Text style={styles.SubTitle}> {item.strCategoryDescription}</Text>
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
    fontSize:20,
    color:'#86A789',
    textAlign:'center',
  },
  SubTitle: {
    fontSize: 14,
    color: "#666",
  },
}
);

export default AllCategories