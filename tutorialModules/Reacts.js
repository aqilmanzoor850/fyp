import React from 'react';
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback, BackHandler } from 'react-native';
import firebase from 'firebase';
import WebView from 'react-native-webview'
import {ScreenOrientation} from 'expo';

import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Spinner from '../components/Spinner';

const screenWidth = Math.round(Dimensions.get('window').width);
const keyGenerator = () => '_' + Math.random().toString(36).substr(2, 9)

const items = [];
var loading = "yes";
var done = null

class Reacts extends React.Component{
    state={
        showWebView: false,
        vlink: null,
        random: null
    }

     constructor(){
        super();
        this.Item = this.Item.bind(this);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     }

    componentDidMount(){

        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
       
        if(done===null){
            loading = "yes";
            console.log('is main kitni dafa aya a')
            const res = firebase.database().ref('/Video_Lectures/React/')
            .on('value', snapshot => {
                snapshot.forEach((child)=>{
                    
                    items.push({
                        title:child.val().title,
                        link: child.val().links
                    });
                });
                items.map((item)=>console.log(item.link))
                loading = null;
                done='asdasda';
                this.setState({
                    random: "yes"
                })
            });
        }
    }
    async componentWillUnmount() {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT
        );
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
      }

    Item( title, link ) {
       // console.log(link);
        //linkk = link
        return (
          <Card>
            <CardSection>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>this.setState({showWebView:true,vlink:link})}>
                    <Image style={{ width: screenWidth-300, height:60, justifyContent: 'center', alignItems: 'center'}} source={require("../Images/video.png")} />
                    <Text style={{justifyContent:'center', alignContent:'center', marginRight: 60,marginLeft: 10}}>{title}</Text>
                </TouchableOpacity>
            </CardSection>
          </Card>
        );
    }  


    handleOrientation(){
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE)
    }

    async handleBackButtonClick() {
        if(this.state.showWebView===false){
           this.props.navigation.navigate('video')
        }
        this.setState({showWebView:false})
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT
          );
        return true;
    }
    
    render(){
        if(this.state.showWebView===true){
            done='asda'
            return(
            <TouchableWithoutFeedback onPress={this.handleOrientation}>
                <WebView
                mediaPlaybackRequiresUserAction={true}
                javaScriptEnabled={true}
                originWhitelist={['*']}
                source={{ uri: this.state.vlink }}
                style={{flex: 1}}
            />
            </TouchableWithoutFeedback>
            )
            }
        else if(loading === null){
            //console.log(items);
            return(
            <View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => this.Item(item.title,item.link)}
                    keyExtractor={(item, index) => String(index)}
                />
                {/* {console.log(items.link)} */}
            </View>
            
            );
        }
        else if(loading==="yes"){
            console.log('ya kion ni chal raha')
            return(
                <View style={styles.container}><Spinner /></View>
            );
        }
    }
}
const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
  
export default Reacts;