import React from 'react';
import { View, Text, BackHandler } from 'react-native';
import Auth from '../components/Auth';
import MapScreen from './MapScreen'

class AuthScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Auth/>
            </View>
        );
    }
}
const  styles = {
    container: {
        flex: 1
    }
}
export default AuthScreen;