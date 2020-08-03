import { AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';


const setToken = async (token) => {
    await AsyncStorage.setItem('secure_token', token);
};

const getToken = async () => {
    return await AsyncStorage.getItem('secure_token');
};

export const facebookLogin = () => async dispatch => {
    // let token = await AsyncStorage.getItem('fb_token');
    // console.log(token);
   
    const get = getToken();
    if(get){
        await Facebook.initializeAsync('2282637398525157');
        const {type, token} = await Facebook.logInWithReadPermissionsAsync( {
            permissions: ['public_profile']
        });
        console.log(token);
        setToken(token);
        if(type === 'cancel'){
            return dispatch({type: 'facebook_login_fail'})
        }
        else if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.type(large)`
              );
              const { picture, name, email } = await response.json();
              console.log(name);
              console.log(email);
              const credentials = firebase.auth.FacebookAuthProvider.credential(token);
              firebase.auth().signInWithCredential(credentials);
              dispatch({type: 'facebook_login_success', payload: token});

            let rootRef = firebase.database().ref();
            rootRef
            .child('auth')
            .orderByChild('email')
            .equalTo(email)
            .once('value')
            .then(snapshot => {
                if(snapshot.exists()){
                console.log('pehel se ha')
                }
                else{
                firebase.database().ref(`/auth/`)
                    .push({ name, email, picture })
                    .then(() => { 
                        dispatch({ type: 'auth_create' });
                        Actions.pop({ type: 'rest' }); 
                    });
                }
            })
        }
    }  
}

// const doFacebookLogin = async (dispatch) => {
//     const {type, token} = await Facebook.logInWithReadPermissionsAsync('2282637398525157', {
//         permissions: ['public_profile']
//     });
//     console.log(token);
//         if(type === 'cancel'){
//             return dispatch({type: 'facebook_login_fail'})
//     }
//     console.log(token);
//     const credentials = firebase.auth.FacebookAuthProvider.credential(token);
//         firebase.auth().signInWithCredential(credentials);
//     dispatch({type: 'facebook_login_success', payload: token})
// };



export const facebookLogout = () => async dispatch => {
    let key = getToken();
    if(key){
        console.log('tokeen la lo');
        console.log(AsyncStorage.getItem('secure_token'));
        await AsyncStorage.removeItem('secure_token');
        console.log( AsyncStorage.removeItem('secure_token'));
        dispatch({type: 'facebook_logout'})      
    }
}

export const createUser = (fname, email, pass) => dispatch => {
    console.log('resp');
    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((userCredentials) => {
            if(userCredentials.user){
                userCredentials.user.updateProfile({
                    displayName: fname
                })
                return dispatch(createUserSuccess(userCredentials));
            }
           
        })
        .then(()=>{
            console.log('email verified')
            firebase.auth().currentUser.sendEmailVerification();
            console.log('email verified2')
        })
        .catch((error) => dispatch(createUserFail));
}


export const createUserSuccess = (resp) => {
    setToken("^#€@£×&@€@¥×*@^@^yshwusjhdus");
    return {
        type: 'create_user_success',
        payload: resp,
    };
}

export const createUserFail = (error) => {
    return {
        type: 'create_user_fail'
    };
}

export const loginUser = (email, pass) => async dispatch => {
    console.log('login user');
   await firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((resp) => {
            console.log("resp");
            return (
            dispatch(loggedIn(resp))     
            ); 
        })
        .catch((error) => dispatch(LoginFail));
}

export const loggedIn = (resp) => {
    const tok = getToken();
    if (tok){
    return {
        type: 'user_login_success',
        payload: resp
    };
}else { return { type:'login_fail'}}}


export const LoginFail = (error) => {
    return {
        type: 'login_fail'
    };
}

export const authCreate = (fname, lname, email, password) => {
    console.log('database banany lgi a bhai');
    const { currentUser } = firebase.auth();
   // console.log(currentUser);
    console.log('Aya Current User?');
    return (dispatch) => {
        firebase.database().ref(`/auth/`)
            .push({ fname, lname, email, password })
            .then(() => { 
                dispatch({ type: 'auth_create' });
                Actions.pop({ type: 'rest' }); 
            });
    };
};

export const restPass = (email) => async dispatch => {
    console.log('reset password waly action main a tu rha a na ')
    await firebase.auth().sendPasswordResetEmail(email)
        .then((resp1)=>{                
            return(
                dispatch(resetSuccess())
            );
        })
        .catch(error => dispatch(resetFail(error)))
}

export const resetSuccess = () => {
    return {
        type: 'reset_pass_success'
    };
}

export const resetFail = (error) => {
    console.log('reset password fail')
    return {
        type: 'reset_pass_fail'
    };
}

export const problemStored = (name, uid, Langauge, descriptionText, explanationText, Upload) => async dispatch => {
    await firebase.database().ref('Probelms/React')
    .push({name, uid, Langauge, descriptionText, explanationText, Upload})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}

export const problemStored1 = (name, uid, Langauge, descriptionText, explanationText) => async dispatch => {
    await firebase.database().ref('Probelms/React')
    .push({name, uid, Langauge, descriptionText, explanationText})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}

export const AndroidproblemStored = (name, uid, Langauge, descriptionText, explanationText, Upload) => async dispatch => {
    await firebase.database().ref('Probelms/Android')
    .push({name, uid, Langauge, descriptionText, explanationText, Upload})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}
export const AndroidproblemStored1 = (name, uid, Langauge, descriptionText, explanationText) => async dispatch => {
    await firebase.database().ref('Probelms/Android')
    .push({name, uid, Langauge, descriptionText, explanationText})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}

export const PhpproblemStored = (name, uid, Langauge, descriptionText, explanationText, Upload) => async dispatch => {
    await firebase.database().ref('Probelms/Php')
    .push({name, uid, Langauge, descriptionText, explanationText, Upload})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}
export const PhpproblemStored1 = (name, uid, Langauge, descriptionText, explanationText) => async dispatch => {
    await firebase.database().ref('Probelms/Php')
    .push({name, uid, Langauge, descriptionText, explanationText})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}

export const PythonproblemStored = (name, uid, Langauge, descriptionText, explanationText, Upload) => async dispatch => {
    await firebase.database().ref('Probelms/Python')
    .push({name, uid, Langauge, descriptionText, explanationText, Upload})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}
export const PythonproblemStored1 = (name, uid, Langauge, descriptionText, explanationText) => async dispatch => {
    await firebase.database().ref('Probelms/Python')
    .push({name, uid, Langauge, descriptionText, explanationText})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}

export const CproblemStored = (name, uid, Langauge, descriptionText, explanationText, Upload) => async dispatch => {
    await firebase.database().ref('Probelms/C')
    .push({name, uid, Langauge, descriptionText, explanationText, Upload})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}
export const CproblemStored1 = (name, uid, Langauge, descriptionText, explanationText) => async dispatch => {
    await firebase.database().ref('Probelms/C')
    .push({name, uid, Langauge, descriptionText, explanationText})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}

export const AssemblyproblemStored = (name, uid, Langauge, descriptionText, explanationText, Upload) => async dispatch => {
    await firebase.database().ref('Probelms/Assembly')
    .push({name, uid, Langauge, descriptionText, explanationText, Upload})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}
export const AssemblyproblemStored1 = (name, uid, Langauge, descriptionText, explanationText) => async dispatch => {
    await firebase.database().ref('Probelms/Assembly')
    .push({name, uid, Langauge, descriptionText, explanationText})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}

export const MLproblemStored = (name, uid, Langauge, descriptionText, explanationText, Upload) => async dispatch => {
    await firebase.database().ref('Probelms/ML')
    .push({name, uid, Langauge, descriptionText, explanationText, Upload})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}
export const MLproblemStored1 = (name, uid, Langauge, descriptionText, explanationText) => async dispatch => {
    await firebase.database().ref('Probelms/ML')
    .push({name, uid, Langauge, descriptionText, explanationText})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}

export const DVproblemStored = (name, uid, Langauge, descriptionText, explanationText, Upload) => async dispatch => {
    await firebase.database().ref('Probelms/DV')
    .push({name, uid, Langauge, descriptionText, explanationText, Upload})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}
export const DVproblemStored1 = (name, uid, Langauge, descriptionText, explanationText) => async dispatch => {
    await firebase.database().ref('Probelms/DV')
    .push({name, uid, Langauge, descriptionText, explanationText})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}
export const AngularproblemStored = (name, uid, Langauge, descriptionText, explanationText, Upload) => async dispatch => {
    await firebase.database().ref('Probelms/Angular')
    .push({name, uid, Langauge, descriptionText, explanationText, Upload})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}
export const AngularproblemStored1 = (name, uid, Langauge, descriptionText, explanationText) => async dispatch => {
    await firebase.database().ref('Probelms/Angular')
    .push({name, uid, Langauge, descriptionText, explanationText})
    .then(() => { 
        dispatch({ type: 'problem_stored' });
        Actions.pop({ type: 'rest' }); 
    });
}