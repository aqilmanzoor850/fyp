import React from 'react';
import {TouchableWithoutFeedback} from 'react-native'
import WebView from 'react-native-webview';
import {ScreenOrientation} from 'expo'

class Video extends React.Component{
    // state={
    //     showWebView: false
    //   }
    constructor(props){
        super(props);
        this.state={
            showWebView: false,
        }
        this.webc = this.webc.bind(this);
        this.handleOrientation = this.handleOrientation.bind(this);
    }

    componentWillMount() {
        console.log('pen yawa lo')
        this.setState({showWebView: true})
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    //     this.state={
    //            showWebView: false,
    //         }
    //     this.webc();
    }

    async componentWillUnmount() {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT
        );
    }

    webc(){
        this.setState({showWebView: true})
    }

    handleOrientation(){
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE)
    }

    render(){
        console.log('esi tesi krwa')
        if(this.state.showWebView != true)
        this.webc();
        return(
            <TouchableWithoutFeedback onPress={this.handleOrientation}>
            <WebView
            mediaPlaybackRequiresUserAction={true}
            //allowsFullscreenVideo={true}
            javaScriptEnabled={true}
            originWhitelist={['*']}
            source={{ uri: 'https://www.youtube.com/embed/43IbFDSVdB0' }}
            style={{flex: 1}}
            //source={{ uri: 'https://www.youtube.com/watch?v=Ke90Tje7VS0' }} 
        />
        </TouchableWithoutFeedback>
        )
    }
}
export default Video;