import React, { Component } from 'react';
import {View, Text, ScrollView, Platform, StatusBar, Dimensions, Button, TouchableOpacity, Image, Linking, BackHandler} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import firebase from 'firebase';
import {ScreenOrientation} from 'expo';
import PDFReader from 'rn-pdf-reader-js'
import * as FileSystem from 'expo-file-system';

import Spinner from '../components/Spinner';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class ReactBook extends Component {
    state = { java:'', url:'', loading: false, download:'', showWebView: true }

    downloadReactBook = async () => {
            var fireref = firebase.storage().ref().child('reactbooks/ReactNotesForProfessionals.pdf');
            var url = await fireref.getDownloadURL()
            console.log(url)
            this.setState({download: url}, ()=> {
                Linking.openURL(this.state.download)
            })
    }

    

    openReactBook = () => {
        this.setState({loading: true}, async () => {
            var fireref = firebase.storage().ref().child('reactbooks/ReactNotesForProfessionals.pdf');
            var url = await fireref.getDownloadURL();
            console.log(url);
            this.setState({java: url});
            FileSystem.downloadAsync(
                this.state.java,
                FileSystem.cacheDirectory + 'small.pdf'
            ).then(({uri}) => {
                console.log(uri);
                this.setState({url: uri})
                console.log('Finished Download to ', uri);
            }).catch(error => {
                console.error(error);
            });
        })
    }




    render() {
        if(this.state.url!==''){
            return(
                <PDFReader
                style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
                    source={{
                    uri: this.state.url,
                    }}
                />
            );
        }
        if(this.state.loading===false){
            return ( 
                <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
                    <LinearGradient colors={['#48D1CC', '#28b485']} style={{ width: screenWidth, height:screenHeight }}>
                              
                    <View style={styles.ViewStyle}>
            
           
                    <Text style={{fontWeight:'900',marginLeft:'27%',marginTop:'-5%',fontSize:30,  height:screenHeight*.09,color:'black', fontStyle:'normal', marginBottom: 20}}>
                      React Books
                    </Text>
                   </View>
                        <ScrollView alwaysBounceVertical>
                        
                        <View>
                            <View style={{display:'flex', flexDirection:'row',marginTop:'10%'}}>
                                <View style={{display:'flex', flexDirection:'row', marginBottom: 0, justifyContent:'center', alignItem:'center'}}>
                                    <View style={{width:screenWidth*.38, height:screenHeight*.28, overflow:'hidden'}}>
                                        <TouchableOpacity onPress={() => {this.openReactBook()}}>
                                            <Image resizeMode={'cover'} style={{width: screenWidth*.37, height: screenHeight*.28, marginLeft: 10, marginBottom:0}} source={require( '../Images/rjs.jpg')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                               <View style={{alignContent:'center',paddingLeft:'10%',marginLeft:'10%'}}>
                                    <Text style={{ fontWeight:'bold', color:'black', fontSize: 16, textAlign:'center', width: '50%' }}>Name</Text>
                                    <Text key={item => item.toString()+6} style={{textAlign:'center', fontWeight:'600', color:'#eee', marginLeft:'2%',fontSize: 16, width: '50%'}}>
                                          React JS
                                    </Text>
                                    <Text style={{ fontWeight:'bold', color:'black', fontSize: 16, textAlign:'center', width: '50%' }}>Author</Text>
                                    <Text style={{textAlign:'center',  marginLeft:'2%',width: '50%', fontWeight:'600', color:'#eee', fontSize: 16}}>
                                        Allen B. Downey
                                    </Text>
                               </View>
                            </View>
                            <View style={{display: "flex", flexDirection:'row',}}>
                                <View style={{ width: '50%', marginTop: 20, marginRight: 10,width:'30%',marginLeft:'10%'}} >
                                    <Button 
                                        title='View'
                                        onPress={() => this.openReactBook()}
                                    />
                                </View>
                                <View style={{ width: '50%', marginTop: 20,width:'30%',marginLeft:'10%'}} >
                                    <Button 
                                        title='Download'
                                        onPress={() => this.downloadReactBook()}
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{display:'flex', flexDirection:'row',marginTop:'10%'}}>
                                <View style={{display:'flex', flexDirection:'row', marginBottom: 0, justifyContent:'center', alignItem:'center'}}>
                                    <View style={{width:screenWidth*.38, height:screenHeight*.28, overflow:'hidden'}}>
                                        <TouchableOpacity onPress={() => {this.openReactBook()}}>
                                            <Image resizeMode={'cover'} style={{width: screenWidth*.37, height: screenHeight*.28, marginLeft: 10, marginBottom:0}} source={require( '../Images/rn1.jpg')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                               <View style={{alignContent:'center',paddingLeft:'10%',marginLeft:'10%'}}>
                                    <Text style={{ fontWeight:'bold', color:'black', fontSize: 16, textAlign:'center', width: '50%' }}>Name</Text>
                                    <Text key={item => item.toString()+6} style={{textAlign:'center', fontWeight:'600', color:'#eee', marginLeft:'2%',fontSize: 16, width: '50%'}}>
                                          Introduction to React 
                                    </Text>
                                    <Text style={{ fontWeight:'bold', color:'black', fontSize: 16, textAlign:'center', width: '50%' }}>Author</Text>
                                    <Text style={{textAlign:'center',  marginLeft:'2%',width: '50%', fontWeight:'600', color:'#eee', fontSize: 16}}>
                                        Chris Mayfield
                                    </Text>
                               </View>
                            </View>
                            <View style={{display: "flex", flexDirection:'row',}}>
                                <View style={{ width: '50%', marginTop: 20, marginRight: 10,width:'30%',marginLeft:'10%'}} >
                                    <Button 
                                        title='View'
                                        onPress={() => this.openReactBook()}
                                    />
                                </View>
                                <View style={{ width: '50%', marginTop: 20,width:'30%',marginLeft:'10%'}} >
                                    <Button 
                                        title='Download'
                                        onPress={() => this.downloadReactBook()}
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{display:'flex', flexDirection:'row',marginTop:'10%'}}>
                                <View style={{display:'flex', flexDirection:'row', marginBottom: 0, justifyContent:'center', alignItem:'center'}}>
                                    <View style={{width:screenWidth*.38, height:screenHeight*.28, overflow:'hidden'}}>
                                        <TouchableOpacity onPress={() => {this.openReactBook()}}>
                                            <Image resizeMode={'cover'} style={{width: screenWidth*.37, height: screenHeight*.28, marginLeft: 10, marginBottom:0}} source={require( '../Images/rn2.jpg')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                               <View style={{alignContent:'center',paddingLeft:'10%',marginLeft:'10%'}}>
                                    <Text style={{ fontWeight:'bold', color:'black', fontSize: 16, textAlign:'center', width: '50%' }}>Name</Text>
                                    <Text key={item => item.toString()+6} style={{textAlign:'center', fontWeight:'600', color:'#eee', marginLeft:'2%',fontSize: 16, width: '50%'}}>
                                          Introduction to React pro 16
                                    </Text>
                                    <Text style={{ fontWeight:'bold', color:'black', fontSize: 16, textAlign:'center', width: '50%' }}>Author</Text>
                                    <Text style={{textAlign:'center',  marginLeft:'2%',width: '50%', fontWeight:'600', color:'#eee', fontSize: 16}}>
                                        Allen B. Downey & Chris Mayfield
                                    </Text>
                               </View>
                            </View>
                            <View style={{display: "flex", flexDirection:'row',}}>
                                <View style={{ width: '50%', marginTop: 20, marginRight: 10,width:'30%',marginLeft:'10%'}} >
                                    <Button 
                                        title='View'
                                        onPress={() => this.openReactBook()}
                                    />
                                </View>
                                <View style={{ width: '50%', marginTop: 20,width:'30%',marginLeft:'10%'}} >
                                    <Button 
                                        title='Download'
                                        onPress={() => this.downloadReactBook()}
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{display:'flex', flexDirection:'row',marginTop:'10%'}}>
                                <View style={{display:'flex', flexDirection:'row', marginBottom: 0, justifyContent:'center', alignItem:'center'}}>
                                    <View style={{width:screenWidth*.38, height:screenHeight*.28, overflow:'hidden'}}>
                                        <TouchableOpacity onPress={() => {this.openReactBook()}}>
                                            <Image resizeMode={'cover'} style={{width: screenWidth*.37, height: screenHeight*.28, marginLeft: 10, marginBottom:0}} source={require( '../Images/rn3.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                               <View style={{alignContent:'center',paddingLeft:'10%',marginLeft:'10%'}}>
                                    <Text style={{ fontWeight:'bold', color:'black', fontSize: 16, textAlign:'center', width: '50%' }}>Name</Text>
                                    <Text key={item => item.toString()+6} style={{textAlign:'center', fontWeight:'600', color:'#eee', marginLeft:'2%',fontSize: 16, width: '50%'}}>
                                          Introduction to React Native
                                    </Text>
                                    <Text style={{ fontWeight:'bold', color:'black', fontSize: 16, textAlign:'center', width: '50%' }}>Author</Text>
                                    <Text style={{textAlign:'center',  marginLeft:'2%',width: '50%', fontWeight:'600', color:'#eee', fontSize: 16}}>
                                        Allen B. Downey & Chris Mayfield
                                    </Text>
                               </View>
                            </View>
                            <View style={{display: "flex", flexDirection:'row',}}>
                                <View style={{ width: '50%', marginTop: 20, marginRight: 10,width:'30%',marginLeft:'10%'}} >
                                    <Button 
                                        title='View'
                                        onPress={() => this.openReactBook()}
                                    />
                                </View >
                                <View style={{ width: '50%', marginTop: 20,width:'30%',marginLeft:'10%'}} >
                                    <Button 
                                        title='Download'
                                        onPress={() => this.downloadReactBook()}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{marginBottom:'10%'}}>
                            <View style={{display:'flex', flexDirection:'row',marginTop:'10%'}}>
                                <View style={{display:'flex', flexDirection:'row', marginBottom: 0, justifyContent:'center', alignItem:'center'}}>
                                    <View style={{width:screenWidth*.38, height:screenHeight*.28, overflow:'hidden'}}>
                                        <TouchableOpacity onPress={() => {this.openReactBook()}}>
                                            <Image resizeMode={'cover'} style={{width: screenWidth*.37, height: screenHeight*.28, marginLeft: 10, marginBottom:0}} source={require( '../Images/r5.jpg')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                               <View style={{alignContent:'center',paddingLeft:'10%',marginLeft:'10%'}}>
                                    <Text style={{ fontWeight:'bold', color:'black', fontSize: 16, textAlign:'center', width: '50%' }}>Name</Text>
                                    <Text key={item => item.toString()+6} style={{textAlign:'center', fontWeight:'600', color:'#eee', marginLeft:'2%',fontSize: 16, width: '50%'}}>
                                          Introduction to React Native
                                    </Text>
                                    <Text style={{ fontWeight:'bold', color:'black', fontSize: 16, textAlign:'center', width: '50%' }}>Author</Text>
                                    <Text style={{textAlign:'center',  marginLeft:'2%',width: '50%', fontWeight:'600', color:'#eee', fontSize: 16}}>
                                        Allen B. Downey contri 
                                    </Text>
                               </View>
                            </View>
                            <View style={{display: "flex", flexDirection:'row',}}>
                                <View style={{ width: '50%', marginTop: 20, marginRight: 10,width:'30%',marginLeft:'10%'}} >
                                    <Button 
                                        title='View'
                                        onPress={() => this.openReactBook()}
                                    />
                                </View>
                                <View style={{ width: '50%', marginTop: 20,width:'30%',marginLeft:'10%'}} >
                                    <Button 
                                        title='Download'
                                        onPress={() => this.downloadReactBook()}
                                    />
                                </View>
                            </View>
                        </View>


                       
                      
                        </ScrollView> 
                    </LinearGradient>
                </View>



            );
        }
        else if(this.state.loading===true){
            return(
                <View style={styles.container}>{console.log('Spinner')}<Spinner/></View>
            );
        }
        
    }
}


const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    ViewStyle: {
        backgroundColor: '#D6D6D6',
        display: 'flex',
        flexDirection: 'row',
        // jusifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 25,
        paddingLeft: 5,
        elevation: 2,
        position: 'relative',
        width:screenWidth*1,
        height: screenHeight*.08,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    TextStyle: {
        textAlign:'center',
        marginLeft: 10,
        fontSize: screenWidth*.07,
        fontWeight: 'bold',
        color: 'black',
         marginTop:20,
    },

box:
    {
        display:'flex',
        flexDirection:'row',
        marginBottom: 5,
        marginTop:'5%',
        backgroundColor: '#eee',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height:screenHeight*.15

    },
    Image:{
        width: screenWidth*.3, 
        marginTop:'-25%',
        height: screenHeight*.12,
        borderRadius:100/2, marginBottom:2,
        marginTop:'10%'

    },
    text:{
        textAlign:'left',
        marginLeft:'10%',
        height: screenHeight*.12,
        marginTop:'12%', 
        fontWeight:'800', 
        color:'black', 
        fontSize: 20
    }
};
 
export default ReactBook;