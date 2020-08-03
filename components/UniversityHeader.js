import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

/* eslint-disable arrow-body-style */
const UniversityHeader = (props) => {
    return (
        <View style={styles.ViewStyle}>
            <Image
            resizeMode="contain"
          source={props.titleImage}
          style={{ width: screenWidth*.17, height: screenHeight*.1, borderRadius: 20/2, marginLeft: 0}}
        />
            <View style={{display:'flex', flexDirection:'column'}}>
                <Text style={styles.TextStyle}>{props.headerText} </Text>
                <Text style={{fontSize:screenWidth*.05, textAlign:"center"}}>({props.campus} Campus)</Text>
            </View>
        
        </View>
    );
};
const styles = {
    ViewStyle: {
        backgroundColor: '#D6D6D6',
        display: 'flex',
        flexDirection: 'row',
        // jusifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        elevation: 2,
        position: 'relative',
         width:screenWidth,
        height: screenHeight*.13,
        // borderBottomLeftRadius: 50,
        // borderBottomRightRadius: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    TextStyle: {
        textAlign:'center',
        marginLeft: 10,
        fontSize: screenWidth*.07,
        fontWeight: 'bold',
        color: 'black',
        // paddingLeft: '5%',
        //position:'absolute',
        // marginLeft: 47,
         marginTop:10, 
    }
};

export default UniversityHeader;
