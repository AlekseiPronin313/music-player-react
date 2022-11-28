import * as React from "react";
import Footer from "./Footer";
import {useDispatch} from "react-redux";
import {isOpenPlaylist} from "../../redux/stateReducer";

function FooterContainer() {
    const dispatch = useDispatch()

    const openPlaylist = () => {
        dispatch(isOpenPlaylist())
    }

  return (
        <Footer openPlaylist={openPlaylist}/>
  );
}

export default FooterContainer;
