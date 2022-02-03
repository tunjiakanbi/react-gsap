import React, {useRef, useEffect} from 'react';
import './css/App.css';
import whale from "./images/whale.jpeg";
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import {gsap,  Power2} from 'gsap';
gsap.registerPlugin(CSSRulePlugin);

function App() {
let container = useRef(null);
let imgContainer = useRef(null);
let image = useRef(null);
let imageReveal = CSSRulePlugin.getRule(".img-container:after");

let tl = new gsap.timeline();

useEffect(()=>{
  // console.log(imgContainer, image);
  tl.to(container, 0, {css:{visibility:'visible'}})
  tl.to(imageReveal, 1.4, {width: "0%", ease:Power2.easeInOut})
  tl.from(image, 1.4, {scale: 1.6, ease: Power2.easeOut, delay: -1.4})
});
  return (
    <section className="main">
      <div ref={el=>container=el} className="container">
        <>
        <div ref={el=>imgContainer=el} className="img-container">
          <img ref={el=>image=el} src={whale} alt="#" />
        </div>
        </>
      </div>
    </section>
  );
}

export default App;
