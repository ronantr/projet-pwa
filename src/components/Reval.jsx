import React, { useState, useEffect } from 'react';
import Reveal from 'reveal.js';
//import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";
import { useParams } from "react-router-dom";
import {getPresentation} from '../service/dbHelpers'

function Reval({}) {
  const {id} =useParams()
  const [presentation,setPresentation] = useState([{}])
  
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
  



    return (

      <>

      <div className="reveal">
            <div className="slides">
         
              {presentation.map(item => 
                <>
                   <section data-background-image="https://images7.alphacoders.com/116/1162253.jpg">
        <h2>{item.title}</h2>
        {item.content} nex
        </section>
                </>)}

            </div>
      </div>
       </>
    )
  }

export default Reval