import React , {useEffect} from 'react'
import {View,Text,ActivityIndicator,StyleSheet,Dimensions} from 'react-native'
import {connect} from 'react-redux'
import { fetchCharacterList } from '../redux/actions/characterListActions'
import PropTypes from 'prop-types'
import CharacterList from './CharacterList'

/** fetchCharacterList : [function] -> function use to call API from actions
/*  characterList: [Object] -> objects contain list of state like (character:[], isFetching: false, errorMessage:'')
**/
const AppContainer = (props) => {
    const {fetchCharacterList,characterList} = props
  
    useEffect(() => {  
        const result = fetchCharacterList();
        console.log('fetch data',typeof(result))
    },[])

    let content;
    if(characterList.isFetching) {
        content = <View style={styles.loading}><ActivityIndicator size="large" color="white" /></View>
    } else {
        content = <CharacterList navigation ={props.navigation}data ={characterList}/>
    }
    return (
        <View style={{flex: 1 ,backgroundColor:'#302004',alignItems: 'center'}}>
             {content}
        </View>
    )
}

AppContainer.propTypes = {
    fetchCharacterList: PropTypes.func.isRequired,
    characterList: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        characterList: state
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor:'#302004'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height
    },
    loading_txt: {
        color: 'white',
        fontSize: 20,
    }
})

export default connect(mapStateToProps,{fetchCharacterList})(AppContainer)