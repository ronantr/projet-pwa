import React, { useState, useEffect } from 'react';
import Reveal from 'reveal.js';
//import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";
import { useParams } from "react-router-dom";
import {getAllSlides, getPresentation} from '../service/dbHelpers'

function Reval() {
  const {id} =useParams()
  const [presentation,setPresentation] = useState([{}])
  const [slides,setSlides] = useState([{}])
  useEffect (() => { 
    let deck = new Reveal()
    deck.configure(
      { 
        autoSlide: 0,
          // Display presentation control arrows
        controls: true,

        // Help the user learn the controls by providing hints, for example by
        // bouncing the down arrow when they first encounter a vertical slide
        controlsTutorial: true,

        // Determines where controls appear, "edges" or "bottom-right"
        controlsLayout: 'bottom-right',

        // Visibility rule for backwards navigation arrows; "faded", "hidden"
        // or "visible"
        controlsBackArrows: 'faded',

        // Display a presentation progress bar
        progress: true,
          }
          )
    deck.initialize({center: true, controls: true })
        
  },[])
  
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      let data =await getPresentation(id)
      console.log(data)
      
      setPresentation(data)
    };
  fetchData()}, [])
  
  useEffect(() => {
    // declare the async data fetching function
  
    const fetchData = async () => {
      let data = await getAllSlides(presentation[0].id)
      console.log(data)
      setSlides(data)
    };

    
    console.log("----------- OBJECT  ---------"+presentation.length>0)
    console.log("----------- ID  ---------"+ presentation[0].id)

    if(presentation){
      fetchData()
    }

}, [presentation])



    return (

      <>

      <div className="reveal">
            <div className="slides">
         
              {slides && slides.map(item => 
                <>
                   <section data-background-image="https://images7.alphacoders.com/116/1162253.jpg">
                   {/* <section data-background-image={item.background}> */}
                   {/* <section data-background-color="#d5f4e6"> */}

                   <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </section>
                </>)}

            </div>
      </div>
       </>
    )
  }

export default Reval