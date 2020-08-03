import React from 'react';
import {View, Text, StatusBar, Dimensions, Platform} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {top, users, location, fee, status, hostal} from '../endpoints/endpoints';

import UniversityFinder from '../components/UniversityFinder';
import DropDown from '../components/dropDownlist';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class TopUniversitiesScreen extends React.Component{
   state = { location:'', fee:'', status:'', hostal: '', var1: false, var2: false, var3: false, var4: false }

   changeLocation = (value) => {
      this.setState({location: value, var1: true}, () => {
         console.log(this.state.location)
      })
   }

   feeChange = (value) => {
      this.setState({fee: value, var2: true}, () => {
         console.log(this.state.fee)
      });
   }

   statusChange = (value) => {
      this.setState({status: value, var3: true}, () => {
         console.log(this.state.status)
      })
   }

   hostalChange = (value) => {
      this.setState({hostal: value, var4: true}, () => {
         console.log(this.state.hostal)
      })
   }


  onSubmit = () => {
     console.log('onSubmit')
      this.props.navigation.navigate('uniFinder', {data:users, 
                                                   location:this.state.location, 
                                                   fee: this.state.fee, 
                                                   hostal: this.state.hostal,
                                                   status: this.state.status,
                                                   var1: this.state.var1, 
                                                   var2: this.state.var2,
                                                   var3: this.state.var3,
                                                   var4: this.state.var4
                                                })
  }

  top10Uni = () => {
     this.props.navigation.navigate('uniFinder1', {
        data: top
     })
  }

   render(){
      return(
         <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <LinearGradient colors={['#48d1cf','#eee', '#48d1cf']} style={{ width: screenWidth, height:screenHeight }} >
               <DropDown 
                  data={users} 
                  location={location}
                  fee={fee}
                  status={status}
                  hostal={hostal}
                  onChange={this.changeLocation}
                  feeChange={this.feeChange}
                  statusChange={this.statusChange}
                  hostalChange={this.hostalChange}
                  onSubmit={this.onSubmit}
                  top10Uni={this.top10Uni}
               />
            </LinearGradient>
         </View>
      );
   }
}
export default TopUniversitiesScreen;
