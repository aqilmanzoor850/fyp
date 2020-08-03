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
const Langauge = 'React';
const extraData = null;

class AddReactSolution extends React.Component{
    
    constructor(props){
        super(props);
        this.handleCommentBlue = this.handleCommentBlue.bind(this);
        this.handleCommentFocus = this.handleCommentFocus.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
        this.imagePickerButton = this.imagePickerButton.bind(this);
        this.imageCaptureButton = this.imageCaptureButton.bind(this);

        this.isMount=false;

        this.state = {
            editSol: this.props.navigation.state.params.editSol,
            editImg: this.props.navigation.state.params.editImg,
            states: this.props.navigation.state.params.states,
            id: this.props.navigation.state.params.id,

            probKey: this.props.navigation.state.params.key,

            explainFocused: false,
            solutionText: '',
            loading: true,
            variable: false,
            Upload: '',
            Capture: '',
            error: '',
            random: false,
            key: this.props.navigation.state.params.key,
            var: false
        }
    }

    componentDidMount(){
        this.setState({loading: false});
        this.isMount=true;
    }

    componentWillUnmount() {
         this.isMount=false;
    }

    handleCommentFocus(event){
        this.setState({explainFocused: true})
        
    }
    handleCommentBlue(){
        this.setState({explainFocused: false})
    }

    handleExplanationText(text){
        {this.state.states ? this.setState({editSol: text}) : this.setState({solutionText: text})}
    }

    async onButtonPress(){
        this.isMount=true;
        this.setState({loading: true});
        const {solutionText, Upload, Capture, key} = this.state;
        const name = firebase.auth().currentUser.displayName;
        const uid = firebase.auth().currentUser.uid;
        if(this.state.solutionText===''){
            this.setState({ error: 'Fill the form properly', loading: false });
        }
        else{
            if(this.state.Upload!==''){
                    this.setState({ error: '' });
                    
                    await fetch(Upload)
                        .then((response)=>response.blob())
                        .then(async (blob)=>{   
                            var storage = firebase.storage();
                            var storageRef = storage.ref();
                            var imagesRef = storageRef.child('ReactSolutions/image'+(solutionText)+'.jpg');
                            await imagesRef.put(blob).then((snapshot)=>console.log('Uploaded'));
                        });  
                            const url =  firebase.storage().ref().child('ReactSolutions/image'+(solutionText)+'.jpg')
                            const UploadSol = await url.getDownloadURL();
                await firebase.database().ref('Solutions/React')
                .push({ name, uid, key, solutionText, UploadSol})
                this.setState({ solutionText: '', error: '', loading: false, Upload:'', Capture:'' }, ()=> {
                    
                    this.props.navigation.navigate('reactSolution')
                });
            }
            else {
                await firebase.database().ref('Solutions/React')
                .push({ name, uid, key, solutionText})
                this.setState({ solutionText: '', error: '', loading: false, Upload:'', Capture:'' }, ()=> {
                    
                    this.props.navigation.navigate('reactSolution')
                });
            }
        }
    }

    onUpdatePress = async () => {
        this.isMount=true;
        this.setState({loading: true});
        const {editImg, editSol, id} = this.state;
        if(editSol===''){
            this.setState({ error: 'Fill the form properly', loading: false });
        }
        else {
            this.setState({error: ''});
            if(editImg!==''){
                console.log('Image',editImg)
                await fetch(editImg)
                .then((response)=>response.blob())
                .then(async (blob)=>{   
                    var storage = firebase.storage();
                    var storageRef = storage.ref();
                    var imagesRef = storageRef.child('ReactSolutions/image'+(editSol)+'.jpg');
                    await imagesRef.put(blob).then((snapshot)=>console.log('Uploaded'));
                });  
                    const url =  firebase.storage().ref().child('ReactSolutions/image'+(editSol)+'.jpg')
                    console.log('url',url)
                    const Uploadimg = await url.getDownloadURL();
                await firebase.database().ref('Solutions/React/'+id).update({
                    UploadSol: Uploadimg,
                    solutionText: editSol
                })
                this.setState({editSol:'', Capture:'', editImg: ''},() => {
                    this.props.navigation.navigate('reactSolution');
                })
            }
            else {
                await firebase.database().ref('Solutions/React/'+id).update({
                    solutionText: editSol
                })
                this.setState({editSol:'', Capture:'', editImg: ''},() => {
                    this.props.navigation.navigate('reactSolution');
                })
            }
           
        }
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
                    //aspect: [4, 3],
                    quality: 1
                });
                
                // console.log(result);
                if (!result.cancelled) {
                    this.setState(this.state.states ? this.setState({editImg: result.uri}) : { Upload: result.uri });
                }
            }
        }
    }

    async imageCaptureButton(){
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
                
                // console.log(result);
                if (!result.cancelled) {
                    {this.state.states ? this.setState({editImg: result.uri}) : this.setState({ Upload: result.uri })};
                }
            }
        }
    }


     render(){
        const {isFocused, explainFocused}=this.state;
         if(this.state.loading===false){
            return(
                <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, flex: 1 }}>
                    <LinearGradient colors={['#48D1CC', '#eee']} style={{ width: screenWidth, height:screenHeight }}>
                        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:screenWidth, height:screenHeight*.12,  marginBottom: 10}}>
                        <View style={{display: 'flex', justifyContent:'center',marginTop:'5%',paddingBottom:'15%',paddingTop:'-7%',paddingRight:'5%',
                            
                            borderBottomRightRadius: 30,
                            
                            borderTopRightRadius: 30,
                                alignItems:'center',backgroundColor:'#eee', height:screenHeight*.09}}>
                                <Text style={{fontWeight:'900',marginTop:'10%', marginLeft:'5%',fontSize:25,
                                 color:'black', fontStyle:'normal', marginBottom: 20}}>
                                   Add React Solutions
                                </Text>
                            </View>
                        </View>

                        <KeyboardAvoidingView>
                            <TextInput
                                    selectionColor={BLUE}
                                    value={this.state.states ? this.state.editSol : this.state.solutionText}
                                    onChangeText={(text)=> this.handleExplanationText(text)}
                                    onFocus={this.handleCommentFocus}
                                    onBlur={this.handleCommentBlue}
                                    multiline={true}
                                    textAlignVertical='top'
                                    style={{
                                        width: Dimensions.get("window").width,
                                        //fontSize: 14,
                                        marginTop:8,
                                        paddingLeft:5,
                                        marginLeft:'5%',
                                        marginRight:'30%',
                                        borderBottomColor: explainFocused ? BLUE : LIGHT_GREY, 
                                        borderBottomWidth:3,
                                        backgroundColor:'#fff',
                                        height:screenHeight*.40
                                        //marginRight:10
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
                                    blurRadius={this.state.Upload !== '' ? 6 : 0}
                                    style={{
                                    width: Dimensions.get("window").width * 0.18,
                                    height: Dimensions.get("window").height * 0.09,
                                    //marginRight: 10,
                                    
                                    marginTop:5,
                                    marginLeft:'70%',
                                    marginRight:'40%',
                                    alignItems:'center',
                                    justifyContent:'center'
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.imagePickerButton}>
                                <Image
                                    blurRadius={this.state.states ? this.state.editImg !== '' ? 6 : 0 : this.state.Upload !== '' ? 6 : 0}
                                    source={require("../../Images/upload.png")}
                                    style={{
                                    width: Dimensions.get("window").width * 0.165,
                                    height: Dimensions.get("window").height *.09,
                                    //marginRight: 10,
                                    marginLeft: 0,
                                    marginTop:5,
                                    marginRight:'20%',
                                    paddingLeft:'-20%',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                            />
                            </TouchableOpacity>  
                        </View>
                        <View style={{marginTop: 10, width:screenWidth, height:screenHeight}}>
                        {this.state.states ? <Text style={styles.errorTextStyle}>{this.state.error || (((this.state.editImg).length > 20) ? 
                                    (((this.state.editImg).substring(0,20-3)) + '...') : 
                                     this.state.editImg) || (((this.state.Capture).length > 20) ? 
                                    (((this.state.Capture).substring(0,20-3)) + '...') : 
                                     this.state.Capture)}</Text>
                            :
                        <Text style={styles.errorTextStyle}>{this.state.error || (((this.state.Upload).length > 20) ? 
                                    (((this.state.Upload).substring(0,20-3)) + '...') : 
                                     this.state.Upload) || (((this.state.Capture).length > 20) ? 
                                    (((this.state.Capture).substring(0,20-3)) + '...') : 
                                     this.state.Capture)}</Text>}
                        {this.state.states ?
                           
                           <View style={{width:screenWidth*.5, height:screenHeight*.15, marginTop:'5%',marginLeft:'25%',marginRight:5,color:'black'}}>
                           <Button  title="UPDATE" color='black' onPress={this.onUpdatePress} />
                       </View>
                          
                        :
                        <View style={{width:screenWidth*.5, height:screenHeight*.15, marginTop:'20%',marginLeft:'25%',marginRight:5,color:'black'}}>
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
  
  export default connect(mapStateToProps, actions)(AddReactSolution);