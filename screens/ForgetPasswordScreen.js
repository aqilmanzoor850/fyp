import React from 'react';
import { View, Text } from 'react-native';

import Header from '../components/Header';
import ForgetPasswordForm from '../components/ForgetPasswordForm';

class ForgetPasswordScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ForgetPasswordForm
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
export default ForgetPasswordScreen;