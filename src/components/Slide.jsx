import React, {useState} from 'react'
import RichTextEditor from './RichTextEditor'
import {setPresentation} from '../service/dbHelpers'

function Slide({item, isModePresentation=false}) {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(

  )
  function handleChange(e) {
    setContent(e)

  }
  
  return (
    <>
    <section data-background-image={item.url}>
        <RichTextEditor content ={item.content} setContent={setContent}/>
    </section>
  </>
  )
}

export default Slide