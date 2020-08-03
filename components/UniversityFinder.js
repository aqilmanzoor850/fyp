import React from 'react';
import {Text, View, Dimensions, Image, ScrollView, Animated, Linking, Platform, StatusBar} from 'react-native';
//import Card from './Card';
import {Card, Button, Icon} from 'react-native-elements';
import CardSection from './CardSection';
import UniversityHeader from './UniversityHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
//import Button from './Button';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const xOffset = new Animated.Value(0);

class UniversityFinder1 extends React.Component{
  constructor(props){
      super(props);
      this.mainScreenHandler = this.mainScreenHandler.bind(this);
      this.transitionAnimation = this.transitionAnimation.bind(this);
  }
  state = {
    data: this.props.navigation.state.params.data,
    location: this.props.navigation.state.params.location,
    fee: this.props.navigation.state.params.fee,
    status: this.props.navigation.state.params.status,
    hostal: this.props.navigation.state.params.hostal,
    var1: this.props.navigation.state.params.var1,
    var2: this.props.navigation.state.params.var2,
    var3: this.props.navigation.state.params.var3,
    var4: this.props.navigation.state.params.var4
  }
  mainScreenHandler(){
      this.props.mainScreenReturnHandler();
  }
  transitionAnimation(index){
      return {
        transform: [
          { perspective: 80 },
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
    const br = `\n`;
//  this.state.data.map(i=>i.locations).map(i=>console.log(i.location))
    if(this.state.var1 === true && this.state.var2 === true && this.state.var3 === true && this.state.var4 === true){
      return( this.state.data.filter((l) => l.location===this.state.location).filter((f) => f.fee <= this.state.fee).filter((s)=>s.status === this.state.status).filter((h)=>h.Hostal === this.state.hostal).map((slide, index) => {
          return(
         
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
            <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
            
                <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
             
                <ScrollView alwaysBounce>
                <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                    <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                </View>



                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                  <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                     
                  
                  <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                    
                    textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                   Swipe up for more detail</Text>
                  </Text>


                  </View>



                

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                   
                   </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                    
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                    
                  </View>

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                 
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                 
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                  
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                  
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                     
                     
                   
                     </View>



                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                 
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                     
                     
                     </View>
                  
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                     
                     
                     </View>


                     
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                  
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                  
                  </View>


                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                      <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                  
                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                

                                <Image
                                
                                  style={{width: SCREEN_WIDTH*.40, 
                                  height: SCREEN_HEIGHT*.07, 
                                  marginLeft:115,marginTop: 4}} 
                                  
                                  source={require("../Images/arrow3.png")} />
                          


                  </View>
            </Animated.View>
            
        </View>
        
        
   
          );
        })
      );
    }else if(this.state.var1===true && this.state.var2===true && this.state.var3===true && this.state.var4===false){
        return( this.state.data.filter((l) => l.location===this.state.location).filter((f) => f.fee <= this.state.fee).filter((s)=>s.status === this.state.status).map((slide, index) => {
          return(
         
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
            <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
            
                <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
             
                <ScrollView alwaysBounce>
                <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                    <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                </View>



                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                  <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                     
                  
                  <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                    
                    textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                   Swipe up for more detail</Text>
                  </Text>


                  </View>



                

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                   
                   </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                    
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                    
                  </View>

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                 
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                 
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                  
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                  
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                     
                     
                   
                     </View>



                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                 
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                     
                     
                     </View>
                  
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                     
                     
                     </View>


                     
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                  
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                  
                  </View>


                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                      <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                  
                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                

                                <Image
                                
                                  style={{width: SCREEN_WIDTH*.40, 
                                  height: SCREEN_HEIGHT*.07, 
                                  marginLeft:115,marginTop: 4}} 
                                  
                                  source={require("../Images/arrow3.png")} />
                          


                  </View>
            </Animated.View>
            
        </View>
        
        
   
          );
        })
      );
    }else if(this.state.var1===true && this.state.var2===true && this.state.var4===true && this.state.var3===false) {
        return( this.state.data.filter((l) => l.location===this.state.location).filter((f) => f.fee <= this.state.fee).filter((h)=>h.Hostal === this.state.hostal).map((slide, index) => {
          return(
          
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
            <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
            
                <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
             
                <ScrollView alwaysBounce>
                <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                    <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                </View>



                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                  <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                     
                  
                  <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                    
                    textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                   Swipe up for more detail</Text>
                  </Text>


                  </View>



                

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                   
                   </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                    
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                    
                  </View>

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                 
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                 
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                  
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                  
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                     
                     
                   
                     </View>



                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                 
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                     
                     
                     </View>
                  
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                     
                     
                     </View>


                     
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                  
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                  
                  </View>


                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                      <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                  
                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                

                                <Image
                                
                                  style={{width: SCREEN_WIDTH*.40, 
                                  height: SCREEN_HEIGHT*.07, 
                                  marginLeft:115,marginTop: 4}} 
                                  
                                  source={require("../Images/arrow3.png")} />
                          


                  </View>
            </Animated.View>
            
        </View>
        
        
   
          );
        })
      );
    }else if(this.state.var1===true && this.state.var3===true && this.state.var4===true && this.state.var2===false){
        return( this.state.data.filter((l) => l.location===this.state.location).filter((s)=>s.status === this.state.status).filter((h)=>h.Hostal === this.state.hostal).map((slide, index) => {
          return(
            
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
            <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
            
                <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
             
                <ScrollView alwaysBounce>
                <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                    <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                </View>



                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                  <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                     
                  
                  <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                    
                    textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                   Swipe up for more detail</Text>
                  </Text>


                  </View>



                

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                   
                   </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                    
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                    
                  </View>

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                 
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                 
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                  
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                  
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                     
                     
                   
                     </View>



                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                 
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                     
                     
                     </View>
                  
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                     
                     
                     </View>


                     
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                  
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                  
                  </View>


                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                      <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                  
                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                

                                <Image
                                
                                  style={{width: SCREEN_WIDTH*.40, 
                                  height: SCREEN_HEIGHT*.07, 
                                  marginLeft:115,marginTop: 4}} 
                                  
                                  source={require("../Images/arrow3.png")} />
                          


                  </View>
            </Animated.View>
            
        </View>
        
        
   
          );
        })
      );
    }else if(this.state.var2===true && this.state.var3===true && this.state.var4===true && this.state.var1===false) {
        return( this.state.data.filter((f) => f.fee <= this.state.fee).filter((s)=>s.status === this.state.status).filter((h)=>h.Hostal === this.state.hostal).map((slide, index) => {
          return(
          
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
            <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
            
                <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
             
                <ScrollView alwaysBounce>
                <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                    <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                </View>



                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                  <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                     
                  
                  <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                    
                    textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                   Swipe up for more detail</Text>
                  </Text>


                  </View>



                

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                   
                   </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                    
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                    
                  </View>

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                 
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                 
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                  
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                  
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                     
                     
                   
                     </View>



                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                 
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                     
                     
                     </View>
                  
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                     
                     
                     </View>


                     
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                  
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                  
                  </View>


                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                      <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                  
                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                

                                <Image
                                
                                  style={{width: SCREEN_WIDTH*.40, 
                                  height: SCREEN_HEIGHT*.07, 
                                  marginLeft:115,marginTop: 4}} 
                                  
                                  source={require("../Images/arrow3.png")} />
                          


                  </View>
            </Animated.View>
            
        </View>
        
        
   
          );
        })
      );
    }else if(this.state.var1===true && this.state.var2===true && this.state.var3===false && this.state.var4 === false) {
        return( this.state.data.filter((l) => l.location===this.state.location).filter((f) => f.fee <= this.state.fee).map((slide, index) => {
          return(
          
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
            <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
            
                <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
             
                <ScrollView alwaysBounce>
                <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                    <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                </View>



                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                  <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                     
                  
                  <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                    
                    textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                   Swipe up for more detail</Text>
                  </Text>


                  </View>



                

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                   
                   </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                    
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                    
                  </View>

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                 
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                 
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                  
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                  
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                     
                     
                   
                     </View>



                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                 
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                     
                     
                     </View>
                  
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                     
                     
                     </View>


                     
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                  
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                  
                  </View>


                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                      <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                  
                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                

                                <Image
                                
                                  style={{width: SCREEN_WIDTH*.40, 
                                  height: SCREEN_HEIGHT*.07, 
                                  marginLeft:115,marginTop: 4}} 
                                  
                                  source={require("../Images/arrow3.png")} />
                          


                  </View>
            </Animated.View>
            
        </View>
        
        
   
          );
        })
      );
    }else if(this.state.var1===true && this.state.var3===true && this.state.var2===false && this.state.var4 === false){
      return( this.state.data.filter((l) => l.location===this.state.location).filter((s)=>s.status === this.state.status).map((slide, index) => {
          return(
           
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
            <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
            
                <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
             
                <ScrollView alwaysBounce>
                <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                    <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                </View>



                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                  <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                     
                  
                  <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                    
                    textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                   Swipe up for more detail</Text>
                  </Text>


                  </View>



                

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                   
                   </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                    
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                    
                  </View>

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                 
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                 
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                  
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                  
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                     
                     
                   
                     </View>



                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                 
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                     
                     
                     </View>
                  
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                     
                     
                     </View>


                     
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                  
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                  
                  </View>


                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                      <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                  
                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                

                                <Image
                                
                                  style={{width: SCREEN_WIDTH*.40, 
                                  height: SCREEN_HEIGHT*.07, 
                                  marginLeft:115,marginTop: 4}} 
                                  
                                  source={require("../Images/arrow3.png")} />
                          


                  </View>
            </Animated.View>
            
        </View>
        
        
   
          );
        })
      );
    }else if(this.state.var1===true && this.state.var4===true && this.state.var2===false && this.state.var3==false) {
        return( this.state.data.filter((l) => l.location===this.state.location).filter((h)=>h.Hostal === this.state.hostal).map((slide, index) => {
          return(
           
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
            <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
            
                <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
             
                <ScrollView alwaysBounce>
                <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                    <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                </View>



                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                  <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                     
                  
                  <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                    
                    textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                   Swipe up for more detail</Text>
                  </Text>


                  </View>



                

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                   
                   </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                    
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                    
                  </View>

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                 
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                 
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                  
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                  
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                     
                     
                   
                     </View>



                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                 
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                     
                     
                     </View>
                  
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                     
                     
                     </View>


                     
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                  
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                  
                  </View>


                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                      <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                  
                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                

                                <Image
                                
                                  style={{width: SCREEN_WIDTH*.40, 
                                  height: SCREEN_HEIGHT*.07, 
                                  marginLeft:115,marginTop: 4}} 
                                  
                                  source={require("../Images/arrow3.png")} />
                          


                  </View>
            </Animated.View>
            
        </View>
        
        
   
          );
        })
      );
    }else if(this.state.var2===true && this.state.var3===true && this.state.var1===false && this.state.var4 === false){
        return( this.state.data.filter((f) => f.fee <= this.state.fee).filter((s)=>s.status === this.state.status).map((slide, index) => {
          return(
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
                <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
                
                    <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
                 
                    <ScrollView alwaysBounce>
                    <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                        <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                    </View>



                    <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                      <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                         
                      
                      <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                        
                        textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                       Swipe up for more detail</Text>
                      </Text>


                      </View>



                    

                      <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                        <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                        <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                       
                       </View>


                      <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                        <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                        
                        <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                        
                      </View>

                      <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                       
                      <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                     
                      <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                     
                      </View>



                      <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                       
                      <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                      
                      <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                      
                      </View>



                      <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                        <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                        <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                         
                         
                       
                         </View>



                         <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     
                         
                        <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                               
                        <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                         
                         
                         </View>
                      
                      <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                        <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                         
                        <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                         
                         
                         </View>


                         
                      <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                        <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                      
                        <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                      
                      </View>


                         <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                         <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                      </View>


                      <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                         <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                      </View>


                      <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                        <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                        <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                          <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                        </TouchableOpacity>
                      </View>
                      </ScrollView>
                      
                    <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                    

                                    <Image
                                    
                                      style={{width: SCREEN_WIDTH*.40, 
                                      height: SCREEN_HEIGHT*.07, 
                                      marginLeft:115,marginTop: 4}} 
                                      
                                      source={require("../Images/arrow3.png")} />
                              


                      </View>
                </Animated.View>
                
            </View>
            
            
       
          );
        })
      );
    }else if(this.state.var2===true && this.state.var4===true && this.state.var1===false && this.state.var3===false) {
        return( this.state.data.filter((f) => f.fee <= this.state.fee).filter((h)=>h.Hostal === this.state.hostal).map((slide, index) => {
          return(
          
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
            <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
            
                <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
             
                <ScrollView alwaysBounce>
                <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                    <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                </View>



                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                  <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                     
                  
                  <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                    
                    textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                   Swipe up for more detail</Text>
                  </Text>


                  </View>



                

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                   
                   </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                    
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                    
                  </View>

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                 
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                 
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                  
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                  
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                     
                     
                   
                     </View>



                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                 
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                     
                     
                     </View>
                  
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                     
                     
                     </View>


                     
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                  
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                  
                  </View>


                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                      <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                  
                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                

                                <Image
                                
                                  style={{width: SCREEN_WIDTH*.40, 
                                  height: SCREEN_HEIGHT*.07, 
                                  marginLeft:115,marginTop: 4}} 
                                  
                                  source={require("../Images/arrow3.png")} />
                          


                  </View>
            </Animated.View>
            
        </View>
        
        
   
          );
        })
      );
    }else if(this.state.var3===true &&  this.state.var4===true && this.state.var1===false && this.state.var2===false) {
        return( this.state.data.filter((s)=>s.status === this.state.status).filter((h)=>h.Hostal === this.state.hostal).map((slide, index) => {
          return(
           
            <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
            <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
            
                <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
             
                <ScrollView alwaysBounce>
                <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                    <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                </View>



                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                  <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                     
                  
                  <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                    
                    textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                   Swipe up for more detail</Text>
                  </Text>


                  </View>



                

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                   
                   </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                    
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                    
                  </View>

                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                 
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                 
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                   
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                  
                  <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                  
                  </View>



                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                     
                     
                   
                     </View>



                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                 
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                           
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                     
                     
                     </View>
                  
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                     
                    <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                     
                     
                     </View>


                     
                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                  
                    <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                  
                  </View>


                     <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                     <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                  </View>


                  <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                    <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                      <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                  
                <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                

                                <Image
                                
                                  style={{width: SCREEN_WIDTH*.40, 
                                  height: SCREEN_HEIGHT*.07, 
                                  marginLeft:115,marginTop: 4}} 
                                  
                                  source={require("../Images/arrow3.png")} />
                          


                  </View>
            </Animated.View>
            
        </View>
        
        
   
          );
        })
      );
    }else if(this.state.var1 === true && this.state.var2 === false && this.state.var3 === false && this.state.var4 === false) {
      console.log(this.state.data.filter((l)=>l.location===this.state.location))    
      return( this.state.data.filter((l)=>l.location===this.state.location).map((slide, index) => {
            return(
             
                <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
                    <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
                    
                        <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
                     
                        <ScrollView alwaysBounce>
                        <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                            <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                        </View>



                        <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                          <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                             
                          
                          <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                            
                            textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                           Swipe up for more detail</Text>
                          </Text>


                          </View>



                        

                          <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                            <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                            <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                           
                           </View>


                          <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                            <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                            
                            <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                            
                          </View>

                          <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                           
                          <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                         
                          <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                         
                          </View>



                          <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                           
                          <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                          
                          <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                          
                          </View>



                          <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                            <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                            <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                             
                             
                           
                             </View>



                             <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                         
                             
                            <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                                   
                            <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                             
                             
                             </View>
                          
                          <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                            <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                             
                            <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                             
                             
                             </View>


                             
                          <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                            <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                          
                            <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                          
                          </View>


                             <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                             <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                          </View>


                          <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                             <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                          </View>


                          <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                            <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                            <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                              <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                            </TouchableOpacity>
                          </View>
                          </ScrollView>
                          
                        <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                        

                                        <Image
                                        
                                          style={{width: SCREEN_WIDTH*.40, 
                                          height: SCREEN_HEIGHT*.07, 
                                          marginLeft:115,marginTop: 4}} 
                                          
                                          source={require("../Images/arrow3.png")} />
                                  


                          </View>
                    </Animated.View>
                    
                </View>
                
                
            );
        })
      );
    }else if(this.state.var2 === true && this.state.var1 === false && this.state.var3 === false && this.state.var4 === false){
          return( this.state.data.filter((l)=>l.fee<=this.state.fee).map((slide, index) => {
            return(
              <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
                  <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
                  
                      <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
                   
                      <ScrollView alwaysBounce>
                      <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                          <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                      </View>



                      <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                        <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                           
                        
                        <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                          
                          textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                         Swipe up for more detail</Text>
                        </Text>


                        </View>



                      

                        <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                          <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                          <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                         
                         </View>


                        <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                          <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                          
                          <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                          
                        </View>

                        <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                         
                        <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                       
                        <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                       
                        </View>



                        <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                         
                        <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                        
                        <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                        
                        </View>



                        <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                          <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                          <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                           
                           
                         
                           </View>



                           <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                       
                           
                          <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                                 
                          <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                           
                           
                           </View>
                        
                        <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                          <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                           
                          <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                           
                           
                           </View>


                           
                        <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                          <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                        
                          <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                        
                        </View>


                           <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                           <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                        </View>


                        <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                           <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                        </View>


                        <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                          <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                          <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                            <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                          </TouchableOpacity>
                        </View>
                        </ScrollView>
                        
                      <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                      

                                      <Image
                                      
                                        style={{width: SCREEN_WIDTH*.40, 
                                        height: SCREEN_HEIGHT*.07, 
                                        marginLeft:115,marginTop: 4}} 
                                        
                                        source={require("../Images/arrow3.png")} />
                                


                        </View>
                  </Animated.View>
                  
              </View>
              
              
         
            );
        })
      );
    }else if(this.state.var3 === true && this.state.var1 === false && this.state.var2===false && this.state.var4 === false){
          return( this.state.data.filter((l)=>l.status===this.state.status).map((slide, index) => {
            return(
              
               
              <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
              <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
              
                  <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
               
                  <ScrollView alwaysBounce>
                  <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                      <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                  </View>



                  <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                    <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                       
                    
                    <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                      
                      textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                     Swipe up for more detail</Text>
                    </Text>


                    </View>



                  

                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                      <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                      <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                     
                     </View>


                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                      <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                      
                      <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                      
                    </View>

                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                     
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                   
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                   
                    </View>



                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                     
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                    
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                    
                    </View>



                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                       
                       
                     
                       </View>



                       <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                   
                       
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                             
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                       
                       
                       </View>
                    
                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                       
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                       
                       
                       </View>


                       
                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                      <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                    
                      <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                    
                    </View>


                       <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                       <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                    </View>


                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                       <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                    </View>


                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                      <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                      <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                        <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                      </TouchableOpacity>
                    </View>
                    </ScrollView>
                    
                  <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                  

                                  <Image
                                  
                                    style={{width: SCREEN_WIDTH*.40, 
                                    height: SCREEN_HEIGHT*.07, 
                                    marginLeft:115,marginTop: 4}} 
                                    
                                    source={require("../Images/arrow3.png")} />
                            


                    </View>
              </Animated.View>
              
          </View>
          
          
     
            );
        })
      );
    }else if(this.state.var4 === true && this.state.var1 === false && this.state.var2 === false && this.state.var3 === false){
          return( this.state.data.filter((l)=>l.Hostal===this.state.hostal).map((slide, index) => {
            return(
               
              <View key={slide.index} style={[styles.scrollPage, {backgroundColor: '#48D1CC'}]}>
              <Animated.View style={[styles.screen, this.transitionAnimation(index)]}>
              
                  <UniversityHeader campus={slide.location} headerText={slide.name} campus={slide.location} titleImage={slide.image} />
               
                  <ScrollView alwaysBounce>
                  <View  style={{width:SCREEN_WIDTH-40, height:SCREEN_HEIGHT*.25, display:'flex', justifyContent:'center'}}>
                      <Image style={{width: SCREEN_WIDTH*.7, height: SCREEN_HEIGHT*.25, alignSelf:'center'}} resizeMode="contain" source={slide.image}/>
                  </View>



                  <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.05,backgroundColor:'#00BCD4'}}>
                    <Text style={{fontSize:SCREEN_WIDTH*.08,textAlign:'left',marginLeft:65,fontWeight:"bold"}}>
                       
                    
                    <Text style={{fontSize:20,width:SCREEN_WIDTH*15,paddingTop:'5%',
                      
                      textAlign:'center',marginLeft:'1%',fontWeight:"normal"}}>
                     Swipe up for more detail</Text>
                    </Text>


                    </View>



                  

                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06, backgroundColor:'#eee'}}>
                      <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>No. of Campuses: </Text>
                      <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'30%'}}>{slide.Campuses}</Text>
                     
                     </View>


                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05,display:'flex', flexDirection:'row', marginTop:8}}>   
                      <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"bold"}}>No. of Students: </Text>   
                      
                      <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',paddingLeft:10,fontWeight:"normal"}}>{slide.NoOfStudents}</Text>   
                      
                    </View>

                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8, backgroundColor:'#eee'}}>   
                     
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Ranking:</Text>
                   
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.ranking}</Text>
                   
                    </View>



                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop:8}}>   
                     
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Fee:</Text>
                    
                    <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10}}>{slide.fee}</Text>
                    
                    </View>



                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Number of Programs Offered:

</Text>           
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.NoOfPrograms}</Text>   
                       
                       
                     
                       </View>



                       <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8}}>   
                   
                       
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}}>Best programs offered: </Text>   
                             
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.BestPrograms} </Text>   
                       
                       
                       </View>
                    
                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, display:'flex', flexDirection:'row', marginTop: 8,  backgroundColor:'#eee'}}>   
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"bold",paddingLeft:10}} >Status:</Text>   
                       
                      <Text  style={{fontSize:20,marginLeft:'3%',textAlign:'left',fontWeight:"normal",paddingLeft:10}}>{slide.status} </Text>   
                       
                       
                       </View>


                       
                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.06}}>
                      <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Transportation Availibility:</Text>
                    
                      <Text  style={{fontSize: 20,textAlign:'right',fontWeight:"normal",paddingLeft:10,marginTop:'-8%',marginRight:'5%'}}>{slide.Transportation}</Text>
                    
                    </View>


                       <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, backgroundColor:'#eee',display:'flex', flexDirection:'row', marginTop: 8}}>   
                       <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}}>Detail: </Text>
                    </View>


                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.50, display:'flex', flexDirection:'row', marginTop: 8}}>   
                       <Text  style={{fontSize: 20,textAlign:'left',marginLeft:'3%',fontWeight:"normal",paddingLeft:10,marginTop:'5%',marginBottom:'5%'}}> {slide.detail} </Text>
                    </View>


                    <View style={{width:SCREEN_WIDTH*.99, height:SCREEN_HEIGHT*.05, marginBottom:'10%',backgroundColor:'#eee', marginTop: 8}}> 
                      <Text  style={{fontSize:20,textAlign:'left',marginLeft:'3%',fontWeight:"bold",paddingLeft:10}} >Requirements: {slide.requirement}</Text>
                      <TouchableOpacity onPress={()=>{Linking.openURL('https://'+slide.text9+'/')}}>
                        <Text  style={{fontSize:20,textAlign:'center',marginLeft:-13 ,paddingLeft:0, marginTop:10, color: 'blue'}} >"Entry Test: {slide.entryTest}" </Text>
                      </TouchableOpacity>
                    </View>
                    </ScrollView>
                    
                  <View style={{width:SCREEN_WIDTH*25, height:SCREEN_HEIGHT*.08,backgroundColor:'#eeeee'}}>
                  

                                  <Image
                                  
                                    style={{width: SCREEN_WIDTH*.40, 
                                    height: SCREEN_HEIGHT*.07, 
                                    marginLeft:115,marginTop: 4}} 
                                    
                                    source={require("../Images/arrow3.png")} />
                            


                    </View>
              </Animated.View>
              
          </View>
          
          
     
            );
        })
      );
    }else {
      <View style={{display: 'flex', justifyContent: 'center', alignContent:'center'}}>
        <Text>No University Found</Text>
      </View>
    }
  }
  render(){
      return(
        // <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
        //   <LinearGradient colors={['#48d1cf','#eee', '#48d1cf']} style={{ width: SCREEN_WIDTH, height:SCREEN_HEIGHT }} >
              <Animated.ScrollView
                  scrollEventThrottle={16}
                  onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: xOffset } } }], { useNativeDriver: true })}
                  horizontal
                  pagingEnabled
                  style={styles.scrollView}
              >
                  {this.renderSlides()}
              </Animated.ScrollView>
          //   </LinearGradient>
          // </View>
      );
  }
}
const styles = {
    slideStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        marginRight:200
    },
    titleText: {
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'black',
        marginBottom: 30,
        fontWeight: 'bold',
    },
    buttonStyle: {
        backgroundColor: '#02d14b',  
    },
    buttonStyles: {
       fontSize: 30,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'white',
        marginBottom: 30,
    },
    screen: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        //justifyContent: "center",
        //alignItems: "center",
        borderRadius: 25,
        backgroundColor: "white",
        flexDirection: 'column',
      },
      scrollPage: {
        width: SCREEN_WIDTH,
        
      },
      image: {
          height: 140,
          flex: 1,
          alignItems: "center"
      },
      
}
export default UniversityFinder1;
