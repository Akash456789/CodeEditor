import React, { useState } from 'react';
import CopyButton from './ButtonComponents/CopyButton';
import SaveButton from './ButtonComponents/SaveButton';
import LockButton from './ButtonComponents/LockButton';
import './App.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

const handleSaveClick = () => {
  if (code.trim() === '') {
    alert('Cannot save an empty code!');
    return;
  }

  const blob = new Blob([code], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'code.txt';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  alert('Code saved!');
};

  const handleLockUnlockClick = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className="code-editor-container">
      <textarea
        className={`code-input ${isLocked ? 'locked' : ''}`}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here..."
        disabled={isLocked} // Disable textarea when locked
      />
      <div className="button-container">
       
        {!isLocked &&  <CopyButton handleCopyClick={handleCopyClick} />}
        {!isLocked && <SaveButton handleSaveClick={handleSaveClick} />} {/* Render SaveButton only if not locked */}
        <LockButton isLocked={isLocked} handleLockUnlockClick={handleLockUnlockClick} />
      </div>
    </div>
  );
};

export default CodeEditor;
