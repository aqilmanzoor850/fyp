const INITIAL_STATE = {
    token: null,
    resp: null,
    resp1: null
  };

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'facebook_login_success':
            return {token: action.payload};
        case 'facebook_login_fail':
            return {token: null};
        case 'facebook_logout':
            return {token: null};
        case 'create_user_success':
            return {resp: action.payload};
        case 'create_user_fail':
            return {resp: null};
        case 'user_login_success':
            return {resp: action.payload};
        case 'login_fail':
            return {resp: null};
        case 'reset_pass_success':
            console.log('reset PASS')
            return { ...state, resp1: true};
        case 'reset_pass_fail':
            console.log('reset fail')
            return {resp1: null};
           // console.log(resp1);
        case 'problem_stored':
            return {...state, resp1: true};
        default:
            return state;
    }
}