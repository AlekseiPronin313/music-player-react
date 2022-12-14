import * as React from "react";
import Footer from "./Footer";
import {useDispatch, useSelector} from "react-redux";
import {isOpenPlaylist} from "../../redux/stateReducer";

function FooterContainer({setAudioRef,context}) {
    const dispatch = useDispatch()
    const openPlaylist = () => {
        dispatch(isOpenPlaylist())
    }
    const musicPlay = useSelector(state => state.state.playAudio)
    const playing = useSelector(state => state.state.playing)
  return (
        <Footer openPlaylist={openPlaylist} musicPlay={musicPlay}
                setAudioRef={setAudioRef} context= {context} playing={playing}/>
  );
}

export default FooterContainer;
