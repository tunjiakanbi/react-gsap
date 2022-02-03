import logo from './logo.svg';
import './App.css';
import {gsap, Power3} from 'gsap';
import {useRef, useEffect} from 'react';
// import { TweenLite } from 'gsap/gsap-core';

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);
  useEffect(()=>{
    gsap.fromTo(logoItem,0.8,{y:-100,opacity:0, ease:Power3.easeIn},{y:0,opacity:1});
    gsap.to(textItem, 2,{y:-20,opacity: 1, delay:0.7, ease:Power3.easeOut})
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} ref={el=>{logoItem = el}} className="App-logo" alt="logo" />
        <p ref={el=>{textItem = el}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
