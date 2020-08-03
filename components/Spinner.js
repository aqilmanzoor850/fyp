import React from 'react';
import { View, ActivityIndicator } from 'react-native';

/* eslint-disable arrow-body-style */
const Spinner = (props) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={props.size || 'large'} />
        </View>
    );
};
const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};
export default Spinner;
