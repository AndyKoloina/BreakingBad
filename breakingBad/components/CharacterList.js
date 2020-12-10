
import React from 'react'
import {StyleSheet,FlatList} from 'react-native'
import CharacterListItem from './CharacterListItem'
const CharacterList = ({data,navigation}) => {
    const result = data.character
    const displayDetailForCharacter = (idCharacter) => {
        console.log('idCharacter',idCharacter)
        navigation && navigation.navigate('CharacterDetails',{idCharacter: idCharacter})     
    }
    return (
        <FlatList
          style={styles.list}
          data={result}
          keyExtractor={(item) => item.char_id.toString()}
          renderItem={({item}) => (
            <CharacterListItem 
                character={item}
                displayDetailForCharacter={displayDetailForCharacter}
            />
          )}
          onEndReachedThreshold={0.5}
         />
    )
}
const styles = StyleSheet.create({
    list: {
        flex: 1    
    }
})

export default CharacterList