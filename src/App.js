import { faPause, faPlay, faRandom, faRedo, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

import { songs as songsData } from "./mockData/songs"
import './App.css';

const App = () => {
  const sizeCdDefault = 200

  const [songs, setSongs] = useState(songsData)
  const [cd, setCd] = useState({
    size: sizeCdDefault,
    opacity: 1
  })
  const [limitIndexSong, setLimitIndexSong] = useState({
    min: 0,
    max: songs.length - 1
  })
  const [currentSong, setCurrentSong] = useState({
    index: limitIndexSong.min,
    isPlaying: false,
    timeLine: 0
  })
  const [songRepeat, setSongRepeat] = useState(false)
  const [songRandom, setSongRandom] = useState(false)
  const [cdThumbAnimate, setCdThumbAnimate] = useState({})
  const [volume, setVolume] = useState(100)
  const [storageSongs, setStorageSongs] = useState([limitIndexSong.min])

  const cdThumb = useRef();
  const btnNext = useRef();
  const inputAudio = useRef();
  const didUpdate = useRef(false);
 
  const handlePlay = () => {
    cdThumbAnimate.play()
    setCurrentSong({
      ...currentSong,
      isPlaying: true
    })
  }

  const handlePause = () => {
    cdThumbAnimate.pause()
    setCurrentSong({
      ...currentSong,
      isPlaying: false
    })
  }

  const onTogglePlay = () => {
    currentSong.isPlaying ? inputAudio.current.pause() : inputAudio.current.play()
  }

  const onChooseSong = (id) => {
    if (id !== currentSong.index) {
      setCurrentSong({
        ...currentSong,
        index: id,
        isPlaying: true,
        timeLine: 0
      })
    }
  }

  const onNextSong = () => {
    if (songRandom) {
      handleRandomSong()
    } else {
      setCurrentSong({
        ...currentSong,
        index: currentSong.index < limitIndexSong.max ? currentSong.index + 1 : 0
      })
    }
  }

  const onPrevSong = () => {
    if (songRandom) {
      handleRandomSong()
    } else {
      setCurrentSong({
        ...currentSong,
        index: currentSong.index === 0 ? limitIndexSong.max : currentSong.index - 1
      })
    }
  }

  const onRepeat = () => {
    setSongRepeat(!songRepeat)
  }

  const onRandom = () => {
    setSongRandom(!songRandom)
  }

  const handleRandomSong = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * songs.length)
    } while (newIndex === currentSong.index || storageSongs.some(song => song === newIndex))

    if(storageSongs.length === limitIndexSong.max) {
      setStorageSongs([])
    } else {
      setStorageSongs([
        ...storageSongs,
        newIndex
      ]) 
    }

    setCurrentSong({
      ...currentSong,
      index: newIndex
    })
  }

  const handleTimeLineSong = () => {
    if (inputAudio.current.duration) {
      setCurrentSong({
        ...currentSong,
        timeLine: Math.floor((inputAudio.current.currentTime / inputAudio.current.duration) * 100)
      })
    }
  }

  const handleEndedSong  = () => {
    if (!songRepeat) {
      btnNext.current.click()
    }
  }

  const onChangeTimeLineSong = e => {
    const seekto = inputAudio.current.duration * (+e.target.value / 100);
    inputAudio.current.currentTime = seekto;
    setCurrentSong({
      ...currentSong,
      timeLine: Math.floor(e.target.value)
    })
  }

  const onChangeVolume = e => {
    setVolume(+e.target.value)
    inputAudio.current.volume = +e.target.value / 100
  }

  useEffect(() => {

  })
  
  useEffect(() => {
    // inputAudio.current.controls = true
    setCdThumbAnimate(
      cdThumb.current.animate([{
        transform: "rotate(360deg)"
      }], {
        duration: 10000,
        iterations: Infinity
      })
    )
  }, [])

  useEffect(() => {
    if (didUpdate.current) {
      cdThumbAnimate.pause()
    }
  }, [cdThumbAnimate])

  useEffect(() => {
    if (didUpdate.current) {
      inputAudio.current.play()
    } else {
      didUpdate.current = true
    }
  }, [currentSong.index])

  useEffect(() => {
    if (songRepeat) {
      inputAudio.current.loop = true
    } else {
      inputAudio.current.loop = false
    }
  }, [songRepeat])

  document.onscroll = () => {
    const newSizeCd = sizeCdDefault - window.scrollY
    setCd({
      size: newSizeCd > 0 ? newSizeCd : 0,
      opacity: newSizeCd > 0 ? newSizeCd / sizeCdDefault : 0
    })
  }

  return (
    <>
      <div className={`player ${currentSong.isPlaying ? 'playing' : ''}`}>
        {/* Dashboard */}
        <div className="dashboard">
          {/* Header */}
          <header>
            <h4>Now playing:</h4>
            <h2>{songs[currentSong.index].name}</h2>
          </header>

          {/* CD */}
          <div className="cd" style={{ width: cd.size, opacity: cd.opacity }}>
            <div 
              className="cd-thumb" 
              style={{ backgroundImage: `url(${songs[currentSong.index].image})` }}
              ref={cdThumb}
            >
            </div>
          </div>

          {/* Control */}
          <div className="control">
            <div 
              className={`btn btn-repeat ${songRepeat ? 'active' : ''}`}
              onClick={onRepeat}
            >
              <FontAwesomeIcon icon={faRedo} />
            </div>
            <div 
              className="btn btn-prev"
              onClick={onPrevSong}
            >
              <FontAwesomeIcon icon={faStepBackward} />
              <i className="fas fa-step-backward"></i>
            </div>
            <div 
              className={`btn btn-toggle-play`}
              onClick={onTogglePlay}
            >
              <FontAwesomeIcon icon={faPause} className="icon-pause" />
              <FontAwesomeIcon icon={faPlay} className="icon-play"  />
            </div>
            <div 
              className="btn btn-next"
              ref={btnNext}
              onClick={onNextSong}
            >
              <FontAwesomeIcon icon={faStepForward} />
            </div>
            <div 
              className={`btn btn-random ${songRandom ? 'active' : ''}`}
              onClick={onRandom}
            >
              <FontAwesomeIcon icon={faRandom} />
            </div>
            <div className="">
              <input 
                id="volume" 
                className="volume" 
                type="range" 
                value={volume}
                step={1} 
                min={0} 
                max={100} 
                onChange={onChangeVolume}
              />
            </div>
          </div>

          <input 
            id="progress" 
            className="progress" 
            type="range" 
            value={currentSong.timeLine}
            step={1} 
            min={0} 
            max={100} 
            onChange={onChangeTimeLineSong}
          />

          <audio 
            id="audio" 
            ref={inputAudio} 
            src={`songs/${songs[currentSong.index].path}`}
            onPlay={handlePlay}
            onPause={handlePause}
            onTimeUpdate={handleTimeLineSong}
            onEnded={handleEndedSong}
          >

          </audio>
        </div>

        {/* Playlist */}
        <div className="playlist">
          {
            songs.map((song, index) => (
              <div 
                key={index}
                className={`song ${index === currentSong.index ? 'active' : ''}`}
                onClick={() => onChooseSong(index)}
              >
                <div className="thumb" style={{ backgroundImage: `url(${song.image})`}}></div>

                <div className="body">
                  <h3 className="title">{song.name}</h3>
                  <p className="author">{song.singer}</p>
                </div>

                <div className="option">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
