import * as  React from 'react'
import {Text, View, StyleSheet} from 'react-native'


export const ItemDivider =() =>{
    return(
        <View  style={styles.divider}/>
    )
}



export const RenderUserDetails =({UserDetails}) =>{
    console.log ('>>>', UserDetails.name)
 return(
    <View style={styles.item}>
        <Text style={styles.text}>{UserDetails.name}</Text>
        <Text style={styles.smallText}>Address: {UserDetails.address}</Text>
        <Text style={styles.smallText}>Gmail: {UserDetails.gmail}</Text>
        <Text style={styles.smallText}>Enroll: {UserDetails.enrollDate}</Text>
        <Text style={styles.smallText}>Service: {UserDetails.service}</Text>
    </View>
 )
}

const styles = StyleSheet.create({
    divider :{
        height : 1,
        width : '100%',
        backgroundColor : '#808080'
    },
    item: {
        paddingLeft: 15,
        paddingTop : 10,
        paddingBottom : 10
      },
    text :{
        fontSize : 18,
        color : "black"
    },
    smallText :{
        fontSize: 14,
        color : "black"
    }
})