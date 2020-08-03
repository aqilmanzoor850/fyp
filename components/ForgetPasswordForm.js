import React , {Component} from 'react';
import {
  View,
  Text,Image,TextInput,Button,
  AsyncStorage, TouchableOpacity,StyleSheet, Keyboard, Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import firebase from 'firebase';

import Spinner from './Spinner';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class ForgetPassword extends Component {
  state = {
    email:'',
    passwordValue:'',
    error: '',
    signupPassConfirm:'',
    borderColor: "gray",
    borderWidth: 2,
    loading: false,
  };

  constructor(props){
    super(props);
    this.renderButton = this.renderButton.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  async onButtonPress(){
    //this.setState({loading: true});
    const {email} = this.state;
    console.log(email);
    
    console.log(this.props.resp1);
    // if(email!==null){
      await this.props.restPass(email);
      console.log(this.props.resp1);
      if(this.props.resp1){
        console.log('idhr koin a raha bsdk')
        //console.log(firebase.auth().confirmPasswordReset(email));
        //firebase.auth().confirmPasswordReset(email);
        this.onLoginSuccess();
      }else{
        this.onLoginFail2();
      }
    // }else{
    //   this.onLoginFail2();
    // }
    // await this.props.restPass(email);
    // if(this.props.auth1===null){
    //   console.log('auth hjja bro')
    // }
    // else{
    //   console.log('auth nai a')
    // }
  }

  renderButton() {
    if (this.state.loading) {
        return (<Spinner size={'small'} />);
    }
    return (
      <Button title="Submit"  onPress={this.onButtonPress}  color="#48D1CC" /> 
    );
  }

  onLoginFail2(){
    this.setState({error: 'Authentication Error', loading:false})
  }
  onLoginSuccess() {
      this.setState({
          email: '',
          password: '',
          loading: false,
          error: 'Check your email and Reset the password'
      });
  }

  LoginEmailchange( text ) {
    console.log('email change ho rhaa a na');
    this.setState({email:text})
  }
  Passwordchange( text ) {
    this.setState({passwordValue:text})
  }
  SignupPassConfirmchange( text ){
    this.setState({signupPassConfirm:text})
  }
  render() {
    return (
      <View style ={{flex:1}} >
      <View style = {styles.container} >
       
<Text style={{fontSize:35,marginTop:'10%',marginLeft:'5%',color:'#eee'}}>Forget Password</Text>
        </View>
        <View style={{flex:5, backgroundColor:'white'}}>
          <View style={{ flex:1, marginLeft:10, marginRight:10, marginBottom:10,marginTop:4, borderWidth:.2}}>

      <View tabLabel="Sign Up" style={{ backgroundColor:'white' , flex:1 }}>
        <View style={{flex:0.8 , borderWidth:0.3,borderRadius:4,  marginLeft:15, marginRight:15, marginTop:15 }} >
        <TextInput
           style={{
            width: Dimensions.get("window").width ,
            fontSize: 14,
            marginTop:8,marginLeft:10
          }}
          placeholder="Email"
          placeholderTextColor='silver'
          onChangeText={(text)=> this.LoginEmailchange(text)}
          value={this.state.email}
          />
        </View>
        
        <View style={{flex:3}}>
        
      <View style={{flex:.35, paddingLeft:0, marginLeft:15, marginRight:15, marginTop:20}}>
          {/* <Button title="Send Email" onPress={()=>{this.props.navigation.navigate('')}}  color="#1DBF73" /> */}
          {this.renderButton()}
      </View>
      <View style={{flex:.25, marginLeft:15, marginRight:15, marginTop:6}}>
      <Text style={styles.errorTextStyle}>{this.state.error}</Text>
      </View>
            
            </View>
            <View style={{flex:1}}></View>

      </View>
    </View>
        </View>
        </View>
    );
  }

}

const styles = StyleSheet.create ({
  container:{
    
    backgroundColor:'#48D1CC',
    height:screenHeight*.15,
    marginBottom:'5%'
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
});



// function mapStateToProps  ({auth})  {
//   console.log('mapstatetoprops');

//   //console.log(auth.resp1)
//   return {
//       auth: auth.resp1
//      //auth
//   };
// }

const mapStateToProps = ({auth}) => {
  const { resp1 } =  auth;

  return { resp1 };
};

export default connect(mapStateToProps, actions)(ForgetPassword);