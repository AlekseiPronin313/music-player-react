import * as React from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import {setSongs} from '../../redux/stateReducer'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function TemporaryDrawerContainer() {
    const dispatch = useDispatch()

    const songs = useSelector(state => state.state.songList)
    const isOpen = useSelector(state => state.state.isOpenPlaylist)
    const selectedTrack = useSelector(state => state.state.selectedTrack)

    useEffect(() => {
        dispatch(setSongs())
    },[])

    {
       if (songs) return (
            <TemporaryDrawer songs={songs} isOpen={isOpen} selectedTrack={selectedTrack}/>
        )
    }

}

export default TemporaryDrawerContainer;
