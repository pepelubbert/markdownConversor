
import './App.css';
import { marked } from "marked";
import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [buttonName, setTextButton] = useState('bi bi-arrows-expand');
  const [textAreaHeight, setTextAreaHeight] = useState(100);
  const [markdown, setMarkdown] = useState(`# My Markdown Document

  This is a paragraph of text. You can create paragraphs in Markdown simply by typing out your text.
  
  ## Heading 2
  
  You can also create headings by using one or more hash symbols at the beginning of a line. For example, this is a second-level heading.
  
  ### Heading 3
  
  You can create third-level headings by using three hash symbols at the beginning of a line.
  
  #### Heading 4
  
  You can create fourth-level headings by using four hash symbols at the beginning of a line.
  
  ##### Heading 5
  
  You can create fifth-level headings by using five hash symbols at the beginning of a line.
  
  ###### Heading 6
  
  You can create sixth-level headings by using six hash symbols at the beginning of a line.
  
  * This is a bulleted list item.
  * This is another bulleted list item.
  
  1. This is a numbered list item.
  2. This is another numbered list item.
  
  You can also create links like this: [Google](https://www.google.com/)
  
  And you can create images like this: ![alt text](https://via.placeholder.com/150x150)
  
  That's a brief introduction to Markdown!`);

  function handleMarkdownChange(event) {
    const { value } = event.target;
    setMarkdown(value);
  }

  const handleToggleClick = () => {
    if (textAreaHeight === 500) {
      setTextAreaHeight(100);
      setTextButton("bi bi-arrows-expand")
    } else {
      setTextAreaHeight(500);
      setTextButton("bi bi-arrows-collapse")
    }
  };



  return (

    <div className="App" >
      <div className='container'>
        <div className="row">
          <div className='col-md-2'></div>
          <div className='col-md-7'>
            <h1 className="text-center">Convert your Code</h1>
            </div>
            <div className='col-md-1'>
            <button id="sizeButton" className="btn btn-success" onClick={handleToggleClick} value="click"><i className= {buttonName} ></i></button>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>           
            <div className="col-md-8">
            <textarea class="form-control" id="editor" onChange={handleMarkdownChange} value={markdown} style={{ height: `${textAreaHeight}px` }} rows="4"/>
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}>
            

            </div>

           </div>
            


        </div>

      </div>
    </div>
  );
}



export default App;
