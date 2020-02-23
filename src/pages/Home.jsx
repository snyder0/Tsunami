// eslint-disable-next-line
import UIkit from 'uikit'
import React from 'react';
import MapContainer from '../components/MapContainer'
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
      {/* Header Logo */}
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

      {/* Menu Section */}
      <section id="Menus" className="Menu-section">
        <div className="Menu-group uk-child-width-1-2 uk-text-center" uk-grid="true">
          <div>
            <h3 className="Menu-title">Dutchtown</h3>
            <a
              href="#modal-dutchtown"
              uk-toggle="target: #modal-dutchtown"
            >
              <img src={Dutchtown} className="Menu-image" alt="logo" />
            </a>
          </div>
          <div>
            <h3 className="Menu-title">Gonzales</h3>
            <a
              href="#modal-gonzales"
              uk-toggle="target: #modal-gonzales"
            >
              <img src={Gonzales} className="Menu-image" alt="logo" />
            </a>
          </div>
        </div>
      </section>

      {/* Menu Modals */}
      <div id="modal-dutchtown" className="uk-flex-top" uk-modal="true">
        <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
          <button className="Modal-close uk-modal-close-default" type="button" uk-close="true"></button>
          <img src={Dutchtown} alt="logo" />
        </div>
      </div>
      <div id="modal-gonzales" className="uk-flex-top" uk-modal="true">
        <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
          <button className="Modal-close uk-modal-close-default" type="button" uk-close="true"></button>
          <img src={Gonzales} alt="logo" />
        </div>
      </div>

      {/* Google Maps */}
      <section id="Locations" className="Locations-section">
        <MapContainer />
      </section>
    </React.Fragment>
  );
}

export default Home;