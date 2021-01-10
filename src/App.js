import React from 'react';
import data from "./favorites"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './App.css';

const favorites = data.favorites;

class App extends React.Component {
  render() {
    return (
      <div className="favorite">
        <div className="favorite__header">
          <FontAwesomeIcon icon={faArrowLeft} color={ '#444444' }/>
          <h1>Favorites</h1>
          <FontAwesomeIcon icon={faEllipsisV} color={ '#444444' }/>
        </div>

        <div className="favorite__playlist">
          {favorites.map(item => (
            <div className="favorite__playlist__item">
              <div className="thumbnail">
              <img src={item.src} alt={item.songName} />
              </div>

              <div className="content">
                <h3>{item.songName}</h3>
                <span>{item.singerName}</span>
              </div>

              <div className="timeline">{item.timeline}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
