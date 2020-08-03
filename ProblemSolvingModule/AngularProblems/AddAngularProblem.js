import React from 'react';
import {Text, View, Platform, StatusBar, TextInput, Image, Dimensions, Button, AsyncStorage, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import Spinner from '../../components/Spinner';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import {LinearGradient} from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const BLUE = "#428AF8"
const LIGHT_GREY = "#D3D3D3";
const Langauge = 'Angular';
const extraData = null;


class AddAngularProblem extends React.Component{
    state = {
        isFocused: false, 
        explainFocused: false,
        descriptionText: '',
        explanationText: '',
        loading: false,
        variable: false,
        Upload: '',
        Capture: '',
        error: '',
        random: false,
        des: this.props.navigation.state.params.des,
        exp: this.props.navigation.state.params.exp,
        img: this.props.navigation.state.params.img,
        key: this.props.navigation.state.params.key,
        // // cap: '',
        states: this.props.navigation.state.params.states,
    }
    constructor(props){
        super(props);
        this.handleBlue = this.handleBlue.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleCommentBlue = this.handleCommentBlue.bind(this);
        this.handleCommentFocus = this.handleCommentFocus.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
        this.imagePickerButton = this.imagePickerButton.bind(this);
        this.imageCaptureButton = this.imageCaptureButton.bind(this);

        this.isMount=false;
    }

    componentDidMount(){
        this.isMount=true
        console.log('Add React Problemss-------------------------------');
        console.log('2 dafa ani chahea');
    }

    componentWillUnmount() {
        this.isMount= false;

        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    }

    handleFocus(event){
        this.setState({isFocused: true})
        
    }

    handleBlue(){
        this.setState({isFocused: false})
    }

    handleCommentFocus(event){
        this.setState({explainFocused: true})
        
    }

    handleCommentBlue(){
        this.setState({explainFocused: false})
    }

    handleDiscriptionText(text){
        {this.state.states ? this.setState({des: text}) : this.setState({descriptionText: text})}
    }

    handleExplanationText(text){
        {this.state.states ? this.setState({exp: text}) : this.setState({explanationText: text})}
        console.log(text)
    }

    uriToBlob =  async (uri)=>  
    {
      await fetch(uri)
       .then((response)=>response.blob())
       .then((blob)=>{   
     this.uploadToFirebase(blob);
       });   
   }

    async onButtonPress(){
        this.isMount=true;
        this.setState({loading: true}, async() => {
            const {descriptionText, explanationText, Upload, Capture} = this.state;
            const name = firebase.auth().currentUser.displayName;
            const uid = firebase.auth().currentUser.uid;
            if(this.state.descriptionText==='' && this.state.explanationText===''){
                this.setState({ error: 'Fill the Form Properly', loading: false });
            }
            if(this.state.descriptionText===''){
                this.setState({ error: 'Fill the description', loading: false });
            }
            else if( this.state.explanationText===''){
                this.setState({ error: 'Fill the Explanation', loading: false });
            }
            else{
                this.setState({ error: '' });
                if(this.state.Upload!==''){
                    await fetch(Upload)
                        .then((response)=>response.blob())
                        .then(async (blob)=>{   
                            var storage = firebase.storage();
                            var storageRef = storage.ref();
                            var imagesRef = storageRef.child('AngularProblems/image'+(descriptionText)+'.jpg');
                            await imagesRef.put(blob).then((snapshot)=>console.log('Uploaded'));
                        //console.log(imagesRef);
                        
                            //this.setState({Upload: imagesRef});
                        });  
                            const url =  firebase.storage().ref().child('AngualrProblems/image'+(descriptionText)+'.jpg')
                            const UploadProb = await url.getDownloadURL();
                        
                    // const Captured = firebase.storage().ref().child(Capture).fullPath
                    await this.props.Angularproblems(name, uid, Langauge, descriptionText, explanationText, UploadProb)
                    this.setState({descriptionText:'', explanationText:'', Upload: '', loading: false},() => {
                        this.props.navigation.navigate('addAngularProb');
                    })
                }
                else {
                    await this.props.Angularproblems1(name, uid, Langauge, descriptionText, explanationText)
                    this.setState({descriptionText:'', explanationText:'', Upload: '', loading: false},() => {
                        this.props.navigation.navigate('addAngularProb');
                    })
                }
                console.log('ban gayi a database');
            }
        })
       
    }

    async imagePickerButton(){
        if(Constants.platform.android){
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                console.log('Sorry, we need camera roll permissions to make this work!');
            }
            else if(status==='granted'){
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    quality: 1
                });
                
                console.log(result);
                if (!result.cancelled) {
                    {this.state.states ? this.setState({img: result.uri}) : this.setState({ Upload: result.uri })};
                }
            }
        }
    }

    async imageCaptureButton(){
        this.isMount=true;
        if(Constants.platform.android){
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            if (status !== 'granted') {
                console.log('Sorry, we need camera roll permissions to make this work!');
            }
            else if(status==='granted'){
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    //aspect: [4, 3],
                    quality: 1
                });
                
                console.log(result);
                if (!result.cancelled) {
                    {this.state.states ? this.setState({img: result.uri}) : this.setState({ Upload: result.uri })}
                }
            }
        }
    }

    handleUpdateButton = async () => {
        this.isMount=true;
        this.setState({loading: true});
        const {des, exp, img, cap} = this.state;
        if(des===''){
            this.setState({ error: 'Fill Description', loading: false });
        }
        else if(exp===''){
            this.setState({ error: 'Fill Explanation', loading: false });
        }
        else {
            this.setState({error: ''});
            if(this.state.img!==''){
                await fetch(img)
                .then((response)=>response.blob())
                .then(async (blob)=>{   
                    var storage = firebase.storage();
                    var storageRef = storage.ref();
                    var imagesRef = storageRef.child('AngularProblems/image'+(des)+'.jpg');
                    await imagesRef.put(blob).then((snapshot)=>console.log('Uploaded'));
                });  
                    var storageRef = firebase.storage().ref();
                    const url =  firebase.storage().ref().child('AngularProblems/image'+(des)+'.jpg')
                    const UploadProb = await url.getDownloadURL();
                await firebase.database().ref('Probelms/AngularProb/'+this.state.key).update({
                    Upload: img,
                    descriptionText: des,
                    explanationText: exp,
                })
                this.setState({des:'', exp:'', Capture:'', Uppload: ''},() => {
                    this.props.navigation.navigate('addAngularProb');
                })
            }
            else {
                await firebase.database().ref('Probelms/Angular/'+this.state.key).update({
                    descriptionText: des,
                    explanationText: exp,
                })
                this.setState({des:'', exp:'',},() => {
                    this.props.navigation.navigate('addAngularProb');
                })
            }
        }
    }


    render(){
        console.log(this.state.des);
        const {isFocused, explainFocused}=this.state;
        if(this.state.loading===false){
            return(
                <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, flex: 1 }}>
                    <LinearGradient colors={['#48D1CC', '#eee','#48D1CC']} style={{ width: screenWidth, height:screenHeight }}>
                        <View colors={['#eee']}  style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:screenWidth, height:screenHeight*.17,  marginBottom: 0}}>
                        <View style={{display: 'flex', justifyContent:'center',marginTop:'5%',paddingBottom:'15%',paddingTop:'-7%',paddingRight:'5%',
                            
                            borderBottomRightRadius: 30,
                            
                            borderTopRightRadius: 30,
                                alignItems:'center',backgroundColor:'#eee', height:screenHeight*.09}}>
                                <Text style={{fontWeight:'900',marginTop:'10%', marginLeft:'5%',fontSize:25,
                                 color:'black', fontStyle:'normal', marginBottom: 20}}>
                                   Add Angular Problems
                                </Text>
                            </View>
                        </View>

                        <KeyboardAvoidingView>
                        <TextInput 
                                placeholder="Write Descriptions"
                                value={this.state.states ? this.state.des : this.state.descriptionText}
                                onChangeText={(text)=> this.handleDiscriptionText(text)}
                                selectionColor={BLUE}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlue}
                                multiline={true}
                                maxLength={110}
                                textAlignVertical='top'
                                style={{
                                    width: Dimensions.get("window").width-10,
                                    height:55, 
                                    paddingLeft:15,
                                    paddingTop:15,
                                    marginLeft:'2%', 
                                    marginRight:'20%',
                                    borderBottomColor: isFocused ? BLUE : LIGHT_GREY, 
                                    borderBottomWidth:3,
                                    width: Dimensions.get("window").width,                                        
                                    backgroundColor:'#fff',
                                }}
                            />
                        </KeyboardAvoidingView>

                        <KeyboardAvoidingView>
                            <TextInput
                                    selectionColor={BLUE}
                                    value={this.state.states ? this.state.exp : this.state.explanationText}
                                    onChangeText={(text)=> this.handleExplanationText(text)}
                                    onFocus={this.handleCommentFocus}
                                    onBlur={this.handleCommentBlue}
                                    multiline={true}
                                    textAlignVertical='top'
                                    style={{
                                        width: Dimensions.get("window").width,
                                        marginTop:8,
                                        paddingLeft:15,
                                        paddingTop:15,
                                        borderBottomColor: explainFocused ? BLUE : LIGHT_GREY, 
                                        borderBottomWidth:3,
                                        backgroundColor:'#fff',
                                        height:screenHeight*.30,
                                        marginLeft:'2%', 
                                        marginRight:'20%',
                                        marginTop:'5%',
                                        marginBottom:'5%'
                                    }}
                                    multiline={true}
                                    placeholder="Explain the Problems here"
                                    placeholderTextColor='silver'
                            />
                        </KeyboardAvoidingView>
                        <View style={{marginTop: 0, display:'flex', flexDirection:'row', justifyContent:'flex-end', width:screenWidth, height: screenHeight*.10}}>
                            <TouchableOpacity onPress={this.imageCaptureButton}>
                                <Image
                                    source={require("../../Images/camera.png")}
                                    blurRadius={this.state.states ? this.state.img != '' ? 6 : 0 : this.state.Upload !== '' ? 6 : 0}
                                    style={{
                                    width: Dimensions.get("window").width * 0.18,
                                    height: Dimensions.get("window").height * 0.09,
                                    //marginRight: 10,
                                    marginRight: 20,
                                    marginTop:5,
                                    alignItems:'center',
                                    justifyContent:'center'
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.imagePickerButton}>
                                <Image
                                    blurRadius={this.state.states ? this.state.img != '' ? 6 : 0 : this.state.Upload !== '' ? 6 : 0}
                                    source={require("../../Images/upload.png")}
                                    style={{
                                    width: Dimensions.get("window").width * 0.165,
                                    height: Dimensions.get("window").height *.09,
                                    //marginRight: 10,
                                    marginLeft: 0,
                                    marginTop:5,
                                    marginRight:0,
                                    marginLeft:'20%',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                            />
                            </TouchableOpacity>  
                        </View>
                        <View style={{marginTop: 10, width:screenWidth, height:screenHeight}}>
                        <Text style={styles.errorTextStyle}>{this.state.error || (((this.state.Upload).length > 20) ? 
                                    (((this.state.Upload).substring(0,20-3)) + '...') : 
                                     this.state.Upload) || (((this.state.Capture).length > 20) ? 
                                    (((this.state.Capture).substring(0,20-3)) + '...') : 
                                     this.state.Capture)}</Text>
                        <Text style={styles.errorTextStyle}>{this.state.error || (((this.state.img).length > 20) ? 
                                    (((this.state.img).substring(0,20-3)) + '...') : 
                                        this.state.img) || (((this.state.Capture).length > 20) ? 
                                    (((this.state.Capture).substring(0,20-3)) + '...') : 
                                        this.state.Capture)}</Text>
                        {this.state.states ?
                           


                            <View style={{width:screenWidth*.5, height:screenHeight*.15, marginTop:'0%',marginLeft:'25%',marginRight:5,color:'black'}}>
                            <Button  title="UPDATE" color='black' onPress={this.handleUpdateButton} />
                        </View>
                           
                            :
                            <View style={{width:screenWidth*.5, height:screenHeight*.15, marginTop:'-5%',marginLeft:'25%',marginRight:5,color:'black'}}>
                            <Button  title="SUBMIT" color='black' onPress={this.onButtonPress} />
                        </View>
                        }
                        
                        </View>
                  
                    </LinearGradient>
                </View>
            );
        }
        else if(this.state.loading === true){
            return(
                <View style={styles.container}>{console.log('asdasda')}<Spinner/></View>
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
        color: 'red',
        marginBottom:10
      },
  }

  const mapStateToProps = ({auth}) => {
    const { resp1 } =  auth;
  
    return { resp1 };
  };
  
  export default connect(mapStateToProps, actions)(AddAngularProblem);