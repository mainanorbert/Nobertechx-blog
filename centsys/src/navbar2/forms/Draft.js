import React, { useEffect, useState } from 'react';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import 'draft-js/dist/Draft.css';

const { hasCommandModifier } = KeyBindingUtil;

const Draft = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleTextChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const handleItalic = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const handleKeyCommand = (command, _editorState, event) => {
    if (command === 'tab') {
      const newContentState = RichUtils.onTab(event, editorState.getCurrentContent(), 4);
      const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
      setEditorState(newEditorState);
      return 'handled';
    }
    return 'not-handled';
  };

  const keyBindingFn = (event) => {
    if (event.keyCode === 9 && !hasCommandModifier(event)) {
      return 'tab';
    }
    return getDefaultKeyBinding(event);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 9 && !hasCommandModifier(event)) {
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='p-8'>
      <div className='flex space-x-4 m-2'>
        <div>ToolBar</div>
        <button className='bg-green-400 p-1 rounded' onClick={handleBold}>Bold</button>
        <button className='bg-green-400 p-1 rounded' onClick={handleItalic}>Italic</button>
      </div>
      <div className='bg-green-300 min-[10rem] w-6/12'>
        <Editor editorState={editorState} onChange={handleTextChange} handleKeyCommand={handleKeyCommand} keyBindingFn={keyBindingFn} />
      </div>
      Draft
    </div>
  );
};

export default Draft;
