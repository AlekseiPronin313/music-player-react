import songs from '../context/songs.json'

const SET_SONGS = 'SET_SONGS'
const IS_OPEN_PLAYLIST = 'IS_OPEN_PLAYLIST'

const initialState = {
    audio: [],
    isOpenPlaylist: false
}

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            return {
                ...state,
                audio: songs
            }
        case IS_OPEN_PLAYLIST:
            return {
                ...state,
                isOpenPlaylist: !state.isOpenPlaylist
            }
        default:
            return { state }
    }
}

export const setSongs = () => ({type: SET_SONGS})
export const isOpenPlaylist = () => ({type: IS_OPEN_PLAYLIST})

export default stateReducer
