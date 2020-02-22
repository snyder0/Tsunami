// eslint-disable-next-line
import UIkit from 'uikit'
import React from 'react';
import logo from '../images/TSUNAMI-LOGO.png';
import Dutchtown from '../images/DUTCHTOWN.png';
import Gonzales from '../images/GONZALES.png';

function Home(props) {

  UIkit.util.on('#js-scroll-trigger', 'beforescroll', function () {
    setTimeout(() => {
    }, 1000)
  });

  return (
    <React.Fragment>
      <header id="Top" className="App-header">
        <a
          id="logo"
          href="#Menus"
          uk-scroll="true"
          onClick={() => props.setToggle(!props.toggle)}
        >
          <div>
            {props.toggle && (
              <img src={logo} {...props.morph} className="App-logo" alt="logo" />
            )
            }
          </div>
        </a>
        {props.toggle && (
          <a
            id="js-scroll-trigger"
            className="App-link"
            href="#Menus"
            uk-scroll="true"
            uk-scrollspy="cls: uk-animation-fade;"
            onClick={() => props.setToggle(!props.toggle)}
          >
            Continue <i className="fas fa-arrow-right"></i>
          </a>
        )
        }
        {/* <button onClick={() => props.setToggle(!props.toggle)}>Let's morph!</button> */}
      </header>
      <section id="Menus" className="Menu-section">
        <div class="uk-child-width-1-2 uk-text-center" uk-grid>
          <img src={Dutchtown} className="" alt="logo" />
          <img src={Gonzales} className="" alt="logo" />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;