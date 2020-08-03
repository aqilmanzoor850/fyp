import React from 'react';
import { View } from 'react-native';
import VideoModules from '../components/VideoModules';
class VideoScreen extends React.Component{
    constructor(props){
        super(props);
        this.reactTutorialHandler = this.reactTutorialHandler.bind(this);
        this.cTutorialHandler = this.cTutorialHandler.bind(this);
    }
    reactTutorialHandler(){
        this.props.navigation.navigate('react')
    }
    cTutorialHandler(){
        this.props.navigation.navigate('c');
    }
    javaModHandler = () => {
        this.props.navigation.navigate('java');
    }
    rModHandler = () => {
        this.props.navigation.navigate('r');
    }
    swiftModHandler = () => {
        this.props.navigation.navigate('swift');
    }
    softwareEngineeringModHandler = () => {
        this.props.navigation.navigate('se');
    }
    pythonModHandler = () => {
        this.props.navigation.navigate('python');
    }
    operatingSystemModHandler = () => {
        this.props.navigation.navigate('os');
    }
    dataStructureModHandler = () => {
        this.props.navigation.navigate('ds');
    }
    webModHandler = () => {
        this.props.navigation.navigate('web');
    }
    phpModHandler = () => {
        this.props.navigation.navigate('php');
    }
    render(){
        return(
            <View>
                 <VideoModules
                 reactTutorialHandler={this.reactTutorialHandler}
                 cTutorialHandler={this.cTutorialHandler}
                 javaModHandler={this.javaModHandler}
                 rModHandler={this.rModHandler}
                 swiftModHandler={this.swiftModHandler}
                 softwareEngineeringModHandler={this.softwareEngineeringModHandler}
                 pythonModHandler={this.pythonModHandler}
                 operatingSystemModHandler={this.operatingSystemModHandler}
                 dataStructureModHandler={this.dataStructureModHandler}
                 webModHandler={this.webModHandler}
                 phpModHandler={this.phpModHandler}
                 />
            </View>
        );
    }
}
export default VideoScreen;