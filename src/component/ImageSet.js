import React from "react";
import { View, Text, StyleSheet, Image, } from 'react-native'

const ImageSet = ({ImgSource,name,txt}) => {
    return (
        <View style={styles.container}>     
            <Image style={styles.image} source={ImgSource} onPress={() => navigation.navigate("Categories")}/>
            <Text style={styles.imgTitle}>{name}</Text>
            <Text style={styles.imgSubTitle}>{txt}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: "#EBF3E8",
    },
    image: {
      width: 150,
      height: 150,
      margin: 10,
      borderRadius: 70,
      borderWidth: 2,
      borderColor: "#B2C8BA",
    },
    imgTitle: {
      fontSize: 25,
      color: '#86A789',
      fontWeight: "bold",
    },
    imgSubTitle: {
      fontSize: 5,
      color: "#666",
    },
  });

export default ImageSet;