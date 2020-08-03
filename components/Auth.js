import React , {Component} from 'react';
import {
  View,
  Text,Image,TextInput,Button,
  AsyncStorage, TouchableOpacity,StyleSheet, Keyboard, Dimensions, KeyboardAvoidingView, SafeAreaView,StatusBar
} from 'react-native';
import {ScrollableTabView , DefaultTabBar, ScrollableTabBar} from '@valdio/react-native-scrollable-tabview';
import { connect } from 'react-redux';
import * as actions from '../actions';
import firebase from 'firebase';
import {SocialIcon} from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';

import Spinner from './Spinner';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const BLUE = "#428AF8"
const LIGHT_GREY = "#D3D3D3";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
    this.onAuthComplete = this.onAuthComplete.bind(this);
    this.onSignUpLoginFail = this.onSignUpLoginFail.bind(this);
    this.onSignUpButtonPress = this.onSignUpButtonPress.bind(this);
    this.renderSignUpButton = this.renderSignUpButton.bind(this);
    this.onSignUpLoginSuccess =  this.onSignUpLoginSuccess.bind(this);
    this.onForgetPassword = this.onForgetPassword.bind(this);

    this.state = {
      email:'',
      password:'',
      Fname:'',
      Lname:'',
      signUpemail:'',
      signupPhone:'',
      signUppassword:'',
      signupPassConfirm:'',
      error: '', 
      error101: '',
      loading: false,
      borderColor: "gray",
      borderWidth: 2,
      ref: null,
      user: false,
      notification: '',
      random: false,
      isFocused: false, 
      explainFocused: false,
      isEmailFocused: false,
      isPasswordFocused: false,
      isConfirmFocused: false
    };
}

async onButtonPress(props) {
  let myapp=this, error123=null; 
  console.log('button ka start')
    const { email, password } = this.state;
    this.setState({ error101: '', loading: true });
    console.log({email});
   await this.props.loginUser(email, password);
   //console.log(firebase.auth().currentUser)

  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      if(user.emailVerified === false){
        error123 = 'Email is verified'
        myapp.onLoginFail2();
        firebase.auth().signOut()
      }
      else{
          myapp.onLoginSuccess();
          myapp.props.navigation.navigate('map');
      }
    }else{
      console.log(error123);
      if(error123 === null ){
        console.log("error111111")
        myapp.onLoginFail();
      }
    }
  });
}

onLoginFail() {
    this.setState({ error101: 'Authentication Failed.', loading: false });
}
onLoginFail2(){
  this.setState({error101: 'Email is not verfied', loading:false})
}
onLoginSuccess() {
    this.setState({
        email: '',
        password: '',
        loading: false,
        error101: ''
    });
}
renderButton() {
  if (this.state.loading) {
      return (<Spinner size={'small'} />);
  }
  return (
    <Button title="Login"  onPress={this.onButtonPress}  color='#48D1CC' /> 
  );
}

async onAuthComplete(props){
  firebase.auth().signOut();
  await this.props.facebookLogin();
  if(this.props.token){        
  this.props.navigation.navigate('map');
  }
}

onSignUpButtonPress() {
  //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  this.setState({error: '', loading: true})
  let errorr = '', errorr1 = '', errorr2 = '',errorr3 = '',errorr4 = '';   
  console.log(this.state.Fname);
  console.log(this.state.Lname);
  if (this.state.Fname === null ) {
      console.log('FNameFail');
      errorr2 = 'FName is invalid.';
} else {
  console.log('FNameSuccess');
  errorr2 = '';
}

if (this.state.Lname === null ) {
  console.log('LNameFail');
  errorr3 = 'LName is invalid.';
} else {
console.log('LNameSuccess');
errorr3 = '';
}


  let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (this.state.signUpemail.match(regexp) === null ) {
          console.log('EmailFail');
          errorr = 'Email is invalid.';
  } else {
      console.log('EmailSuccess');
      errorr = '';
  }
console.log('Email Entered');

  let regexp1 = /^(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  if(this.state.signUppassword===''){
    errorr1='Password is empty'
  }
  else if (this.state. signUppassword.match(regexp1) === null ) {
      console.log('PasswordFail');
     errorr1 = 'Password is invalid.';
  } else {
      console.log('PasswordSuccess');
     errorr1 = '';
  }
  console.log('Password Entered')
  if(this.state.signupPassConfirm===''){
    errorr4 = 'Confirm Password is Empty.';
  }
  else if (this.state. signupPassConfirm.match(regexp1) === null ) {
      console.log('ConfirmPasswordFail');
     errorr4 = 'Confirm Password is invalid.';
  } else {
      console.log('Confirm PasswordSuccess');
     errorr4 = '';
  }
  console.log('Password Entered')

  if(this.state.Fname===''&&this.state.Lname===''&&this.state.signUpemail===''&&this.state.signUppassword===''&&this.state.signupPassConfirm==='')
  {
      console.log('gggg');
      this.onSignUpLoginFail();
  }
  else if ( errorr == 'Email is invalid.' )
  {
    //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      this.setState({ error: errorr, notification: '', loading: false });
  }

  else if (errorr1 == 'Password is invalid.')
  {
      this.setState({ error: errorr1, notification: '', loading: false });
  }
  else if (errorr2 == 'FName is invalid.')
  {
      this.setState({ error: errorr2, notification: '', loading: false });
  }
  else if (errorr3 == 'LName is invalid.')
  {
      this.setState({ error: errorr3, notification: '', loading: false });
  }
  else if(errorr4 == 'Confirm Password is invalid.')
  {
    this.setState({error: errorr4, notification: '', loading: false});
  }
  else if(errorr1='Password is empty'){
    this.setState({error: errorr1, notification:'', loading: false});
  }
  else if(this.state.signUppassword!==this.state.signupPassConfirm){
    this.setState({error: 'password do not match', notification: '', loading: false})
  }
  else {
    let error0;
    let rootRef = firebase.database().ref();
      rootRef
      .child('auth')
      .orderByChild('email')
      .equalTo(this.state.signUpemail)
      .once('value')
      .then(snapshot => {
        if(snapshot.exists()){
          this.setState({error: '', loading: true, notification: ''})
          error0 = 'This email already exist. Signup with another email';
          this.setState({error: error0, loading: false, notification: ''})
        }
        else{
          this.setState({ error: '', loading: true });
          console.log('onButtonPress');
          console.log(this.state.signUpemail);
          
          if(this.state.user===false){
            this.props.createUser(this.state.Fname, this.state.signUpemail, this.state.signUppassword);
            this.setState({user: true});
          }
          this.props.authCreate(this.state.Fname, this.state.Lname, this.state. signUpemail, this.state. signUppassword)
          this.setState({Fname:'', Lname: '',  signUpemail: '',  signUppassword: '', signupPassConfirm: '', loading: false, error: 'Now Verify Your account to Login', notification: 'First Verify Your Account and Then Login'});
          this.props.navigation.navigate('auth');
        }
      })
  }
}

renderSignUpButton() {
  if (this.state.loading) {
    return (<Spinner size={'small'} />);
}
  return (
    <Button title="Sign UP"  onPress={this.onSignUpButtonPress}  color="#48D1CC" /> 
  );
}

onSignUpLoginSuccess() {
  this.setState({
      Fname: '',
      Lname: '',
      signUpemail: '',
      signUppassword: '',
      signupPassConfirm: '',
      loading: false,
      error: 'Now Verify Your account',
      notification: ''
  });
}

onSignUpLoginFail() {
  console.log('onLoginFail');
  this.setState({ error: 'Form is not filled properly.', loading: false });
}

onForgetPassword(props){
  this.props.navigation.navigate('forgetpass')
}

LoginEmailchange( text ) {
    this.setState({email:text})
  }
Passwordchange( text ) {
    this.setState({password:text})
  }
Namechange( text ){
  const name = /^[A-Za-z]+$/;
  if(name.test(text)){
    this.setState({Fname:text})
  }
  else if(text===''){
    this.setState({Fname: text})
  }
    
  }
LastNamechange( text ){
  const name = /^[A-Za-z]+$/;
  if(name.test(text)){
    this.setState({Lname:text})
  }
  else if(text===''){
    this.setState({Lname: text})
  }
}
SignupEmailchange( text ){
    this.setState({ signUpemail:text})
}
SignupPhonechange( text ){
    this.setState({signupPhone:text})
}
SignupPasschange( text ){
    this.setState({ signUppassword:text})
}
SignupPassConfirmchange( text ){
    this.setState({signupPassConfirm:text})
}
handleFocus = () =>{
  this.setState({isFocused: true})
  
}
handleBlue = () => {
  this.setState({isFocused: false})
}
handleCommentFocus = () =>{
  this.setState({explainFocused: true})
  
}
handleCommentBlue = () =>{
  this.setState({explainFocused: false})
}
handleEmailFocus = () =>{
  this.setState({isEmailFocused: true})
  
}
handleEmailBlue = () =>{
  this.setState({isEmailFocused: false})
}
handlePasswordFocus = () =>{
  this.setState({isPasswordFocused: true})
  
}
handlePasswordBlue = () =>{
  this.setState({isPasswordFocused: false})
}
handleConfirmPassFocus = () =>{
  this.setState({isConfirmFocused: true})
  
}
handleConfirmPassBlue = () =>{
  this.setState({isConfirmFocused: false})
}
render() {
    AsyncStorage.setItem('token', 'value');
    return (
      <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, flex: 1 }}>
        <LinearGradient colors={['#48D1CC', '#28b485']} style={{ width: screenWidth, height:screenHeight }}>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:screenWidth, height:screenHeight*.16,  marginBottom: 10}}>
            <View style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
              <Text style={{textAlign:'center',marginLeft:'5%',marginTop:'18%',fontWeight:'800', fontSize:50, color:'#fff', fontStyle:'normal', marginBottom: 20}}>
                Sign in
              </Text>
          </View>
        </View>
        <View style={{backgroundColor:'#fff', width:screenWidth, height:screenHeight}}>
          <ScrollableTabView
            onChangeTab ={()=> { Keyboard.dismiss();}}
            renderTabBar={() => <ScrollableTabBar 
            style={styles.scrollStyle}
            tabStyle={styles.tabStyle} />}
            ref={(tabView) => { this.tabView = tabView; }}
            tabBarTextStyle={styles.tabBarTextStyle}
            tabBarInactiveTextColor={'black'}
            tabBarActiveTextColor={'#1DBF73'}
            tabBarUnderlineStyle={styles.underlineStyle}
          >
          <View tabLabel='Login' style={{ width:screenWidth, height:screenHeight }}>
            <View style={{display:'flex', flexDirection:'row', marginTop:20, justifyContent:"center", width:screenWidth, height:screenHeight*.08}}>
              <Image
                source={require("../Images/User.png")}
                style={{
                  width: Dimensions.get("window").width * 0.09,
                  height: Dimensions.get("window").height * 0.05,
                  //marginRight: 10,
                  marginLeft: 5,
                  marginTop:10,
                  alignItems:'center',
                  
                }}
              /> 
            <TextInput
              style={{
                width: Dimensions.get("window").width-60,
                height:screenHeight*.056,
                fontSize: 14,
                marginTop:8,
                marginLeft:9,
                borderBottomWidth:2,
                borderBottomColor: this.state.isFocused ? BLUE : LIGHT_GREY, 
                backgroundColor:'#fff',
              }}
              onFocus={this.handleFocus}
              onBlur={this.handleBlue}
              placeholder="Email address"
              placeholderTextColor='silver'
              onChangeText={(text)=> this.LoginEmailchange(text)}
              value={this.state.email}
            />
            </View>
            <View style={{display:'flex', flexDirection:'row', marginTop:10, justifyContent:"center", width:screenWidth, height:screenHeight*.08}}>
              <Image
                source={require("../Images/Lock.jpg")}
                style={{
                  width: Dimensions.get("window").width * 0.09,
                  height: Dimensions.get("window").height * 0.05,
                  //marginRight: 10,
                  marginLeft: 5,
                  marginTop:10,
                  alignItems:'center',
                }}
              />
              <TextInput
                style={{
                  width: Dimensions.get("window").width-60,
                  height:screenHeight*.056,
                  fontSize: 14,
                  marginTop:8,
                  marginLeft:9,
                  borderBottomWidth:2,
                  borderBottomColor: this.state.explainFocused ? BLUE : LIGHT_GREY, 
                  backgroundColor:'#fff',
              }}
                onBlur={this.handleCommentBlue}
                onFocus={this.handleCommentFocus}
                placeholder="Password"
                placeholderTextColor='silver'
                secureTextEntry={true}
                onChangeText={(text)=> this.Passwordchange(text)}
                value={this.state.password}
              /> 
            </View>
            <View style={{width:screenWidth, height:screenHeight*.13}}>
              <Text style={styles.errorTextStyle}>{this.state.error101}</Text>
              <View style={{flex:0, paddingLeft:0, marginLeft:15, marginRight:15, marginTop:0, backgroundColor:'#eee'}}>
                {this.renderButton()}
              </View>
            </View>
            <View style={{width:screenWidth, height:screenHeight*.04}}>
              <TouchableOpacity style={{ marginRight:15 }} onPress={this.onForgetPassword}>
                <Text style={{color: '#48D1CC', fontWeight: 'bold', textAlign:'right', alignItems:'center', fontSize:15}}>Forget Password</Text>
              </TouchableOpacity>
            </View>
            <View style={{display:'flex', flexDirection:'row', width:screenWidth, justifyContent:'center', marginTop:20}}>
              <Text style={{color:'black', fontSize:8 }} >____________________</Text>
              <Text style={{color:'black', fontSize:14 }} > OR LOG IN WITH </Text>
              <Text style={{color:'black', fontSize:8 }} >____________________</Text>
            </View>
            <View style={{width:screenWidth-30, marginLeft:15, marginTop:19}}>
              <TouchableOpacity onPress={this.onAuthComplete} >
                {/* <Image
                  source={require("../Images/facebook.png")}
                  style={{
                  width: Dimensions.get("window").width * 0.8,
                  height: Dimensions.get("window").height * 0.05,
                  marginRight: 10,
                  marginLeft: 23,
                  marginTop:5
                  }}
                /> */}
                <SocialIcon title='Sign In With Facebook'
                            button
                            onPress={this.onAuthComplete}
                            style={{width: screenWidth-39}}
                            type='facebook' />
                {/* <Text style={{textAlign:'center',color:'white',paddingLeft:60,alignItems:'center',justifyContent:'center', paddingTop:3, fontSize:16}}>Facebook</Text> */}
              </TouchableOpacity>
            </View>
           
          </View>
          <View tabLabel="Sign Up" style={{ backgroundColor:'white' , width:screenWidth }}>
            <View style={{display:'flex', flexDirection:'row', width:screenWidth, height:screenHeight*.07}}>
              <TextInput
                style={{
                  width: Dimensions.get("window").width*.45,
                    height:screenHeight*.056,
                    fontSize: 14,
                    marginTop:8,
                    marginLeft:10,
                    borderBottomWidth:2,
                    borderBottomColor: this.state.isFocused ? BLUE : LIGHT_GREY, 
                    backgroundColor:'#fff',
                    //borderRadius: 5
                }}
                placeholder="First Name"
                placeholderTextColor='silver'
                onChangeText={(text)=> this.Namechange(text)}
                value={this.state.Fname}
                onFocus={this.handleFocus}
                onBlur={this.handleBlue}
              />
              <TextInput
                style={{
                    width: Dimensions.get("window").width*.45,
                    height:screenHeight*.056,
                    fontSize: 14,
                    marginTop:8,
                    marginLeft:15,
                    borderBottomWidth:2,
                    borderBottomColor: this.state.explainFocused ? BLUE : LIGHT_GREY, 
                    backgroundColor:'#fff',
                }}
                placeholder="Last Name"
                placeholderTextColor='silver'
                onChangeText={(text)=> this.LastNamechange(text)}
                value={this.state.Lname}
                onBlur={this.handleCommentBlue}
                onFocus={this.handleCommentFocus}
              />
            </View>
            <View style={{marginTop:20}}>
              <TextInput
                style={{
                  width: Dimensions.get("window").width-20,
                  height:screenHeight*.056,
                  fontSize: 14,
                  marginTop:8,
                  marginLeft:9,
                  borderBottomWidth:2,
                  borderBottomColor: this.state.isEmailFocused ? BLUE : LIGHT_GREY, 
                  backgroundColor:'#fff',
                }}
                placeholder="Email"
                placeholderTextColor='silver'
                onChangeText={(text)=> this.SignupEmailchange(text)}
                value={this.state. signUpemail}
                onBlur={this.handleEmailBlue}
                onFocus={this.handleEmailFocus}
              />
            </View>
            <View style={{display:'flex', flexDirection:'row', width:screenWidth, height:screenHeight*.07, marginTop:20}}>
            <TextInput
              style={{
                width: Dimensions.get("window").width*.45,
                  height:screenHeight*.056,
                  fontSize: 14,
                  marginTop:8,
                  marginLeft:10,
                  borderBottomWidth:2,
                  borderBottomColor: this.state.isPasswordFocused ? BLUE : LIGHT_GREY, 
                  backgroundColor:'#fff',
              }}
              placeholder="Password"
              placeholderTextColor='silver'
              secureTextEntry={true}
              onChangeText={(text)=> this.SignupPasschange(text)}
              value={this.state. signUppassword}
              onBlur={this.handlePasswordBlue}
              onFocus={this.handlePasswordFocus}
            />
              <TextInput
                style={{
                  width: Dimensions.get("window").width*.45,
                  height:screenHeight*.056,
                  fontSize: 14,
                  marginTop:8,
                  marginLeft:15,
                  borderBottomWidth:2,
                  borderBottomColor: this.state.isConfirmFocused ? BLUE : LIGHT_GREY, 
                  backgroundColor:'#fff',
                }}
                placeholder="Confirm Password"
                secureTextEntry={true}
                placeholderTextColor='silver'
                onChangeText={(text)=> this.SignupPassConfirmchange(text)}
                value={this.state.signupPassConfirm}
                onBlur={this.handleConfirmPassBlue}
                onFocus={this.handleConfirmPassFocus}
              />
            </View>
            <View style={{width:screenWidth, marginTop: 20}}>
              <View style={{paddingLeft:0, marginLeft:15, marginRight:15, marginTop:20}}>
                {this.renderSignUpButton()}
              </View>
              <Text style={styles.notificationTextStyle}>{this.state.error}</Text>
            </View>
          </View>
          </ScrollableTabView>
        </View>
        </LinearGradient>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1DBF73',
    width: screenWidth,
    height: screenHeight
  },
  tabStyle: {
  },
 scrollStyle: {
   backgroundColor: 'white',
    justifyContent: 'center',
 },
 tabBarTextStyle: {
   fontSize: 22,
   fontWeight: 'normal',

   },
   errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
 underlineStyle: {
   height: 3,
   backgroundColor: 'black',
   borderRadius: 3,
   width: 100,
 },
 errorTextStyle: {
  fontSize: 20,
  alignSelf: 'center',
  alignContent:'center',
  color: 'red'
},
notificationTextStyle: {
  fontSize: 20,
  alignSelf: 'center',
  alignContent:'center',
  color: 'red'
},
});
function mapStateToProps  ({auth}, {state})  {
  return {
      auth:auth.resp,
      token: auth.token,
      state
  };
}

export default connect(mapStateToProps, actions)(Auth);