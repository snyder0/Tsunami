// eslint-disable-next-line
import UIkit from 'uikit'
import React from 'react';
import logo from '../images/TSUNAMI-LOGO.png';
import Dutchtown from '../images/DUTCHTOWN.png';
import Gonzales from '../images/GONZALES.png';

function Home(props) {
  const setToggle = () => {
    setTimeout(() => {
      props.setToggle(!props.toggle)
    }, 980)
  }

  return (
    <React.Fragment>
      <header className="App-header">
        <a
          id="logo"
          href="#Menus"
          uk-scroll="true"
          onClick={() => setToggle()}
        >
          <div>
            {props.toggle && (
              <img
                src={logo}
                {...props.morph}
                className="App-logo"
                alt="logo"
              />
            )}
          </div>
        </a>
        {props.toggle && (
          <a
            id="Continue"
            className="App-link"
            href="#Menus"
            uk-scroll="true"
            uk-scrollspy="cls: uk-animation-fade; repeat: true"
            onClick={() => setToggle()}
          >
            Continue <i className="fas fa-arrow-right"></i>
          </a>
        )
        }
      </header>
      <section id="Menus" className="Menu-section">
        <div className="Menu-group uk-child-width-1-2 uk-text-center" uk-grid="true">
          <div>
            <h3 className="Menu-title">Dutchtown</h3>
            <img src={Dutchtown} className="Menu-image" alt="logo" />
          </div>
          <div>
            <h3 className="Menu-title">Gonzales</h3>
            <img src={Gonzales} className="Menu-image" alt="logo" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;