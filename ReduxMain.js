import * as React from 'react'

import {View, Text, Button, FlatList, SafeAreaView} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
 
import { addName } from './actions'
import { ItemDivider, RenderUserDetails } from './RenderComponent/RenderItem'

export default function ReduxMain(){


    const UserDetailsFromStore = useSelector(state => state.userDetails)
    const dispatch = useDispatch()


    // console.log(addName())
    console.log('name from useselector', UserDetailsFromStore)
    return(
        <SafeAreaView>
            <Button
                title='add name to store'
                onPress={()=> dispatch(addName)}
                />
        <View >
            
            <Text>User Details From Store</Text>
          <FlatList
            data={UserDetailsFromStore}
            renderItem ={({item}) => <RenderUserDetails UserDetails={item}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent ={ItemDivider}

            /> 
        </View> 
        </SafeAreaView>
    )
}   