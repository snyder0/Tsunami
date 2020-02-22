// eslint-disable-next-line
import UIkit from 'uikit'
import React from 'react';
import logo from '../images/TSUNAMI-LOGO.png';


function Navbar(props) {
  const setToggle = () => {
    setTimeout(() => {
      props.setToggle(!props.toggle)
    }, 980)
  }

  return (
    <React.Fragment>
      <div className="uk-position-fixed">
        <div className="uk-position-top">
          <nav className="uk-navbar-container uk-navbar-transparent">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav" uk-scrollspy-nav="closest: li; scroll: true">
                <li className="uk-active">
                  <a href="#Top">
                    {!props.toggle && (
                      <img
                        src={logo}
                        {...props.morph}
                        className="Nav-logo"
                        alt="logo"
                        onClick={() => setToggle()}
                      />
                    )}
                    {props.toggle && (
                      <img
                        src={logo}
                        {...props.morph}
                        className="App-logo"
                        alt="logo"
                      />
                    )}
                  </a>
                </li>
                <li>
                  <a href="#Menus" uk-scroll="true">Menus</a>
                </li>
                <li>
                  <a href="#Locations">Locations</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;