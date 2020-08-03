import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { View, Text, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const LocationDropDown = (props) => {

    return ( 
        <View style={{marginLeft: "10%"}}>
            <Dropdown 
                    label='Select the Location'
                    itemColor={'black'}
                    data={props.location}
                    onChangeText={(val) => props.handleLocationChange(val)}
                    />
        </View>
     );
}
 
export default LocationDropDown;