import * as React from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import {setSongs} from '../../redux/stateReducer'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function TemporaryDrawerContainer() {
    const dispatch = useDispatch()

    const songs = useSelector(state => state.data.audio)
    const isOpen = useSelector(state => state.data.isOpenPlaylist)

    useEffect(() => {
        dispatch(setSongs())
    },[])
    {
      if (songs)  return (
            <TemporaryDrawer songs={songs} isOpen={isOpen}/>
        )
    }
}

export default TemporaryDrawerContainer;
