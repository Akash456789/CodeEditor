import React from 'react';

const LockButton = ({ isLocked, handleLockUnlockClick }) => {
  return <button onClick={handleLockUnlockClick}>{isLocked ? 'Unlock' : 'Lock'}</button>;
};

export default LockButton;


