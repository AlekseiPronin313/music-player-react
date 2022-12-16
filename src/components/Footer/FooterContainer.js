import * as React from "react";
import Footer from "./Footer";
import {useDispatch, useSelector} from "react-redux";
import {isOpenPlaylist} from "../../redux/stateReducer";

function FooterContainer() {
    const dispatch = useDispatch()
    const openPlaylist = () => {
        dispatch(isOpenPlaylist())
    }
    const musicPlay = useSelector(state => state.state.playAudio)
  return (
        <Footer openPlaylist={openPlaylist} musicPlay={musicPlay}/>
  );
}

export default FooterContainer;
