import React from 'react'
import {StyleSheet,View,Text,Image,SafeAreaView } from 'react-native'
import BreakingBadButton from './Button';

const Welcome = ({navigation}) => {
    const onNext = () => {
        navigation && navigation.navigate('AppContainer') 
    }
    return (  
            <View style={styles.main_container}>
                <Image style={styles.welcome_logo}source={require('../assets/images/icon.png')} />
                <Text style={styles.welcome_txt}>Welcome To Breaking Bad</Text>
                <BreakingBadButton onPress={onNext} title="Next >" size="sm" backgroundColor="#007bff"  isLinearGradien= 'true'/>
            </View>
    )
}

const styles= StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center', 
        height: 400,
        backgroundColor:'#302004'
        
    },
    welcome_logo: {
        width: 150,
        height: 150,
        resizeMode: "contain"
    },
    welcome_txt: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#fff',
    }
})
export default Welcome