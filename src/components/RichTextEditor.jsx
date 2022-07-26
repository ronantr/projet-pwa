import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { Button } from 'react-bootstrap';
import { deleteSlide, updateSlide } from '../service/dbHelpers';
import { useRef } from 'react';
import App from '../App.css';


function RichTextEditor({item,presentationId}) {

	const editorRef = useRef(null);
		 const modules = {
			toolbar: [
		      [{ 'font': [] }],
		      [{ 'size': ['small', false, 'large', 'huge'] }],
		      ['bold', 'italic', 'underline'],
		      [{'list': 'ordered'}, {'list': 'bullet'}],
		      [{ 'align': [] }],
		      [{ 'color': [] }, { 'background': [] }],
		      ['clean']
		    ]
		};

		const formats = [
		    'font',
		    'size',
		    'bold', 'italic', 'underline',
		    'list', 'bullet',
		    'align',
		    'color', 'background'
	  	];
        // const [content, setContent] = React.useState('');
	

        const rteChange = (content, delta, source, editor) => {
			// setContent(editor.getHTML());
			if(editorRef.current) {
			editorRef.current.value = editor.getHTML();
			}
		// console.log(editor.getHTML()); // rich text
		// console.log(editor.getLength()); // number of characters
	}

	  const handleSave = async ()=>  {
		console.log(presentationId)
    await updateSlide(presentationId, item.id , {"content":editorRef.current.value})
  }

  const handleDelete = async ()=>  {
	console.log(presentationId)
	await deleteSlide(presentationId, item.id);
}
  

	    return (
			<>
				<div class="backPresentation">
					<Link to="/">
						<span class="back">Retour</span>
					</Link>
					<span class="save" onClick={handleSave}>Enregistrer</span>
					<span class="delete" onClick={handleDelete} variant='danger'>Supprimer</span>
				</div>
				<div>
					<ReactQuill theme="snow"  modules={modules}
						formats={formats} onChange={rteChange} ref={editorRef}
						value={item.content}/>
				</div>
			</>
	    );

}

export default RichTextEditor;