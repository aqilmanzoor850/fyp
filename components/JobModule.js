import React from 'react';
import {View, ScrollView,Button,TextInput,Dimensions, Platform,Text} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import LocationDropDown from './locationDropDown';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const BLUE = "#428AF8"

var done = null;
var loading = 'yes';

class JobModule extends React.Component {
    state = {
        jobs: [...jobs],
        location: [],
        search: '',
        city: '',
        data:[]
    }
    async componentDidMount() {
        this.state.jobs.map((i, index) => {
            this.state.location.push({value: i.jobLocation})
        })
    }

    handleLocationChange = (value) => {
        this.setState({city: value})
    }

    handleText = (value) => {
        this.setState({search: value})
    }

    onPress = () => {
        console.log(this.state.search)
        
        this.state.jobs.filter((i,index)=>((i.functionalArea).includes(this.state.search.trimRight())===true)).filter((i, index)=>(i.jobLocation===this.state.city)).map((i, indx) => {
            this.setState({data: i}, () => {
                this.props.navigation.navigate('showJobs', {data: this.state.data})
            })
        })
    }

    onRegionChangeComplete = async (region) => {
        //if(this.state.region!==region) {
            console.log(region);
            this.setState({region});
            done=null;
        //}
    }
    updateSearch = search => {
        this.setState({ search });
      };

    render()
     {
        // let text = 'Waiting..';
        // if (this.state.errorMessage) {
        //   text = this.state.errorMessage;
        // } else if (this.state.location) {
        //   text = JSON.stringify(this.state.location);
        //   console.log(text);
        // }
        // console.log(location)
        const { search } = this.state;
        <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />

        // if(loading==='yes'){
        //     return(
        //         <Spinner />
        //     )
        // }
        // else if(loading===null){   
        //   done='asd';
            return(
                
                <LinearGradient colors={['#48d1cf', '#eee']} style={{ width: screenWidth, height:screenHeight }} >
                      <ScrollView>
                            <View style={{flex: 1}}>

                                <View style={styles.ViewStyle}>
                                    <Text style={{fontWeight:'900',marginLeft:'30%',marginTop:'-5%',fontSize:30,  height:screenHeight*.09,color:'black', fontStyle:'normal', marginBottom: 20}}>
                                        Job Offers
                                    </Text>
                                </View>


                                <View style={{width:screenWidth*.89, height:screenHeight*.09,marginTop:'5%'}}>
                                            
                                    <Text  style={{fontSize:30,marginLeft:"-10%",marginRight:"0%",textAlign:'left',paddingLeft:"20%",paddingRight:"15%"}}>What</Text>
                                
                                    <Text  style={{fontSize:12,marginLeft:"-10%",marginRight:"0%",textAlign:'left',paddingLeft:"20%",paddingRight:"15%"}}>Write your Job Title</Text>
                                    <TextInput
                                        
                                        style={{
                                            marginTop:8,
                                            paddingLeft:5,
                                            marginLeft:'5%',
                                            marginRight:'30%',
                                            borderBottomWidth:2,
                                            borderTopWidth:2,
                                            borderLeftWidth:2,
                                            borderRightWidth:2,
                                            borderColor:'#00BCD4',
                                
                                            borderBottomRightRadius:3,
                                            height:screenHeight*.06,
                                            width:screenWidth*.9,
                                            backgroundColor:'white',
                                            //marginRight:10
                                        }}
                                        value={this.state.search}
                                        onChangeText={(value) => this.handleText(value)}
                                        multiline={true}
                                        placeholder="  Job Title, Company"
                                        placeholderTextColor='silver'
                                    />
                                </View>




                                <View style={{width:screenWidth*.89, height:screenHeight*.07,marginTop:'15%'}}>
                                            
                                    <Text  style={{fontSize:30,marginLeft:"-10%",marginRight:"0%",textAlign:'left',paddingLeft:"20%",paddingRight:"15%"}}>Where</Text>
                                            
                                    <Text  style={{fontSize:12,marginLeft:"-10%",marginRight:"0%",textAlign:'left',paddingLeft:"20%",paddingRight:"15%"}}>City, Province, Region</Text>
                                    
                                    <LocationDropDown 
                                        location={this.state.location} 
                                        handleLocationChange={this.handleLocationChange}/>

                                </View>

                                    
                                        
                                <View style={styles.MainContainer} style={{marginTop:'20%',marginLeft:'10%'}}>
                                
                                    <TouchableOpacity onPress={this.onPress} style={styles.SubmitButtonStyle} activeOpacity = { .3 } >
                                    
                                        <Text style={styles.TextStyle}>FIND</Text>
                                    
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </ScrollView>
                </LinearGradient>
            );
        }
    }
//}


const styles = {
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
       
      },
      TextStyle:{
        color:'black',
        textAlign:'center',
        fontSize:20,
        
    },
      
  SubmitButtonStyle: {
 
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:50,
    marginRight:30,
    backgroundColor:'#48D1CC',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width:screenWidth*.5
  },
    ViewStyle: {
        backgroundColor: '#00BCD4',
        display: 'flex',
        flexDirection: 'row',
        // jusifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 25,
        paddingLeft: 5,
        elevation: 2,
        position: 'relative',
        width:screenWidth*1,
        height: screenHeight*.09,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
};
export default JobModule;