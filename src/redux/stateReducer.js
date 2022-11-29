import songs from '../context/songs.json'

const SET_SONGS = 'stateReducer/SET_SONGS'
const IS_OPEN_PLAYLIST = 'stateReducer/IS_OPEN_PLAYLIST'
const IS_LIKE = 'stateReducer/LIKE'

const data = songs.songs

const initialState = {
    audio: [],
    isOpenPlaylist: false
}

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            return {
                ...state,
                audio: data
            }
        case IS_OPEN_PLAYLIST:
            return {
                ...state,
                isOpenPlaylist: !state.isOpenPlaylist
            }
        case IS_LIKE:
            return  {
                ...state,
                audio: state.audio.map(track => {
                    if (track.id === action.trackId)
                        return {
                            ...track, isLike: !track.isLike
                        }
                    return track
                })
            }
        default:
            return { state }
    }
}

export const setSongs = () => ({type: SET_SONGS})
export const isOpenPlaylist = () => ({type: IS_OPEN_PLAYLIST})
export const isLikes = (trackId) => ({type: IS_LIKE, trackId})

export default stateReducer
