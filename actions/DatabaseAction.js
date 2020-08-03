import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export const authUpdate = ({ prop, value }) => {
    return {
        type: 'auth_update',
        payload: { prop, value }
    };
};
export const authCreate = ({ fname, lname, email, password }) => {
    // console.log('database banany lgi a bhai');
    // const { currentUser } = firebase.auth();
    // console.log(currentUser);
    // console.log('Aya Current User?');
    // return (dispatch) => {
    //     firebase.database().ref(`/users/${currentUser.uid}/auth`)
    //         .push({ fname, lname, email, password })
    //         .then(() => { 
    //             dispatch({ type: 'auth_create' });
    //             Actions.pop({ type: 'rest' }); 
    //         });
    // };
    console.log(fname, lname, email, password);
};
