import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from "react-icons/fa";
import { music } from '../constants';

const Controllers = ({ currentSong, isPlaying, setIsPlaying }) => {
    const audioRef = useRef();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
        };

        const updateDuration = () => {
            setDuration(audio.duration);
        };

        const currentSongData = music.find(item => item.audio === currentSong);
        if (currentSongData) {
            setName(currentSongData.name);
            setAuthor(currentSongData.author);
        }

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
        };
    }, [currentSong, isPlaying]);

    function handlePlayPause() {
        setIsPlaying(!isPlaying);
    }

    function handleSeek(e) {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    return (
        <div className='bg-light flex flex-col items-center rounded-t-2xl md:rounded-none py-4 fixed bottom-0 w-full justify-center px-5 md:px-24'>
            <audio src={currentSong} ref={audioRef} />
            <div className='text-left md:pb-3 pb-4 w-full'>
                <p className='text-sm text-white line-clamp-1'>{name}</p>
                <p className='text-xs text-gray line-clamp-2'>{author}</p>
            </div>
            <input type='range' min="0" max={duration} value={currentTime || 0} className='h-1 accent-second w-full transition-all' onChange={handleSeek} />
            <div className='flex justify-between w-full text-sm text-white mt-3'>
                <p>{formatTime(currentTime)}</p>
                <p>{formatTime(duration)}</p>
            </div>
            <div className='text-black bg-second aspect-square p-2 rounded-full cursor-pointer mb-4' onClick={handlePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </div>
        </div>
    );
}

export default Controllers;
