import React, { useState } from 'react';
import './App.css';
import {SRLWrapper} from 'simple-react-lightbox';

function App() {
  const [results, setResults] = useState ([])
  const fetchImages = () => {
    fetch(`http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setResults(data)
      })
  }

  return (
    <SRLWrapper>
      <div className="App">
      <div className="header">
        <u><h1>Wall-Gallery</h1></u>
        <button onClick={() => fetchImages()}>Display</button>
      </div>
      <div className="gallery">
        {
          results.map((item,index)=>{
            return <img src={item.urls.regular} alt={item.alt_description} />
          })
        }
      </div>
    </div>
    </SRLWrapper>
  );
}

export default App;