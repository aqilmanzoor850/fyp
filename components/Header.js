import React from 'react';
import { View, Text } from 'react-native';

/* eslint-disable arrow-body-style */
const Header = (props) => {
    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.TextStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    ViewStyle: {
        backgroundColor: 'black',
        jusifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative',
    },
    TextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red'
    }
};

export default Header;
