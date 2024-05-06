import React, { useEffect, useRef, useState } from "react"
export default function Stopwatch(){
    const [isRunning,setIsRunning] =useState(false);
    const [elaspedTime,setElaspedTime] =useState(0);
    const intervalIdRef =useRef(null);
    const starttimeref =useRef(0);
    useEffect(()=>{
if (isRunning) {
   intervalIdRef.current =  setInterval(() => {
    setElaspedTime(Date.now() - starttimeref.current);

    }, 10);
    return ()=>{
        clearInterval(intervalIdRef.current);
    }
}
    },[isRunning])
    function start() {
        // console.log("start")
        setIsRunning(true);
        console.log(isRunning);
   
    starttimeref.current = Date.now() - elaspedTime;
    }
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setElaspedTime(0);
        setIsRunning(false);
    }
    function formattime() {
        let hours = Math.floor(elaspedTime/(1000*60*60))
        let minutes = Math.floor(elaspedTime/(1000*60) % 60)
        let seconds = Math.floor(elaspedTime/(1000) % 60)
        let milliseconds = Math.floor((elaspedTime %1000)/10);
        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds  = String(seconds ).padStart(2,"0");
        milliseconds= String(milliseconds).padStart(2,"0");
        return` ${hours}:${minutes}:${seconds}:${milliseconds}`
     }
    //  function padzero()
    return (<div className="stopwatch">
        <div className="display">{formattime()}</div>
        <div className="controls">
    <button className="start-button" onClick={start}>Start</button>
    <button className="stop-button" onClick={stop}>Stop</button>
    <button className="reset-button" onClick={reset}>Reset</button>


        </div>
    </div>)
}