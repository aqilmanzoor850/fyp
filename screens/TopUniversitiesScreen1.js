import React from 'react';
import {View, Text} from 'react-native';

import UniversityFinder from '../components/UniversityFinder';

const users = [
    {
       index: 1,
       name: ' Comsats University',
       image: require('../Images/comsats.png'),
       color: '#03A9f4'
    },
    {
        index: 2,
        name: '           FAST',
        image: require('../Images/comsats.png'),
        color: '#03A9f4'
     },
     {
        index: 3,
        name: ' Qurtuba University',
        image: require('../Images/comsats.png'),
        color: '#03A9f4'
     },
     {
        index: 4,
        name: '           BUIT',
        image: require('../Images/comsats.png'),
        color: '#03A9f4'
     },
     {
        index: 5,
        name: '           CUST',
        image: require('../Images/comsats.png'),
        color: '#03A9f4'
     },
     {
        index: 6,
        name: ' CECOS University',
        image: require('../Images/comsats.png'),
        color: '#03A9f4'
     },
     {
        index: 7,
        name: '           PUCIT',
        image: require('../Images/comsats.png'),
        color: '#03A9f4'
     },
     {
        index: 8,
        name: '           NUST',
        image: require('../Images/comsats.png'),
        color: '#03A9f4'
     },
     {
        index: 9,
        name: '           PIEAS',
        image: require('../Images/comsats.png'),
        color: '#03A9f4'
     },
     {
        index: 10,
        name: '           ITU',
        image: require('../Images/comsats.png'),
        color: '#03A9f4'
     }
];

class TopUniversitiesScreen extends React.Component{
    render(){
        return(
            <View>
               <UniversityFinder data={users} />
            </View>
        );
    }
}
export default TopUniversitiesScreen;