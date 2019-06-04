

let initialState = {
    username: '',
    profilePicture: '',
    id: null
}

const DEFINE_USER = 'DEFINE_USER'

export const whichUser = (id, username, profilePicture) => {
    return {
        type: 'DEFINE_USER',
        payload: {
            id: id,
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
                id: payload.id
            }
        default:
            return state
    }

}

export default reducer;

