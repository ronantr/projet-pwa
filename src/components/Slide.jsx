import React, {useState} from 'react'
import RichTextEditor from './RichTextEditor'
import {setPresentation} from '../service/dbHelpers'
import { Button } from 'react-bootstrap';

function Slide({item, isModePresentation=false}) {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(

  )
  function handleChange(e) {
    setContent(e)

  }

  function handleEditMode() {
    setIsEdit(true)
  }
  return (
    <>
    {!isEdit && <Button onClick={handleEditMode}>Edit</Button>}
    <section data-background-image={item.url}>
        <h1>{item.title}</h1>
       {isEdit && !isModePresentation && <RichTextEditor content ={item.content} setContent={setContent}/>}
    </section>
  </>
  )
}

export default Slide