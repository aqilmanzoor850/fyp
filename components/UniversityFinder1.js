import React from 'react';
import {Text, View, Dimensions, Image, ScrollView, Animated, Linking} from 'react-native';
//import Card from './Card';
import {Card, Button, Icon} from 'react-native-elements';
import CardSection from './CardSection';
import UniversityHeader1 from './UniversityHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import Button from './Button';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const xOffset = new Animated.Value(0);

class UniversityFinder extends React.Component{
    constructor(props){
        super(props);
        this.mainScreenHandler = this.mainScreenHandler.bind(this);
        this.transitionAnimation = this.transitionAnimation.bind(this);
    }
    state = {
      data: this.props.navigation.state.params.data
    }
    mainScreenHandler(){
        this.props.mainScreenReturnHandler();
    }
    transitionAnimation(index){
        return {
          transform: [
            { perspective: 800 },
            {
              scale: xOffset.interpolate({
                inputRange: [
                  (index - 1) * SCREEN_WIDTH,
                  index * SCREEN_WIDTH,
                  (index + 1) * SCREEN_WIDTH
                ],
                outputRange: [0.25, 1, 0.25]
              })
            },
            {
              rotateX: xOffset.interpolate({
                inputRange: [
                  (index - 1) * SCREEN_WIDTH,
                  index * SCREEN_WIDTH,
                  (index + 1) * SCREEN_WIDTH
                ],
                outputRange: ["45deg", "0deg", "45deg"]
              })
            },
            {
              rotateY: xOffset.interpolate({
                inputRange: [
                  (index - 1) * SCREEN_WIDTH,
                  index * SCREEN_WIDTH,
                  (index + 1) * SCREEN_WIDTH
                ],
                outputRange: ["-45deg", "0deg", "45deg"]
              })
            }
          ]
        };
    };
    renderSlides(){
        return( this.state.data.map((slide, index) => {
                return(
                  <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
                  <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
                      {/* <CardSection style={{backgroundColor: 'red'}}>
                          <Text style={styles.titleText}>{slide.name}</Text>
                      </CardSection> */}
                      
                      <UniversityHeader1 headerText={slide.name} titleImage={slide.image} />
                      
                      {/*<View style={{display: 'flex', justifyContent:'center',marginTop:'10%', alignItems:'center'}}>
                              <Text style={{fontWeight:'900', fontSize:40, color:'black', fontStyle:'normal', borderBottomColor:'#eee', borderBottomWidth: 2, marginBottom: 20,marginLeft:'10%'}}>
                                  Home
                              </Text>
                    </View>*/}


                      <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                          <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                      </View>

                      <View style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.535,marginRight:'0%'}}>
                        <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:0}}>
                          {slide.text1}
                        </Text>

                        <View style={{width:SCREEN_WIDTH*.89, height:SCREEN_HEIGHT*.20}}>
                          <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>{slide.text2}</Text>
                          <Text  style={{fontSize:17,marginLeft:"-10%",marginRight:"0%",textAlign:'left',paddingLeft:"20%",paddingRight:"15%"}}>{slide.text3}</Text>
                        </View>

                        <View style={{width:SCREEN_WIDTH*.89, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                          <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>{slide.text4}</Text>   
                          <Text  style={{fontSize:20,textAlign:'left',paddingLeft:10}}>{slide.text5}</Text>
                        </View>
                        
                        <View style={{width:SCREEN_WIDTH*.89, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                          <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >{slide.text6} </Text>   
                          <Text  style={{fontSize:20,textAlign:'left',paddingLeft:0}} >{slide.text7} </Text>
                        </View>

                        <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,  marginTop: 8}}>    
                          <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >{slide.text8}</Text>
                          <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                            <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"{slide.text9}" </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                  </Animated.View>
              </View>
                );
             })
        );
    }
    render(){
        return(
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: xOffset } } }], { useNativeDriver: true })}
                horizontal
                pagingEnabled
                style={styles.scrollView}
            >
                {this.renderSlides()}
            </Animated.ScrollView>
        );
    }
}
const styles = {
    slideStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    titleText: {
        fontSize: 30,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'black',
        marginBottom: 30,
        fontWeight: 'bold',
    },
    buttonStyle: {
        backgroundColor: '#0288D1',  
    },
    buttonStyles: {
       fontSize: 30,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'white',
        marginBottom: 30,
    },
    screen: {
        height: 600,
        //justifyContent: "center",
        //alignItems: "center",
        borderRadius: 25,
        backgroundColor: "white",
        flexDirection: 'column',
      },
      scrollPage: {
        width: SCREEN_WIDTH,
        padding: 20
      },
      image: {
          height: 200,
          flex: 1,
          alignItems: "center"
      },
}
export default UniversityFinder;