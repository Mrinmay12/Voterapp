import React, { useState, useRef, useEffect } from 'react';
import "./AutoGrowTextarea.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
const AutoGrowTextarea = () => {
  const textareaRef = useRef(null);
  const [text, setText] = useState('');

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`; // Auto-grow the height
  };

  // Event handler for textarea input changes
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // UseEffect to resize the textarea whenever the text changes
  useEffect(() => {
    resizeTextarea();
  }, [text]);

  return (
    <div className="textarea-container">
    <div className="textarea-wrapper">
      <textarea
        ref={textareaRef}
        rows="1"
        placeholder="Type your comment here..."
        value={text}
        onChange={handleInputChange}
        style={{ height: '50px' }}
      ></textarea>
    </div>
    <div className="autoicon-container">
      <FontAwesomeIcon
        icon={faPaperPlane}
        style={{ color: 'white', height: '19px', width: '24px', cursor: 'pointer' }}
      />
    </div>
  </div>
  );
};

export default AutoGrowTextarea;
