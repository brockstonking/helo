

let initialState = {
    username: '',
    profilePicture: ''
}

const DEFINE_USER = 'DEFINE_USER'

export const whichUser = (username, profilePicture) => {
    return {
        type: 'DEFINE_USER',
        payload: {
            username: username,
            profilePicture: profilePicture
        }
    }

}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case DEFINE_USER:
            return {
                ...state,
                username: payload.username,
                profilePicture: payload.profilePicture,
            }
        default:
            return state
    }

}

export default reducer;

