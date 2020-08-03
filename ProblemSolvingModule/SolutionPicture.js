import React, { Component } from 'react';
import { View, Text,Dimensions, StatusBar, Platform, Image, Modal } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import ImageViewer from 'react-native-image-zoom-viewer';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class SolutionPicture extends Component {
    state = { 
        solUp: this.props.navigation.state.params.img,
        //solCap: this.props.navigation.state.params.solCap,
        isModelVisible: true,
    }

    ShowModalFunction(visible) {
        this.setState({ isModelVisible: false });
      }

    render() { 
        console.log(this.state.solUp);
        //const a = (this.state.solUp).toString();
        if(this.state.solUp!==null){
            console.log('----------------------------------------------------------------');
            console.log(this.state.solUp);
            return ( 
                <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, flex: 1 }}>
                    <LinearGradient colors={['#48D1CC', '#eee']} style={{ width: screenWidth, height:screenHeight }}>
                    <Image 
                        style={{width:screenWidth-10, height:screenHeight-40, marginLeft:5, marginTop:5}}
                        resizeMode={'contain'} 
                        source={{uri:this.state.solUp}}
                    />
                    {/* <Modal
              visible={this.state.isModelVisible}
              transparent={false}
              onRequestClose={() => this.ShowModalFunction()}>
                    <ImageViewer 
                        imageUrls={i}
                    />
                    </Modal> */}
                    </LinearGradient>
                </View>
             );
        }
        else if(this.state.solCap!==null){
            const b = (this.state.solCap).toString();
            return ( 
                <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, flex: 1 }}>
                    <LinearGradient colors={['#55c57a', '#28b485']} style={{ width: screenWidth, height:screenHeight }}>
                    <Image 
                        style={{width:screenWidth-10, height:screenHeight-40, marginLeft:5, marginTop:5}}
                        resizeMode={'contain'} 
                        source={{uri:b}}
                        
                    />
                    {/* <Modal
              visible={this.state.isModelVisible}
              transparent={false}
              onRequestClose={() => this.ShowModalFunction()}>
                    <ImageViewer 
                        imageUrls={i}
                    />
                    </Modal> */}
                    </LinearGradient>
                </View>
             );
        }
    }
}

 
export default SolutionPicture;