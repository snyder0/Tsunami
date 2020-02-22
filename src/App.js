import React, { useState, useEffect } from 'react';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useMorph, easeOutSin, easeInSin,  } from 'react-morph';
import 'uikit/dist/css/uikit.min.css';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true)
  const [prevScroll, setPrevScroll] = useState(null);

  const morph = useMorph({
    isReversed: !toggle,
    easings: {
      translateX: easeOutSin,
      translateY: easeInSin,
    }
  })

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = (e) => {
    let scrollY = window.scrollY
    let scrollLimit = 400
    // console.log("scrollY " + scrollY)
    // console.log("prevScroll " + prevScroll)
    // console.log(toggle)

    if(scrollY < scrollLimit && prevScroll === null && toggle) {
      setToggleExit(scrollY)
    } else if (scrollY < scrollLimit && prevScroll < scrollLimit && !toggle) {
      setToggleExit(scrollY)
    } else if (scrollY > scrollLimit && prevScroll < scrollLimit && toggle) {
      setToggleExit(scrollY)
    } else if (scrollY < scrollLimit && prevScroll > scrollLimit && !toggle) {
      setToggleExit(scrollY)
    }
  }

  const setToggleExit = (newPrevScroll) => {
    setTimeout(() => {
      setToggle(!toggle)
      setPrevScroll(newPrevScroll)
    }, 980)
  }

  return (
    <div className="App">
      <Navbar
        morph={morph}
        toggle={toggle}
        setToggle={setToggle}
      />
      <div id="Top"></div>
      <Home
        morph={morph}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
}

export default App;
