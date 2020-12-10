import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native'
import {connect} from 'react-redux'
import { fetchCharacterById } from '../redux/actions/characterListActions'
const CharacterDetails = props => {
    useEffect(() => {  
        fetchCharacterById(props.route.params.idCharacter);
    },[])

    return (
       <View style={styles.main_container}>
            <View style={styles.character_details_container}>
                <Image 
                  style={styles.img}
                  source={{uri: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg'}}
                />
                <View style={styles.character_details_description}>
                    <Text style={[styles.character_name,styles.txt]}> Skyler White</Text>
                    <Text style={[styles.character_birthday,styles.txt]}> 08-11-1970</Text>
                    <Text style={[styles.character_occupation,styles.txt]}> House wife / Book keeper / Car Wash Manager / Taxi Dispatcher</Text>
                    <Text style={[styles.character_category,styles.txt]}> breaking Bad</Text>
                </View>
            </View>
       </View>
    )
}
const styles = StyleSheet.create({
    main_container: {
        alignItems: 'center',
        backgroundColor:'#302004',
        height: Dimensions.get('window').height
    },
    img: {
        width: 150,
        height: 150,
        marginTop: -75,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2
    },
    txt: {
        color: 'white',
        fontSize: 20
    },
    character_occupation: {
        textAlign: 'center'
    },
    character_details_description: {
        alignItems :'center',
        marginTop: 20,
    }
    ,
    character_details_container: {
        marginTop: 100,
        alignItems: 'center',
        backgroundColor: '#e3a415',
        minHeight: 300,
        borderTopColor: 'white',
        borderWidth: 2
    }
})
const mapStateToProps = state => {
    return {
      characterDetails: state
    }
  }
export default connect(mapStateToProps,{fetchCharacterById})(CharacterDetails)
