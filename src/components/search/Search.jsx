import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons,Entypo } from '@expo/vector-icons'
import styles from './Styles'

const Search = ({onSearchHandlerEvent}) => {

    const [searchInput, setSearchInput] = useState('')

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={setSearchInput}
                placeholder='Buscar....'
                value={searchInput}
            />
            <TouchableOpacity onPress={()=>onSearchHandlerEvent(searchInput)}>
                <EvilIcons name='search' size={24} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
                <Entypo name='cross' size={24} color={"black"} />

            </TouchableOpacity>
        </View>
    )
}

export default Search

