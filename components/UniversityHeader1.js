import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

/* eslint-disable arrow-body-style */
const UniversityHeader1 = (props) => {
    return (
        <View style={styles.ViewStyle}>
            <Image
            resizeMode="contain"
          source={props.titleImage}
          style={{ width: 40, height: 40, borderRadius: 20/2, marginLeft: 5}}
        />
            <Text style={styles.TextStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    ViewStyle: {
        backgroundColor: 'black',
        // jusifyContent: 'center',
        // alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative',
        width:SCREEN_WIDTH-38,
        // borderBottomLeftRadius: 50,
        // borderBottomRightRadius: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    TextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'grey',
        position:'absolute',
        marginLeft: 47,
        marginTop:13,
    }
};

export default UniversityHeader1 ;
