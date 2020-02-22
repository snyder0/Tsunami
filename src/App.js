import React, { useState } from 'react';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useMorph, easeOutSin, easeInSin } from 'react-morph';
import 'uikit/dist/css/uikit.min.css';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true)

  const morph = useMorph({
    isReversed: !toggle,
    easings: {
      translateX: easeOutSin,
      translateY: easeInSin,
    },
    delaysRatio: 1
  })

  return (
    <div className="App">
      <Navbar
        morph={morph}
        toggle={toggle}
        setToggle={setToggle}
      />
      <Home
        morph={morph}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
}

export default App;
