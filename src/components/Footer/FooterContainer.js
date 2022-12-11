import * as React from "react";
import Footer from "./Footer";
import {useDispatch, useSelector} from "react-redux";
import {isOpenPlaylist} from "../../redux/stateReducer";
import {useState} from "react";

function FooterContainer() {
    const dispatch = useDispatch()
    const [isPlay, setIsPlay] = useState(false)
    const openPlaylist = () => {
        dispatch(isOpenPlaylist())
    }

    const musicPlay = useSelector(state => state.state.playAudio)
    const clickPlay = () => {
        setIsPlay(!isPlay)
    }
  return (
        <Footer openPlaylist={openPlaylist} clickPlay={clickPlay} isPlay={isPlay} musicPlay={musicPlay}/>
  );
}

export default FooterContainer;
