import React, { Component } from 'react';
import { View, Text, StatusBar, Platform, Dimensions, Linking } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class ShowJobs extends Component {
    state = { 
        data: this.props.navigation.state.params.data,
        next: ''
    }
    handleClick = (data) => {
        this.props.navigation.navigate('detailJob', {data: data})
    }
    render() { 
        console.log('show Job', this.state.data)
        return ( 
            <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
               <LinearGradient colors={['#48d1cf','#eee', '#48d1cf']} style={{ width: screenWidth, height:screenHeight }} >
                   <ScrollView>
                        {this.state.data.map((i, index) => {
                            return <View style={{backgroundColor: 'white', marginTop: 10}}>
                                        <TouchableOpacity onPress={()=>this.handleClick(i)}>
                                            <View style={{padding: 10}} >
                                                <Text style={{fontWeight: 'bold', fontSize: screenWidth*.06}}>{i.profession}</Text>
                                                <Text style={{color: 'grey'}}>{i.company}</Text>
                                                <Text style={{marginTop: 10, color: 'grey'}}>{((i.jobDescription).length > 150) ?  (((i.jobDescription).substring(0,150-3)) + '...') : i.jobDescription}</Text>
                                                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                                                    <Text style={{fontSize: 12}}>Experience: {i.minimumExperience}</Text>
                                                    <Text style={{fontSize: 12}}>Salary: {i.salary}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                </View>


                            // return <View>
                            //             <View style={{display: 'flex', alignItems:'center'}}>
                            //                 <Text style={{fontSize: screenWidth*.09, color: 'red'}}>{index+1}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Company:</Text>
                            //                 <Text>{i.company}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Industry:</Text>
                            //                 <Text>{i.industry}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Functional Area:</Text>
                            //                 <Text>{i.functionalArea}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Total Position:</Text>
                            //                 <Text>{i.totalPosition}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Job Shift:</Text>
                            //                 <Text>{i.jobShift}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Job Type:</Text>
                            //                 <Text>{i.jobType}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Job Location:</Text>
                            //                 <Text>{i.jobLocation}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Gender:</Text>
                            //                 <Text>{i.gender}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Minimum Education:</Text>
                            //                 <Text>{i.minimumEducation}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Degree Title:</Text>
                            //                 <Text>{i.degreeTitle}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Career Level:</Text>
                            //                 <Text>{i.careerLevel}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Minimum Experience:</Text>
                            //                 <Text>{i.minimumExperience}</Text>
                            //             </View>
                            //             <View style={{display: 'flex', flexDirection:'row'}}>
                            //                 <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Send Resume at:</Text>
                            //                 <Text style={{color:'blue', borderBottomWidth: 1, borderBottomColor:'blue'}} onPress={() => Linking.openURL(`mailto:${i.email}`)}>{i.email}</Text>
                            //             </View>
                            //         </View>
                        })}
                   </ScrollView>
                </LinearGradient>
            </View>
         );
    }
}
 
export default ShowJobs;