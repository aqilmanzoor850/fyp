import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Spinner from './Spinner';

class SignUpForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { Fname: '', Lname: '', email: '', password: '', error: '', loading: false };
        this.onButtonPress = this.onButtonPress.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
    }

    onButtonPress() {
        let errorr = '', errorr1 = '', errorr2 = '',errorr3 = '';   
        console.log(this.state.Fname);
        console.log(this.state.Lname);
        if (this.state.Fname === '' ) {
            console.log('FNameFail');
            errorr2 = 'FName is invalid.';
    } else {
        console.log('FNameSuccess');
        errorr2 = '';
    }

    if (this.state.Lname === '' ) {
        console.log('LNameFail');
        errorr3 = 'LName is invalid.';
} else {
    console.log('LNameSuccess');
    errorr3 = '';
}


        let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email.match(regexp) === null ) {
                console.log('EmailFail');
                errorr = 'Email is invalid.';
        } else {
            console.log('EmailSuccess');
            errorr = '';
        }
    console.log('Email Entered');

        let regexp1 = /^(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        if (this.state.password.match(regexp1) === null ) {
            console.log('PasswordFail');
           errorr1 = 'Password is invalid.';
        } else {
            console.log('PasswordSuccess');
           errorr1 = '';
        }
        console.log('Password Entered')

        if(errorr1 == 'Password is invalid.' && errorr == 'Email is invalid.' )
        {
            console.log('gggg');
            this.onLoginFail();
        }
        else if ( errorr == 'Email is invalid.' )
        {
            this.setState({ error: errorr });
        }

        else if (errorr1 == 'Password is invalid.')
        {
            this.setState({ error: errorr1 });
        }
        else if (errorr2 == 'FName is invalid.')
        {
            this.setState({ error: errorr2 });
        }
        else if (errorr3 == 'LName is invalid.')
        {
            this.setState({ error: errorr3 });
        }
        
        else{
            this.setState({ error: '', loading: true });
            console.log('onButtonPress');
          this.props.createUser(this.state.email, this.state.password);
          console.log(this.state.Fname, this.state.Lname, this.state.email, this.state.password);
          this.props.authCreate(this.state.Fname, this.state.Lname, this.state.email, this.state.password)
          this.setState({Fname:'', Lname: '', email: '', password: '', loading: false, error: ''});
          this.props.callback();
        }
    }

    handleEmail(text) {
        this.setState({email: text});
      }

    handlePassword(text) {
        this.setState({password: text});
    }
    handleFirstName(text) {
        this.setState({Fname: text});
    }
    handleLastName(text) {
        this.setState({Lname: text});
    }
    onLoginSuccess() {
        this.setState({
            Fname: '',
            Lname: '',
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail() {
        console.log('onLoginFail');
        this.setState({ error: 'Form is not filled properly.', loading: false });
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

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="First Name"
                        placeholder="Enter Your First Name Here"
                        value={this.state.Fname}
                        onChangeText={this.handleFirstName}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="First Name"
                        placeholder="Enter Your First Name Here"
                        value={this.state.Lname}
                        onChangeText={this.handleLastName}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={this.handleEmail}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="password"
                        label="Password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={this.handlePassword} 
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
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
export const mapStateToProps = ({auth}, {state}) =>
  ({
    auth,
    state
  });
export default connect(mapStateToProps, actions)(SignUpForm);