import React, { Component } from 'react';
import { View, Text,Dimensions, StatusBar, Platform, Image, Modal } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import ImageViewer from 'react-native-image-zoom-viewer';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class Picture extends Component {
    state = { 
        image:this.props.navigation.state.params.img,
        isModelVisible: true,
    }

    ShowModalFunction(visible) {
        this.setState({ isModelVisible: false });
      }

    render() { 
        console.log(this.state.image);
        const i = [{uri:this.state.image, props:{}},];
        return ( 
            <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, flex: 1 }}>
                <LinearGradient colors={['#48D1CC', '#eee']} style={{ width: screenWidth, height:screenHeight }}>
                <Image 
                    style={{width:screenWidth-10, height:screenHeight-40, marginLeft:5, marginTop:5}}
                    resizeMode={'contain'} 
                    source={{uri:this.state.image}}
                    
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
 
export default Picture;