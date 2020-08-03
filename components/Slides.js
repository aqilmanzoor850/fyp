import React from 'react';
import { View, Text, ScrollView, Dimensions, Image, Button, widthPercentage } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableHighlight } from 'react-native-gesture-handler';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class Slides extends React.Component{
    renderLastSlide(index){
        
        
        if(index === this.props.data.length - 3){
            return(
                <View style={{marginTop:20}}>
                    <Text style={{marginTop:60,color:'black',fontSize:20}}>Swipe up</Text>
                </View>
            );
        }

        if(index === this.props.data.length - 2){
            return(
                <View style={{marginTop:20,marginBottom:'10%'}}>
                    
                    <Text style={{marginTop:60,color:'black',fontSize:20}}>Swipe up</Text>
                </View>
            );
        }

        if(index === this.props.data.length - 1){
            return(
               
                    <TouchableHighlight  activeOpacity = { .9 } style={styles.buttonStyles}  onPress={this.props.onComplete}
                    >

                        <Text>Get Register</Text>
                    </TouchableHighlight>
                   
                  

                
               
            );
        }

        
    }
     
    renderSlides(){
        return( this.props.data.map((slide, index) => {
                return(
                    <View key={slide.text} style={[styles.slideStyle, {backgroundColor: slide.color}]}>
                        <Image source={{uri: slide.uri}} style={{width: SCREEN_WIDTH-100, height: 100%-SCREEN_HEIGHT+150}} />
                        <Text style={styles.slideText}>{slide.text}</Text>
                       
                        {this.renderLastSlide(index)}
                        {/* {this.renderButton()} */}
                    </View>
                );
             })
        );
    }
    render() {
        return(
            <ScrollView horizontal='true' pagingEnabled>
                {this.renderSlides()}
            </ScrollView>
        );
    }
}
const styles = {
    slideStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    slideText: {
        fontSize: 30,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'black',
        marginTop:'10%',
        position:'relative',
        fontStyle:'italic',
        fontWeight:'700'
    },
    buttonStyles: {
       
    marginTop:10,
    paddingTop:15,
    paddingLeft:70,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    width: SCREEN_WIDTH*.6,
    borderColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
    },
    welaStyle: {
        marginTop: 50
    }
}
export default Slides;