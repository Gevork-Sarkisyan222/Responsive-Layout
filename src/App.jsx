import React, { useState } from 'react';
import './App.scss';
import orangeRound from './images/orangeRound.svg';
import userImage from './images/hero.svg';
import userImageMobile from './images/mobile-hero.svg';
import graphicIcon from './images/graphic 1.svg';
import startupIcon from './images/startup 1.svg';
import browserIcon from './images/browser 1.svg';
import linkdn from './images/LinkedIn.svg';
import instagram from './images/Instargam.svg';
import behance from './images/Behance.svg';
import dribble from './images/Dribble.svg';
import burgerMenu from './images/NAV.svg';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 550px)',
  });

  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <header className="header">
        <div className="container">
          <div className="top_header">
            <div className="logo">
              <h2>Kelvin</h2>
              <img src={orangeRound} alt="orangeRound" />
            </div>
            <ul className="routes">
              <li className="route">Home</li>
              <li className="route">Works</li>
              <li className="route">Services</li>
              <li className="route">About</li>
              <li className="route">Contact</li>
            </ul>
            <img
              onClick={() => setOpen(true)}
              className="burger_menu"
              src={burgerMenu}
              alt="burger menu"
            />
            {open && (
              <div className="menu_burger_wrapper">
                <span onClick={() => setOpen(false)} className="close">
                  X
                </span>
                <div className="links">
                  <a className="link">Home</a>
                  <a className="link">Works</a>
                  <a className="link">Services</a>
                  <a className="link">About</a>
                  <a className="link">Contact</a>
                </div>
              </div>
            )}
          </div>

          <div className="middle_header">
            <div className="texts">
              <h1>
                Kelvin Kramer <br /> Designer & Developer
              </h1>
              <p>
                I’m a portrait, fashion and lifestyle photographer living In New York City. <br />
                During my thirteen year tenure here.
              </p>
            </div>

            <div className="image">
              <img src={isMobile ? userImageMobile : userImage} alt="userImage" />
              {/* <img src={userImage} alt="userImage" /> */}
            </div>
          </div>
        </div>
      </header>

      <div className="skills">
        <div className="skill_container">
          <div className="skill_content">
            <div className="skill_card">
              <img src={graphicIcon} alt="graphicIcon" />
              <h2>UI/UX Design</h2>
              <p>
                Our design is translated into comprehensive digital environments built on latest
                development standards.
              </p>
            </div>
            <div className="skill_card">
              <img src={startupIcon} alt="startupIcon" />
              <h2>Development</h2>
              <p>
                Our design is translated into comprehensive digital environments built on latest
                development standards.
              </p>
            </div>
            <div className="skill_card">
              <img src={browserIcon} alt="browserIcon" />
              <h2>software testing</h2>
              <p>
                Our design is translated into comprehensive digital environments built on latest
                development standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio">
        <div className="portfolio_container">
          <h2>Portfolio</h2>
          <div className="post_image">
            <img
              src="https://montenapodaily.com/wp-content/uploads/2022/12/e769.jpg"
              alt="gucci image"
            />
          </div>
          <a href="!#">Online fashion store - Homepage</a>
          <div className="post_image">
            <img
              src="https://images.unsplash.com/photo-1511746315387-c4a76990fdce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRpZGFzfGVufDB8fDB8fHww"
              alt="adidas image"
            />
          </div>
          <a href="!#">Reebok Store - Concept</a>
          <div className="post_image">
            <img
              src="https://static4.depositphotos.com/1008134/372/i/450/depositphotos_3723527-stock-photo-digital-cameras-and-the-city.jpg"
              alt="camera image"
            />
          </div>
          <a href="!#">Braun Landing Page - Concept</a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer_container">
          <h1>Contacts</h1>
          <span>Want to know more or just chat? You are welcome!</span>
          <button>Send message</button>
          <article className="icons">
            <img src={linkdn} alt="linkdn" />
            <img src={instagram} alt="instagram" />
            <img src={behance} alt="behance" />
            <img src={dribble} alt="dribble" />
          </article>
          <p>Like me on LinkedIn, Instagram, Behance, Dribble</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
