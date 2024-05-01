import { GET_USERS } from '../types/users';
import mockUsers from '../../mocks/users.json';

const initialState = {
    users: mockUsers
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: [...state.users, action.payload] };
        default:
            return state;
    }
};

export default userReducer;