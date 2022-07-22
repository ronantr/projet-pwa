import React, { useState } from 'react';
import { useEffect } from 'react';
import Reveal from 'reveal.js';
//import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";


function Reval({title}) {
  useEffect (() => { 
    let deck = new Reveal()
    deck.initialize({center: true, controls: true })
    Reveal.configure({ autoSlide: 0 })
  },[]);


    return (

      <>

      <div className="reveal">
            <div className="slides">
                <section data-background-image="http://example.com/image.png">
                  <h2>🍦</h2>
                </section>
                <section data-background-image="http://example.com/image.png">
                  <h2>🍰</h2>
                </section>
            </div>
        </div>
       </>
    )
  }

export default Reval