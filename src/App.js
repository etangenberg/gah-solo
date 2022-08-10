import React, { useState } from 'react';

import './App.css';
import generateShuffledKeys from './generate-shuffled-keys';
import TileElement from './tile-element';

const getImageSrc = (id) => id ?`./images/automa_${id}.png` : './images/automa_back.png';

const cards = generateShuffledKeys(20, 20);
function App() {
  const [cardNo, setCardNo] = useState();

  const setNext = () => {
    if (cardNo === undefined) setCardNo(0);
    else if (cardNo < 20) setCardNo(cardNo + 1);
  }

  const setPrev = () => {
    if (cardNo >= 0) setCardNo(cardNo - 1);
  }

  return (
    <div className="App">
      <div className="controls">
        <button onClick={setPrev} disabled={!cardNo} >Prev</button>
        <div className="cardNo">{cardNo}</div>
        <button onClick={setNext}>Next</button>
      </div>
      <TileElement
        className="card"
        src={getImageSrc(cards[cardNo])}
        id={cardNo}
      />
    </div>
  );
}

export default App;
