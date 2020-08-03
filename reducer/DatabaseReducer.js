const INITIAL_STATE = { fname: '', lname: '', email: '', password: '' };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'auth_create':
            return INITIAL_STATE;
        default:
            return state;
    }
};