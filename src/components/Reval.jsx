import React, { useState, useEffect } from 'react';
import Reveal from 'reveal.js';
//import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";
import { useParams } from "react-router-dom";
import {getAllSlides, getPresentation} from '../service/dbHelpers'

function Reval({}) {
  const {id} =useParams()
  const [presentation,setPresentation] = useState([{}])
  const [slides,setSlides] = useState([{}])
  useEffect (() => { 
    let deck = new Reveal()
    deck.initialize({center: true, controls: true })
    Reveal.configure({ autoSlide: 0 })
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
      let data =await getAllSlides(presentation[0].id)
      console.log(data)

      setSlides(data)
    };
  fetchData()}, [presentation])



    return (

      <>

      <div className="reveal">
            <div className="slides">
         
              {slides && slides.map(item => 
                <>
                   {/* <section data-background-image="https://images7.alphacoders.com/116/1162253.jpg"> */}
                   {/* <section data-background-image={item.background}> */}
                   <section data-background-color="#d5f4e6">

                   <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </section>
                </>)}

            </div>
      </div>
       </>
    )
  }

export default Reval