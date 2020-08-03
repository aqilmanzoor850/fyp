import React from 'react';
import { Text, Image, Dimensions, TouchableHighlight, AsyncStorage, BackHandler } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Spinner from './Spinner';
import SignUpScreen from '../screens/SignUpScreen';
import { functions } from 'firebase';

const screenWidth = Math.round(Dimensions.get('window').width);

const token = AsyncStorage.getItem('secure_token');
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
        this.onButtonPress = this.onButtonPress.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
        this.onAuthComplete = this.onAuthComplete.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }

   async onButtonPress(props) {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
       await this.props.loginUser(email, password);
        if(this.props.auth){
            console.log('hello g')
            this.onLoginSuccess();
            this.props.signInCallBack();
        }
        else{
            this.onLoginFail();
            console.log(props.token);
        }
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return (<Spinner size={'small'} />);
        }
        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        );
    }

    async onAuthComplete(props){
        await this.props.facebookLogin();
        if(this.props.token){
        console.log("hhh")           
            this.props.callback();
        }
    }

    onSignUp(props){
            this.props.signUpCallBack();
    }

    render() {
        return ( 
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="password"
                        label="Password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={passwrd => this.setState({ password: passwrd })} 
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <CardSection>
                    <TouchableHighlight onPress={this.onAuthComplete}>
                        <Image style={{width:screenWidth-22, height: 40, justifyContent: 'center', alignItems: 'center'}} source={require("../Images/facebook.png")} />
                    </TouchableHighlight>
                </CardSection>
                <CardSection>
                    <Text style={styles.signupStyle}>If u dont have an account </Text>
                        <Text style={{color: 'blue', fontWeight: 'bold'}}
                        onPress={this.onSignUp}>SignUp</Text>
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    signupStyle: {
        fontSize: 10,
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    }
};

function mapStateToProps  ({auth})  {
    console.log('mapstatetoprops');
    //console.log(auth.token);
    console.log(auth.resp)
    return {
        auth:auth.resp,
        token: auth.token,
    };
}

export default connect(mapStateToProps, actions)(LoginForm);
