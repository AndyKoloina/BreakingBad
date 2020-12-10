import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native'
const CharacterListItem = (props) => {
const {displayDetailForCharacter,character} = props
    return (
        <TouchableOpacity onPress={ () => displayDetailForCharacter(character.char_id)}>
            <View style={styles.characterItem_container}>  
                <Image 
                    style={styles.img}
                    source={{uri: character.img}}
                /> 
                <View style={styles.profile}>
                    <Text style={[styles.profile_name,styles.txt]}>{character.name}</Text>
                    <View style={styles.divider}></View>
                    <Text style={[styles.profile_nick_name,styles.txt]}>{character.nickname}</Text>
                </View>
            </View>
        </TouchableOpacity>    
    )
}

const styles = StyleSheet.create({
    img: {
        width: 75,
        height: 75,
        borderRadius: 50
    },
    characterItem_container: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingLeft: 15,
        marginTop: 20,
        backgroundColor: '#e3a415',
        paddingVertical: 15,
        width: Dimensions.get('window').width - 15
    },
    divider: {
        width: 50,
        height: 3,
        backgroundColor: 'white',
        marginTop: 3
    },
    txt: {
        color: 'white',
    },
    profile: {
        marginLeft: 15
    },
    profile_name: {
        fontWeight: 'bold',
        fontSize: 18
    },
    profile_nick_name: {
        fontStyle: 'italic',
        marginTop: 6
    }
})
export default CharacterListItem