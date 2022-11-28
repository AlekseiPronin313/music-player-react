import * as React from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import {setSongs} from '../../redux/stateReducer'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function TemporaryDrawerContainer() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSongs())
    }, [])

    const songs = useSelector(state => state.state.audio)
    const isOpen = useSelector(state => state.state.isOpenPlaylist)

    {
      if (songs)  return (
            <TemporaryDrawer songs={songs} isOpen={isOpen}/>
        )
    }
}

export default TemporaryDrawerContainer;
