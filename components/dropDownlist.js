import React, { Component } from 'react';
import { View, Text, Button , Dimensions,TouchableOpacity, StatusBar} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class DropDown extends Component {
    render() { 
        return ( 

              <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 10}}>

                <View style={{display: 'flex', justifyContent:'center',width:screenWidth*.75,
                                marginTop:'5%',paddingBottom:'15%',
                                paddingTop:'-3%',paddingRight:'5%',
                                borderBottomRightRadius: 30,
                                borderTopRightRadius: 30, borderColor: '#fff',
                                alignItems:'center',backgroundColor:'#00BCD4', 
                                height:screenHeight*.05}}>
               
                    <Text style={{fontWeight:'bold',marginTop:'25%', marginLeft:'5%',fontSize:25,
                                 color:'black', marginBottom: 20}}>
                         Find Best University
                    </Text>
              </View>
                 
                 
                  
                 <View style={{ flex: 1, justifyContent: 'center', 
                alignSelf:'center',
                position: "absolute",
               
                padding:'5%',
                paddingTop:'10%',
                paddingBottom:'10%',
                width:screenWidth*.80,height:screenHeight*.01,
                marginLeft:'10%',
                marginRight:'25%',
                marginTop:'25%'}}>

                <Dropdown 
                    label='Select the Location'
                    itemColor={'#000'}
                    data={this.props.location}
                    onChangeText={(val) => this.props.onChange(val)}
                />
                </View>


                <View style={{ flex: 1, justifyContent: 'center', 
                alignSelf:'center',
                position: "absolute",
              
                padding:'5%',
                paddingTop:'10%',
                paddingBottom:'10%',
                width:screenWidth*.80,height:screenHeight*.01,
                marginLeft:'10%',
                marginRight:'25%',
                marginTop:'40%'}}>

                <Dropdown 
                    label='Select fee Range'
                    itemColor={'#000'}
                    data={this.props.fee}
                    onChangeText={(val) => this.props.feeChange(val)}
                />

                   </View>
                
                <View style={{ flex: 1, justifyContent: 'center', 
                                alignSelf:'center',
                                position: "absolute",
                            
                                marginBottom:'10%',
                                padding:'5%',
                                paddingTop:'10%',
                                paddingBottom:'10%',
                                width:screenWidth*.80,height:screenHeight*.01,
                                marginLeft:'10%',
                                marginRight:'25%',
                                marginTop:'65%'
                                }}
                >

                <Dropdown 
                    label='Select Status of University'
                    itemColor={'#000'}
                    data={this.props.status}
                    onChangeText={(val) => this.props.statusChange(val)}
                />
                  </View>

                <View style={{ flex: 1, justifyContent: 'center', 
                                alignSelf:'center',
                                position: "absolute",
                                marginBottom:'0%',
                                padding:'5%',
                                paddingTop:'0%',
                                width:screenWidth*.80,height:screenHeight*.03,
                                marginLeft:'10%',
                                marginRight:'25%',
                                marginTop:'95%'}}
                >
        
                    <Dropdown 
                        label='Select Hostel availability'
                        itemColor={'black'}
                        data={this.props.hostal}
                        onChangeText={(val) => this.props.hostalChange(val)}
                    
                    />
                </View>
               
            <View style={{marginTop:'10%'}}>
                <TouchableOpacity style={styles.SubmitButtonStyle}
                     activeOpacity = { .3 }onPress={this.props.onSubmit}>
                    
                    <Text style={styles.TextStyle}> SUBMIT</Text>
                     </TouchableOpacity>
            </View> 


            <View style={{marginTop:'-60%'}}>
           
                <TouchableOpacity style={styles.TopITButtonStyle}
                     activeOpacity = { .3 } onPress={this.props.top10Uni}>
                    
                    <Text style={styles.TextStyle1}> Top 10 IT Universities</Text>
                     </TouchableOpacity>
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
      marginTop:'80%',
      marginLeft:'30%',
      paddingBottom:'10%', 
      marginRight:30,
      backgroundColor:'#00BCD4',
      borderRadius:10,
      borderWidth: 3,
      borderColor: '#fff',
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      width:screenWidth*.45,
      height:screenHeight*.06
    },
    
    TopITButtonStyle: {
     
        marginTop:'80%',
        marginLeft:'20%',
        paddingBottom:'10%',
        marginRight:30,
        backgroundColor:'#00BCD4',
        borderRadius:10,
        borderWidth: 3,
        borderColor: '#fff',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        width:screenWidth*.65,
        height:screenHeight*.06
      },
    
    TextStyle: {
        textAlign:'center',
        
        fontSize: screenWidth*.05,
        fontWeight: 'bold',
        color: '#eee',
        marginTop:5,
    },
    TextStyle1: {
        textAlign:'center',
        
        fontSize: screenWidth*.05,
        fontWeight: 'bold',
        color: 'black',
        marginTop:5,
    },
    dropStyle:{

        
      paddingBottom:15,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#eee',
      borderRadius:10,
      borderWidth: 3,
      borderColor: '#fff',
    }
};

export default DropDown;