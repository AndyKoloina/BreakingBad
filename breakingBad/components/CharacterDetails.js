import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { fetchCharacterById, clearDetailsCharacter} from '../redux/actions/characterListActions'
import {getRandomQuote} from '../redux/actions/quoteActions'
import Icon from 'react-native-vector-icons/FontAwesome';

const CharacterDetails = props => {
    const { fetchData , characterDetails , clearData ,randomQuote,getRandom } = props

    if(typeof(characterDetails) !== 'undefined' && Object.keys(characterDetails).length > 0) {
        var character = characterDetails[0]
    }
   
    useEffect(() => {  
        fetchData(props.route.params.idCharacter);
        return() => {
            clearData()
        }
    },[])
    
    const loadRandomQuote = () => {
        getRandom()
    }
    return (
       <View style={styles.main_container}>
            <View style={styles.character_details_container}>
                <View style={{alignItems: 'center'}}>
                    <Image 
                        style={styles.img}
                        source={character === undefined ? require('../assets/images/imagedefault.jpg'):{uri: character && character.img}}
                    /> 
                </View>
                <View style={styles.character_details_description}>
                    <Text style={[styles.character_name,styles.txt,{fontSize: 25, color: 'black', marginBottom: 15,fontWeight: 'bold'}]}> { character && character.name}</Text>
                    <Text style={[styles.character_birthday,styles.txt]}> 
                        <Icon name="rocket" size={15} color="#000" />
                        <Text style={{color: 'black',fontWeight:'bold'}}> Birthday:</Text> 
                        {character && character.birthday}
                    </Text>
                    <Text style={[styles.character_occupation,styles.txt]}>
                        <Icon name="rocket" size={15} color="#000" />
                        <Text style={{color: 'black',fontWeight:'bold'}}> Occupation :</Text> 
                        {character && character.occupation.map(item =>  item
                        ).join(" / ")}
                    </Text>
                    <Text style={[styles.character_category,styles.txt]}> 
                        <Icon name="rocket" size={15} color="#000" />
                        <Text style={{color: 'black',fontWeight:'bold'}}> Category : </Text>
                        {character && character.category}
                    </Text>
                    <Text style={[styles.character_category,styles.txt]}>
                        <Icon name="rocket" size={15} color="#000" /> 
                        <Text style={{color: 'black',fontWeight:'bold'}}> Status :</Text> 
                        {character && character.status}
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    { Object.keys(randomQuote).length  === 0 ? <Text>loading...</Text> : (
                        <Text style={styles.random_quote}>"{randomQuote[0].quote}"</Text>
                    )}
                    <TouchableOpacity style={{alignItems: 'center'}} onPress={() => loadRandomQuote()}>
                         <Icon name="refresh" size={20} color="#000" />
                    </TouchableOpacity>
                </View>
               
            </View>
       </View>
    )
}



const styles = StyleSheet.create({
    main_container: {
        flex: 1,
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
    random_quote_container: {
        alignItems: 'center',
        marginTop: 20,
 
    },
    random_quote: {
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 20, 
        marginBottom: 20,
        flexWrap:'wrap'
    },
    character_details_description: {
        marginTop: 20
    },
    txt: {
        color: 'white',
        fontSize: 16
    },
    character_occupation: {
        flexWrap: 'wrap',
        textAlign: 'left'
    },
    
    character_name: {
        textAlign: 'center'
    },
    character_details_container: {
        marginTop: 100,
       
        backgroundColor: '#e3a415',
        minHeight: 400,
        borderTopColor: 'white',
        borderWidth: 2,
        padding: 10,
        width: Dimensions.get('window').width -20
    }
})
const mapStateToProps = state => {
    return {
      characterDetails: state.characterReducer.characterDetails,
      randomQuote: state.quoteReducer.randomQuote
    }
  }
  const mapDispatchToProps = dispatch => {
      return {
           fetchData: (id) => {
              dispatch(fetchCharacterById(id))
              dispatch(getRandomQuote())
            },
           getRandom: () => dispatch(getRandomQuote()),
           clearData: () => dispatch(clearDetailsCharacter())
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(CharacterDetails)
