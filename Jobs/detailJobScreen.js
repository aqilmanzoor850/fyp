import React, { Component } from 'react';
import {View, Text, Dimensions, StatusBar, Platform, Linking, Button, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import firebase from 'firebase';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class DetailJob extends Component {
    state = { 
        data: this.props.navigation.state.params.data
     }

    render() { 
        const {profession, company, jobDescription, salary, industry, functionalArea, totalPosition, jobShift, 
                jobType, jobLocation, gender, minimumEducation, degreeTitle, careerLevel, minimumExperience, 
                email} = this.state.data;
        console.log(firebase.auth().currentUser.email)
        return ( 
            <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
               <LinearGradient colors={['#48d1cf','#eee', '#48d1cf']} style={{ width: screenWidth, height:screenHeight }} >
                    <ScrollView>
                        <View style={{marginBottom: 50}}>
                            <Text style={{fontSize: screenWidth*.07, fontWeight: 'bold'}}>{profession}</Text>
                            <Text>{company}</Text>
                            <Text style={{marginTop: 10}}>{salary}</Text>
                            <View style={{marginTop: 15}}>
                                <Text style={{fontSize: screenWidth*.05, fontWeight: 'bold'}}>Job Description</Text>
                                <Text style={{fontSize: screenWidth*.035}}>{jobDescription}</Text>
                            </View>
                            <View style={{marginTop: 15}}>
                                <Text style={{fontSize: screenWidth*.05, fontWeight: 'bold'}}>Job Details</Text>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Company:</Text>
                                    <Text>{company}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Industry:</Text>
                                    <Text>{industry}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Functional Area:</Text>
                                    <Text>{functionalArea}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Total Position:</Text>
                                    <Text>{totalPosition}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Job Shift:</Text>
                                    <Text>{jobShift}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Job Type:</Text>
                                    <Text>{jobType}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Job Location:</Text>
                                    <Text>{jobLocation}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Gender:</Text>
                                    <Text>{gender}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Minimum Education:</Text>
                                    <Text>{minimumEducation}</Text>
                                </View>
                                {degreeTitle ? <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Degree Title:</Text>
                                    <Text>{degreeTitle}</Text>
                                </View> : null}
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Career Level:</Text>
                                    <Text>{careerLevel}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Minimum Experience:</Text>
                                    <Text>{minimumExperience}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection:'row'}}>
                                    <Text style={{fontWeight:'bold', width:screenWidth*.4}}>Send Resume at:</Text>
                                    <Text style={{color:'blue', borderBottomWidth: 1, borderBottomColor:'blue'}} onPress={() => Linking.openURL(`mailto:${email}?mailfrom:${firebase.auth().currentUser.email}`)}>{email}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'flex-end', marginRight: 20}}>
                                    <Button 
                                        title='Apply'
                                        onPress={() => Linking.openURL(`mailto:${email}?mailfrom:${firebase.auth().currentUser.email}`)}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
         );
    }
}
 
export default DetailJob;