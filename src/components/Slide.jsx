import React, {useState} from 'react'
import RichTextEditor from './RichTextEditor'
import {setPresentation} from '../service/dbHelpers'

function Slide({item}) {
  //    console.log(item)
  const [content, setContent] = useState(

  )
  function handleChange(e) {
    setContent(e)

  }
  
  return (
    <section data-background-image={item.url}>
        <h1>{item.title}</h1>
        <RichTextEditor content ={item.content} setContent={setContent}/>
    </section>
  )
}

export default Slide