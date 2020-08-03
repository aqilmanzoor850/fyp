import React from 'react';
import { View, Text, AsyncStorage, TouchableHighlight, TouchableOpacity, Image, Dimensions, SafeAreaView,ScrollView, Platform, StatusBar, } from 'react-native';
//import {Button} from 'react-native-elements'
import { connect } from 'react-redux';
import firebase from 'firebase';
import {LinearGradient} from 'expo-linear-gradient';

import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';

import * as actions from '../actions';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class MapScreen extends React.Component{

    constructor(props){
        super(props);
        this.afterPressing = this.afterPressing.bind(this);
        this.topUniScreenHandler = this.topUniScreenHandler.bind(this);
        this.videoScreenHandler = this.videoScreenHandler.bind(this);
        this.bookScreenHandler = this.bookScreenHandler.bind(this);
        this.problemSolvingScreenHandler = this.problemSolvingScreenHandler.bind(this);
        this.jobScreenHandler = this.jobScreenHandler.bind(this);
    }
    async afterPressing(){
        await this.onLogoutComplete(this.props);
        console.log("function ended");
    }
    // async logout(){
    //     await AsyncStorage.removeItem('secure_token');
    //     console.log(AsyncStorage.getItem('secure_token'));
    //     firebase.auth().signOut().then(() => {
    //         this.props.navigation.navigate('welcome');
    // }).catch(function(error) {
    //   // An error happened.
    // });
    //   }
    async onLogoutComplete(props){
             //const tt= await AsyncStorage.getItem('secure_token');
             //console.log(await AsyncStorage.getItem('secure_token'));
            firebase.auth().signOut().then((user)=>{
            this.props.facebookLogout();
            this.props.navigation.navigate('welcome');
            console.log('Ho gyaa logout');  

            })
        //     await AsyncStorage.removeItem('secure_token').then(()=>{
        //         console.log(AsyncStorage.getItem('secure_token'))
        //     });
        //     //token=null;
        //     //await AsyncStorage.setItem('secure_token',token);            
        //    // console.log(AsyncStorage.removeItem('secure_token'));
        //    // console.log(AsyncStorage.getItem('secure_token'));
        //     this.props.navigation.navigate('welcome');
        //     console.log('Ho gyaa logout');           

    }
    topUniScreenHandler(){
        this.props.navigation.navigate('topUni');
    }
    videoScreenHandler(){
        this.props.navigation.navigate('video');
    }
    bookScreenHandler(){
        this.props.navigation.navigate('book');
    }
    problemSolvingScreenHandler(){
        this.props.navigation.navigate('problemSolving');
    }
    jobScreenHandler() {
        this.props.navigation.navigate('jobScreen');
    }


    render(){
        return(
            <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
                 <View  >
                    <LinearGradient colors={['#48d1cf','#eee', '#48d1cf']} style={{ width: screenWidth, height:screenHeight }} >
                    
                    
                    <View style={styless.ViewStyle}>
                                
                    <Text style={{width: screenWidth*.45, height: screenHeight*.13,fontWeight:'900', marginLeft:'35%',marginTop:'-6%',fontSize:35, color:'black', fontStyle:'normal', marginBottom: 20}}>
                        Home
                    </Text>
                   
                   </View>
                        <ScrollView>
                           
                            
                            <View style={{display:'flex', flexDirection:'row',marginTop:15}}>
                                <View style={{width:screenWidth*.5, height:screenHeight*.27, overflow:'hidden'}}>
                                    <TouchableOpacity onPress={ this.videoScreenHandler}>
                                        <Image resizeMode={'cover'} style={{width: screenWidth*.34, height: screenHeight*.20, borderRadius:100/2, marginBottom:15,marginLeft:'18%'}} source={require("../Images/videos.png")} />
                                    </TouchableOpacity>
                                    <Text onPress={ this.videoScreenHandler} style={{textAlign:'center', fontWeight:'600', color:'black', fontSize: 20}}>
                                            Video Lectures
                                    </Text>
                                </View>

                                <View style={{width:screenWidth*.5, height:screenHeight*.27, overflow:'hidden'}}>
                                    <TouchableOpacity onPress={ this.bookScreenHandler}>
                                        <Image resizeMode={'center'} style={{width: screenWidth*.34,height: screenHeight*.20, borderRadius:100/2, marginLeft: '10%', marginBottom:15}} source={require("../Images/books.png")} />
                                    </TouchableOpacity>
                                    <Text onPress={ this.bookScreenHandler} style={{textAlign:'center', fontWeight:'600', color:'black', fontSize: 20}}>
                                            Books 
                                    </Text>
                                </View>
                            </View>

                            <View style={{display:'flex', flexDirection:'row',marginTop:'13%'}}>
                                <View style={{width:screenWidth*.5, height:screenHeight*.27,marginTop:'-10%', overflow:'hidden'}}>
                                    <TouchableOpacity onPress={ this.jobScreenHandler}>
                                        <Image resizeMode={'cover'} style={{width: screenWidth*.34, marginLeft:'18%',height: screenHeight*.20, borderRadius:100/2, marginBottom:15}} source={require("../Images/jobs.png")} />
                                    </TouchableOpacity>
                                    <Text onPress={ this.jobScreenHandler} style={{textAlign:'center', fontWeight:'600', color:'black', fontSize: 20}}>
                                            Job Offers
                                    </Text>
                                </View>

                                <View style={{width:screenWidth*.5, height:screenHeight*.27, marginTop:'-10%',overflow:'hidden'}}>
                                    <TouchableOpacity onPress={this.problemSolvingScreenHandler}>
                                        <Image resizeMode={'center'} style={{width: screenWidth*.34, marginLeft: '10%',height: screenHeight*.20, borderRadius:100/2, marginBottom:15}} source={require("../Images/probsol.png")} />
                                    </TouchableOpacity>
                                    <Text onPress={this.problemSolvingScreenHandler} style={{textAlign:'center', fontWeight:'600', color:'black', fontSize: 20}}>
                                            Problem Solving
                                    </Text>
                                </View>
                            </View>
                            
                            <View style={{display:'flex', justifyContent:'center', alignItem:'center', flexDirection:'row',marginTop:'10%'}}>
                                <View style={{width:screenWidth*.5, height:screenHeight*.25, marginTop:'-10%',overflow:'hidden'}}>
                                    <TouchableOpacity onPress={this.topUniScreenHandler}>
                                        <Image resizeMode={'center'} style={{width: screenWidth*.34, height: screenHeight*.20, borderRadius:100/2, marginLeft: '16%', marginBottom:0,marginTop:'-8%'}} source={require("../Images/topuni.png")} />
                                    </TouchableOpacity>
                                    <Text onPress={this.topUniScreenHandler} style={{textAlign:'center', fontWeight:'600', color:'black', fontSize: 20,marginTop:'-10%'}}>
                                            Top IT Universities
                                    </Text>
                                </View>
                            </View>
                     
                       
                        <View style={styles.MainContainer} style={{marginTop:'-10%'}}>
                    
                    <TouchableOpacity style={styles.SubmitButtonStyle}
                     activeOpacity = { .9 } onPress={this.afterPressing}>
                    
                    <Text style={styles.TextStyle}> LOGOUT </Text>
                     </TouchableOpacity>
                    </View>
                    
                    </ScrollView>

                    </LinearGradient>
                 </View>
            </View>
        );
    }
}

const styles = {
    
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
   
  },
 
  SubmitButtonStyle: {
 
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
    buttonStyle: {
        backgroundColor: '#48D1CC',  

    },
    TextStyle:{
        color:'black',
        textAlign:'center',
    }
    
}

function mapStateToProps({auth}){
    return {
        token: auth.token
    };
}



const styless = {
    ViewStyle: {
        backgroundColor:'#00BCD4',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 25,
        paddingLeft: 5,
        elevation: 2,
        position: 'relative',
        width:screenWidth*1,
        height: screenHeight*.09,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    TextStyle: {
        textAlign:'center',
        marginLeft: 10,
        fontSize: screenWidth*.07,
        fontWeight: 'bold',
        color: 'black',
         marginTop:20,
    }
};
export default connect(mapStateToProps, actions)(MapScreen);