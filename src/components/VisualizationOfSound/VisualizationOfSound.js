import React, {useEffect, useRef} from "react";
import {Box} from "@mui/system";

const VisualizationOfSound = ({audioRef, setContext}) => {
    const canvasRef = useRef(null)

    const audioVisualizerLogic = () => {
        const context = new (window.AudioContext || window.webkitAudioContext)()
        setContext(context)

        const audio = audioRef.current
        const canvas = canvasRef.current

        const analyser = context.createAnalyser()
        const ctx = canvas.getContext("2d")
        let audioSrc = context.createMediaElementSource(audio)
        audio.crossOrigin = "anonymous"
        audioSrc.connect(analyser)
        audioSrc.connect(context.destination)
        analyser.connect(context.destination)

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)
        const WIDTH = canvas.width
        const HEIGHT = canvas.height
        const barWidth = (WIDTH / bufferLength) * 2.5;

        let barHeight = null
        let x = null;

        //core logic for the visualizer
        const timeouts = [];
        const renderFrame = () => {
            ctx.fillStyle = "rgba(0,0,0,0)";
            requestAnimationFrame(renderFrame);
            x = 0;
            analyser.getByteFrequencyData(dataArray);
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            for (let i = 0; i < bufferLength; i++) {
                //color based upon frequency
                barHeight = dataArray[i];
                let r = barHeight + 44 * (i / bufferLength)
                let g = 333 * (i / bufferLength)
                let b = 444;
                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillRect(x,  HEIGHT - barHeight, barWidth, barHeight);
                x += barWidth + 1;

                //Allows visualizer to overlay on a background/video by clearing the rects after painting.
                let timer = setTimeout(() => {
                    ctx.clearRect(0, 0, WIDTH, HEIGHT);
                }, 50);
                timeouts.push(timer);
            }
        };
        //Clears the accumulating timeouts.
        setTimeout(() => {
            for (let i = 0; i < timeouts.length; i++) {
                return clearTimeout(timeouts[i]);
            }
        }, 51);
        renderFrame();
    };

    //connect audio visualizer to DOM and execute logic
    useEffect(() => {
        if (audioRef) audioVisualizerLogic()
    }, [ audioRef ])

    return (
        <Box className={'canvas'}>
            <canvas ref={canvasRef} className={'myCanvas'}></canvas>
        </Box>
    )
}

export default VisualizationOfSound
