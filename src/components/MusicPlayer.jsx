import React, { useRef, useState } from 'react';
import { music } from '../constants';
import { FaPlayCircle } from "react-icons/fa";
import Controllers from './Controllers';
import Navbar from '../components/Navbar';

const MusicPlayer = () => {
  const [icons, setIcons] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [search, setSearch] = useState("");

  function handleIcons(id) {
    setIcons(true);
  }

  function moveSong(id) {
    const selectedSong = music.find(item => item.id === id);
    setCurrentSong(selectedSong.audio);
    setIsPlaying(true);
  }

  const filteredMusic = music.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='overflow-y-scroll h-screen relative '>
      <div>
        <Navbar/>
      </div>
      <div className='px-5'>
        <input 
          type='text' 
          className='w-full py-4 text-white px-4 mt-5 bg-light outline-none' 
          placeholder='Search here'  
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-10 px-5 md:px-10 py-5 md:py-10'>
        {filteredMusic.map(item => (
          <div 
            key={item.id} 
            className='cursor-pointer md:hover:scale-110 md:block space-x-5 w-full flex items-center p-4 transition-all' 
            onMouseEnter={() => handleIcons(item.id)}  
            onClick={() => moveSong(item.id)}
          >
            <div className='relative'>
              <img src={item.img} className='w-16 md:w-full aspect-square object-cover'/>
              <div className='hidden md:block absolute text-xl bg-second rounded-full right-0 p-2 bottom-0'>
                <FaPlayCircle/>
              </div> 
            </div>
            <div className='w-full'>
              <p className='text-white text-sm mt-2 line-clamp-1'>{item.name}</p>
              <p className='text-gray text-xs line-clamp-1'>{item.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full pb-52'>
        <Controllers currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
    </div>
  );
}

export default MusicPlayer;
