import React from 'react';
import {View, Text, StatusBar, Platform, FlatList, Image, Dimensions, Button, Alert} from 'react-native';
import firebase from 'firebase';
import {LinearGradient} from 'expo-linear-gradient';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Spinner from '../../components/Spinner';
import Card from '../../components/Card';
import { SafeAreaView } from 'react-navigation';
import { YellowBox } from 'react-native'

const BLUE = "#428AF8"
const LIGHT_GREY = "#D3D3D3";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

var solution = [];
let arr = [];
var done = null;
var loading = true;
let i = null;

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

class SolutionItem extends React.PureComponent {
    //     shouldComponentUpdate(nextProps, nextState) {
    //     // console.log("state: ", this.state);
    //     // console.log("nextState: ", nextState);
    //     return this.state != nextState;
    // }
    
    render() {
        console.log('ssssolution item------------------>')
        console.log(this.props.id)
           if(this.props.keyss === this.props.probKey){
            return (
                <Card>
                    <View style={{width:screenWidth, borderBottomWidth:2, borderBottomColor:'grey'}}></View>
                        <Text 
                            style={{
                                fontWeight:'900', 
                                fontSize:30, 
                                color:'#48D1CC', 
                                fontStyle:'normal', 
                                borderBottomColor:'#fff', 
                                borderBottomWidth: 2, 
                                textAlign:'center',
                                marginBottom: 2,
                                marginTop:2,
                            backgroundColor:'black'}}
                        
                        >
                            Solutions 
                        </Text>
                    <View style={{width:screenWidth, borderBottomWidth:2, borderBottomColor:'grey'}}></View>
                    {/* <View style={[(firebase.auth().currentUser.uid===this.props.userId) ? styles.key1 : styles.key2]}> */}
                    <View style={{display:'flex', flexDirection:'column'}}>
                        
                        <TouchableOpacity style={{marginRight: 0, alignSelf:'flex-end'}} onPress={() => this.props.handleEditDeleteAlert(this.props.id, this.props.solution, this.props.upload)}>
                            <View style={[(firebase.auth().currentUser.uid!==this.props.userId) ? styles.displayOption3 : console.log('solution option') ]} >
                                <Image
                                    resizeMode='contain'
                                    style={{
                                            width:screenWidth*.10,
                                            height:screenHeight*.07,
                                        }}
                                    source={require("../../Images/options.png")}
                                />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text adjustsFontSizeToFit style={{ fontSize:0.05*screenWidth}}>{this.props.solution}</Text>
                        </View>
                    </View>
                    {!this.props.upload ? null : <TouchableOpacity onPress={() => this.props.handleSolutionImage(this.props.upload)}>
                        <Image 
                            style={(this.props.size===true) ? styles.solutionfull : styles.solutionhalf}
                            resizeMode={'contain'} 
                            source={{uri:this.props.upload}} 
                        />
                    </TouchableOpacity>}
                    {/* </View> */}
                </Card>
             );
           }
           else return null;
    }
}   

class CSolutions extends React.Component{
    
    constructor(props){
        super(props);
        this.handleImageSize = this.handleImageSize.bind(this);
        this.addReactSolutionHandler = this.addReactSolutionHandler.bind(this);
        this.isMount = false;

        this.state = {
            des: this.props.navigation.state.params.description,
            exp: this.props.navigation.state.params.explanation,
            name: this.props.navigation.state.params.name,
            img: this.props.navigation.state.params.image,
            lng: this.props.navigation.state.params.language,
            tId: this.props.navigation.state.params.tId,
            uid: this.props.navigation.state.params.uid,
            image: '',
            image1: '',
            error: '',
            loading: false,
            size: false, 
            states: true,
            solution:[]
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != nextState;
    }
    componentDidMount() {
        this.isMount = true;
        done = null;
        solution=[];
        console.log('simple array of SOlutions-------------------->', solution);
        console.log('state of solutions', this.state.solution);
        // this.state.solution = [];
      
            if(done===null){
                firebase.database().ref('/Solutions/C')
                .on('value', snapshot => {
                snapshot.forEach((child)=>{
                    // console.log('child.value---------------------<><><><<>', child.val().key)
                    // console.log('state.key---------------------<><><><<>', this.state.tId)
                    if(child.val().key===this.state.tId){
                        solution.push({
                            solutions:child.val().solutionText,
                            name:child.val().name,
                            upload:child.val().UploadSol,
                            capture:child.val().Captured,
                            id: child.key,
                            probKey: child.val().key,
                            userId: child.val().uid
                        });
                    }
                });
                this.setState({solution: []}, ()=>{
                    const a = solution.filter(filtr => {
                        return filtr.probKey === this.state.tId
                    })
                    // console.log('ComponentDidMount------------------------------------------------>');
                    loading = false;
                    done='asdasda';
                    if(this.isMount){
                        this.setState({
                            solution: a
                        })
                    }
                })
            });
        }
    }
    
    componentWillUnmount() {
        this.setState({solution: []},  () => {
            solution=[];
            this.isMount=false
        })
        
        // this.state.solution=[];
        console.log('component will unmount of solutions');
    }

    handleImageSize() {
        const img = this.state.img
        this.props.navigation.navigate('pic', {img:img});
    }

    handleSolutionImage = (img) => {
        console.log('solution Picture Upload ')
        console.log(img);
        this.props.navigation.navigate('solPic', {img:img});
    }

    addReactSolutionHandler() {
        const tId = this.state.tId;
          solution = [];
        //  this.state.solution=[];
         //this.isMount=false;
         this.props.navigation.navigate('addCSolution',{key:tId});
    }

    // handleEdit = () => {
    //     this.isMount = false;
    //     solution = []
    //     const des = this.state.des;
    //     const exp = this.state.exp;
    //     const img = this.state.img;
    //     const tId = this.state.tId;
    //     const states = this.state.states
    //     this.props.navigation.navigate('addCProb', {des:des, exp:exp, img:img, key:tId, states:states});
    // }

    handleEdit = () => {
        this.isMount = false;
        solution = [];
        let img = '';
        if(!this.state.img){
            img = ''
        }
        else {
            img = this.state.img;
        }
        const des = this.state.des;
        const exp = this.state.exp;
         
        const tId = this.state.tId;
        const states = this.state.states
        this.props.navigation.navigate('addCProb', {des:des, exp:exp, img:img, key:tId, states:states});
    }

    handleDelete = async () => {
        this.isMount=false;
        solution = []
        loading=true;
        this.setState({loading: true})
        await firebase.database().ref('Probelms/C/'+this.state.tId).remove();
        this.props.navigation.navigate('cProb');
            firebase.database().ref('/Solutions/C')
            .on('value', snapshot => {
            snapshot.forEach((child)=>{
                if(child.val().key===this.state.tId){
                    firebase.database().ref('/Solutions/C/' + child.key).remove();
                }
            });
        })
    }

    handleEditDeleteAlert = () => {
        Alert.alert(
            "Alert Title",
            "Alert Msg",
            [
                { text: "Edit", onPress: this.handleEdit },
                { text: "Delete", onPress: this.handleDelete },
                // {
                //     text: "Cancel",
                //     onPress: () => console.log("Cancel Pressed"),
                //     style: "cancel"
                // },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        )
    }

    handleEditSolution = (sol, upload, id) => {
        solution=[];
        let Upload = '';
        if(!upload){
            Upload='';
        }
        else{
            Upload=upload
        }
        this.props.navigation.navigate('addCSolution', {editSol: sol, editImg: Upload, id: id, states: this.state.states})
    }

    // handleEditSolution = (sol, upload, id) => {
    //     solution=[];
    //     this.props.navigation.navigate('addCSolution', {editSol: sol, editImg: upload, id: id, states: this.state.states})
    // }

    handleDeleteSolution = async (id) => {
         loading=true;
         solution=[];
        await firebase.database().ref('Solutions/C/'+id).remove();
        console.log(solution);
    }

    handleEditDeleteAlertSolution = (id, sol, upload) => {
        Alert.alert(
            "Alert Title",
            "Alert Msg",
            [
                { text: "Edit", onPress: () => this.handleEditSolution(sol, upload, id) },
                { text: "Delete", onPress: () => this.handleDeleteSolution(id) },
                // {
                //     text: "Cancel",
                //     onPress: () => console.log("Cancel Pressed"),
                //     style: "cancel"
                // },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        )
    }

    render() {
        console.log('Render of solution screen');
       if(loading===false){
            return(
                <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, flex: 1 }}>
                    <LinearGradient colors={['#48D1CC', '#28b485']} style={{ width: screenWidth, height:screenHeight }}>
                        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:screenWidth, height:screenHeight*.12,  marginBottom: 10}}>
                        <View style={{display: 'flex', justifyContent:'center',marginTop:'5%',paddingBottom:'15%',paddingTop:'-7%',paddingRight:'5%',
                            
                            borderBottomRightRadius: 30,
                            
                            borderTopRightRadius: 30,
                                alignItems:'center',backgroundColor:'#eee', height:screenHeight*.09}}>
                                <Text style={{fontWeight:'900',marginTop:'10%', marginLeft:'5%',fontSize:25,
                                 color:'black', fontStyle:'normal', marginBottom: 20}}>
                                  C Solutions
                                </Text>
                            </View>
                           
                            <View style={{width:screenWidth*.3, height:screenHeight*.07, marginTop:15, marginRight:5}}>
                                    <Button title="Add Solution" style={{color:'black'}} color='black' onPress={this.addReactSolutionHandler} />
                            </View>
                        </View>

                        <SafeAreaView>
                        <View style={{width:screenWidth, borderBottomWidth:2, borderBottomColor:'grey'}}></View>
                                <Text 
                                    style={{
                                        fontWeight:'900', 
                                        fontSize:30, 
                                        color:'#48D1CC', 
                                        fontStyle:'normal', 
                                        borderBottomColor:'#fff', 
                                        borderBottomWidth: 2, 
                                        textAlign:'center',
                                        marginBottom: 2,
                                        marginTop:2,
                                    backgroundColor:'black'}}
                                
                                >
                                    Problem
                                </Text>
                                <View style={{width:screenWidth, borderBottomWidth:2, borderBottomColor:'grey'}}></View>
                                
                            <ScrollView alwaysBounceVertical style={{display:'flex', width:screenWidth, height:screenHeight*.85, backgroundColor:'white'}}>
                                <View style={{display:'flex', 
                                                flexDirection:'row', 
                                                height:screenHeight*.06, 
                                                justifyContent:'space-between', 
                                                borderBottomWidth: 2,
                                                borderBottomColor: 'grey', 
                                            }}>
                                    <View style={{width:screenWidth*.5}}>
                                        <Text 
                                            style={{
                                                width:screenWidth*.5,
                                                fontSize: 20,
                                                textShadowColor:'#585858', 
                                                textShadowOffset:{width: 5, height: 5}, 
                                                textShadowRadius:10}}>
                                            <Text style={{fontWeight:"bold"}}>
                                                Name: 
                                            </Text>
                                                {this.state.name}
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={this.handleEditDeleteAlert}>
                                        <View  style={[(firebase.auth().currentUser.uid===this.state.uid) ? console.log('is main a rha a') : styles.displayOption2]}>
                                            <Image
                                            resizeMode='contain'
                                            style={{
                                                    width:screenWidth*.15, 
                                                    height:screenHeight*.05,
                                                }}
                                            source={require("../../Images/options.png")}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text 
                                    style={{
                                        marginTop: 15, 
                                        borderBottomWidth: 2, 
                                        borderBottomColor: 'grey',
                                        fontSize: 20,
                                        textShadowColor:'#585858', 
                                        textShadowOffset:{width: 5, height: 5}, 
                                        textShadowRadius:10}}>
                                    <Text style={{fontWeight:"bold"}}>
                                        language: 
                                        </Text>{this.state.lng}
                                    </Text>
                                <Text 
                                    style={{
                                        marginTop: 15, 
                                        borderBottomWidth: 2, 
                                        borderBottomColor: 'grey',
                                        fontSize: 20,
                                        textShadowColor:'#585858', 
                                        textShadowOffset:{width: 5, height: 5}, 
                                        textShadowRadius:10}}>
                                    <Text style={{fontWeight:"bold"}}>
                                        Description: 
                                    </Text>{this.state.des}
                                </Text>
                                <Text 
                                    style={{
                                        marginTop: 15, 
                                        borderBottomWidth: 2, 
                                        borderBottomColor: 'grey',
                                        fontSize: 15,
                                        textShadowColor:'#585858', 
                                        textShadowOffset:{width: 5, height: 5}, 
                                        textShadowRadius:10}}>
                                    <Text style={{fontWeight:"bold", fontSize:20}}>
                                        Explanation: 
                                    </Text>{this.state.exp}
                                </Text>
                                {!this.state.img ? null : <TouchableOpacity onPress={this.handleImageSize}>
                                    <Image 
                                        style={(this.state.size===true) ? styles.full : styles.half}
                                        resizeMode={'contain'} 
                                        source={{uri:this.state.img}} 
                                    />
                                </TouchableOpacity>}
                                <View style={{width:screenWidth, borderBottomWidth:2, borderBottomColor:'grey'}}></View>
                                <Text 
                                    style={{
                                        fontWeight:'900', 
                                        fontSize:30, 
                                        color:'#48D1CC', 
                                        fontStyle:'normal', 
                                        borderBottomColor:'#fff', 
                                        borderBottomWidth: 2, 
                                        textAlign:'center',
                                        marginBottom: 2,
                                        marginTop:2,
                                    backgroundColor:'black'}}
                                
                                >
                                    Solutions
                                </Text>
                                <View style={{width:screenWidth, borderBottomWidth:2, borderBottomColor:'grey'}}></View>
                                
                                <FlatList
                                    data={this.state.solution}
                                    extraData={this.state.solution}
                                    renderItem={({item}) => <SolutionItem solution={item.solutions} upload={item.upload} capture={item.capture} uid={this.state.uid} id={item.id} handleSolutionImage={this.handleSolutionImage} size={this.state.size} handleEditDeleteAlert={this.handleEditDeleteAlertSolution} keyss={this.state.tId} probKey={item.probKey} userId={item.userId} />}
                                    keyExtractor={(item, index) => String(index)}
                                />
                            </ScrollView>
                        </SafeAreaView>
                    </LinearGradient>
                </View>
            );
        }
        else if(loading === true || this.state.loading===true){
            return(
                <View style={styles.container}>{console.log('Spinner')}<Spinner/></View>
            );
        }
    }
}

const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    full: {
        width: screenWidth,
        height: screenHeight,
    },
    half: {
        //flex: 1,
        alignSelf:'center',
        marginTop: 15,
        width:Dimensions.get('window').width*.4, 
        height: screenHeight*.32, 
        marginLeft: 10,
        overflow:'hidden', 

    },
    solutionfull: {
        width: screenWidth,
        height: screenHeight,
    },
    solutionhalf: {
        //flex: 1,
        alignSelf:'center',
        marginTop: 10,
        width:Dimensions.get('window').width*.4, 
        height: screenHeight*.32, 
        marginLeft: 10,
        overflow:'hidden', 

    },
    key1: {
        backgroundColor: 'white',
        marginBotton: 10,
        width:screenWidth,
        overflow:'hidden',
        flexDirection: 'column',
        flex: 1
        
    },
    key2: {
        backgroundColor: 'white',
        marginBotton: 10,
        overflow:'hidden',
        flexDirection: 'column',
        flex: 1
    },
    displayOption1: {
        //display: 'flex',
        backgroundColor: 'red',
        width:screenWidth*.3, 
        alignItems:'flex-end', 
        alignSelf:'center', 
        justifyContent:'flex-end', 
        justifyItems:'flex-end',
        
    },
    displayOption2: {
        display: 'none',
        backgroundColor: 'orange',
        width:screenWidth*.3, 
        alignItems:'flex-end', 
        alignSelf:'center', 
        justifyContent:'flex-end', 
        justifyItems:'flex-end',
    },
    displayOption3: {
        display: 'none',
        backgroundColor: 'orange',
        width:screenWidth*.3, 
        alignItems:'flex-end', 
        alignSelf:'center', 
        justifyContent:'flex-end', 
        justifyItems:'flex-end'
    }
  }
export default CSolutions;