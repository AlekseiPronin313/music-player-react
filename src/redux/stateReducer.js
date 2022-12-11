import song_list from '../context/song_list.json'

const SET_SONGS = 'stateReducer/SET_SONGS'
const IS_OPEN_PLAYLIST = 'stateReducer/IS_OPEN_PLAYLIST'
const IS_LIKE = 'stateReducer/LIKE'
const PLAY_AUDIO = 'stateReducer/PLAY_AUDIO'
const SET_CURRENT_SONG = 'stateReducer/SET_CURRENT_SONG'



const initialState = {
    currentSong: 0,
    songList: song_list.songs,
    isOpenPlaylist: false,
    audio: null,
    playAudio: {}
}

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            return {
                ...state,
                songList: state.songList
            }
        case IS_OPEN_PLAYLIST:
            return {
                ...state,
                isOpenPlaylist: !state.isOpenPlaylist
            }
        case IS_LIKE:
            return {
                ...state,
                songList: state.songList.map(track => {
                    if (track.id === action.trackId) {
                        return {...track, isLike: !track.isLike}
                    }
                    return track
                })
            }
        case PLAY_AUDIO:
            return {
                ...state,
                playAudio: state.songList.find(track => track.id === action.trackId)
            }
        default:
            return state
    }
}

export const setSongs = () => ({type: SET_SONGS})
export const isOpenPlaylist = () => ({type: IS_OPEN_PLAYLIST})
export const isLikes = (trackId) => ({type: IS_LIKE, trackId})
export const playAudio = (trackId) => ({type: PLAY_AUDIO, trackId})
//
// export const setCurrent = (trackId) => ({type: SET_CURRENT_SONG, trackId})


export default stateReducer
