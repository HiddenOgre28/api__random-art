import React, { useState, useEffect } from 'react';
import './App.scss';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar'

function App() {
  /* STATES */
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  /* GETS A RANDOM NUMBER FOR THE API */
  const getRandomNum = (num) => {
    return Math.floor(Math.random() * num);
  };

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const getArtwork = () => {
    setPage(getRandomNum(507));
    setIndex(getRandomNum(12));
    moveScrollBar();
  }

  const moveScrollBar = () => {
    window.scroll(0, 0);
  }

  useEffect( () => {
    setLoading(true);
    fetch(
      `https://api.artic.edu/api/v1/artworks?page=${page}`,
      { mode: "cors" }
    )
      .then( response => response.json() )
      .then( response => {
          setLoading(false);
          setImage(`https://www.artic.edu/iiif/2/${response.data[index].image_id}/full/843,/0/default.jpg` )
          setArtist(response.data[index].artist_title )
          setTitle(response.data[index].title )
        })
      .catch( error => {
        setImage("https://cultivatevynerstreet.files.wordpress.com/2013/11/error-404-original.jpg")
        setArtist(null)
        setTitle(null)
      })
  }, [index, page]);

  return (
    <div className="App">
      <Header getArtwork={getArtwork} moveScrollBar={moveScrollBar} showSidebar={showSidebar}/>
      <div className='App__container'>
        <Content image={image} title={title} artist={artist} loading={loading}/>
        <Sidebar sidebar={sidebar} showSidebar={showSidebar}/>
      </div>
    </div>
  );
}

export default App;
