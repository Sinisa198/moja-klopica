import React from 'react';

const DayButton = ({ text, active, onPress }) => {
  return (
    <button
      className={active ? 'button-active' : 'button-not-active'}
      onClick={() => onPress()}
    >
      {text}
    </button>
  );
};

export default DayButton;
