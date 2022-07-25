import React, { useState, useEffect } from 'react';
import Reveal from 'reveal.js';
//import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";
import { useParams } from "react-router-dom";
import Slide from './Slide';
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
      setPresentation(data)
    };
  fetchData()}, [])
  



    return (

      <>

      <div className="reveal">
            <div className="slides">
              {presentation.map(item => <Slide key={item.id} item ={item}/>)}

            </div>
      </div>
       </>
    )
  }

export default Reval