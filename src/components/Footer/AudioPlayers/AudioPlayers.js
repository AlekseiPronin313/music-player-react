import React, {useEffect, useRef, useState} from "react";
import PanelButtons from "./PanelButtons/PanelButtons";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {calculateTime} from "../../../context/СalculateTime";
import {nextTrack} from "../../../redux/stateReducer";
import {useDispatch} from "react-redux";

function AudioPlayers ({ openPlaylist, musicPlay, playing, setAudioRef, context}) {
    const [statevolum, setStateVolum] = useState(0.5)
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const track = musicPlay.fileUrl


    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();
    const dispatch = useDispatch()

    useEffect(() => {
        setIsPlaying(true)
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    useEffect(() => {
        if (track) {
            setIsPlaying(false)
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
            setAudioRef(audioPlayer)
        }
    },[track])

    const clickNextTrack = () => {
        dispatch(nextTrack(musicPlay.id))
        if (isPlaying === true) {
            audioPlayer.current.play()
        }
        setIsPlaying(false)
    }

    const handleVolume = (value) => {
        setStateVolum(value)
        audioPlayer.current.volume = value
    }

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            context.resume()
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            context.suspend()
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
        if (Math.floor(audioPlayer.current.duration) === Math.floor(audioPlayer.current.currentTime)) {
            clickNextTrack()
        }
    }

    return (
        <Box sx={{
            bgcolor: "#9e9e9e",
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
        >
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography>{duration? calculateTime(currentTime) : null}</Typography>
                <input className={'audio__input'} type={"range"} defaultValue="0"
                       ref={progressBar} onChange={changeRange}/>
                <Typography>{duration? calculateTime(duration) : null}</Typography>
            </Box>
            <audio className={'audio__player'}
                   ref={audioPlayer}
                   src={track}
                   preload="metadata"></audio>

            <PanelButtons togglePlayPause={togglePlayPause}
                          openPlaylist={openPlaylist} statevolum={statevolum}
                          isPlaying={isPlaying} clickNextTrack={clickNextTrack}
                          musicPlay={musicPlay} handleVolume={handleVolume}
                          playing={playing} setIsPlaying={setIsPlaying}
            />
        </Box>
    )
}

export default AudioPlayers
