import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


function RichTextEditor({content,setContent}) {

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
        const [comments, setComments] = React.useState('');
	

        const rteChange = (content, delta, source, editor) => {
		console.log(editor.getHTML()); // rich text
		console.log(editor.getLength()); // number of characters
	}
    console.log("text")

	    return (
	      <div>
	        <ReactQuill theme="snow"  modules={modules}
				formats={formats} onChange={rteChange}
			value={comments || ''}/>
	      </div>
	    );

}

export default RichTextEditor;