import React from 'react';
import { View, Text } from 'react-native';

import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';

class SignUpScreen extends React.Component{
    callback =() => {
        console.log('this is auth');
        this.props.navigation.navigate('map');
    }
    render(){
        return(
            <View style={styles.container}>
                <Header headerText="SignUp" />
                <SignUpForm 
                callback = {this.callback}
                />
            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1
    }
}
export default SignUpScreen;