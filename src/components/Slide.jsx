import React, {useState} from 'react'
import RichTextEditor from './RichTextEditor'
import {setPresentation, updateSlide} from '../service/dbHelpers'
import { Button } from 'react-bootstrap';

function Slide({item,presentationId, isModePresentation=false}) {
  // const [isEdit, setIsEdit] = useState(false);
  // const [content, setContent] = useState(

  // )
  // const handleSave = async ()=>  {
  //   await updateSlide(presentationId, item.id , {"content":content})
  // }

  console.log(presentationId)
  
  return (
    <>
    {/* <Button onClick={handleSave}>Save</Button> */}
    <section data-background-image={item.url}>
        <RichTextEditor item ={item} presentationId={presentationId}/>
    </section>
  </>
  )
}

export default Slide