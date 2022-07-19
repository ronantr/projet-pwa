import React from 'react'
import Reveal from 'reveal.js';
//import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";


function Reval({title}) {
    const deck = new Reveal();
    deck.initialize();
deck.on( 'make-it-pop', () => {
        console.log('✨');
      } )
    return (

      <>
      <div>reveal</div>
      <div class="reveal">
            <div class="slides">
            <section data-state="make-it-pop"></section>
                <section data-background-color="aquamarine">
                  <h2>🍦</h2>
                </section>
                <section data-background-color="rgb(70, 70, 255)">
                  <h2>🍰</h2>
                </section>
                <section>
                    <h2>🍩</h2>
                </section>
            </div>
        </div>
       </>
    )
  }

export default Reval