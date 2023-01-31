import React from 'react';

const DayButton = ({ text, active, onPress, key, id }) => {
  return (
    <button
      className={active ? 'button-active' : 'button-not-active'}
      onClick={() => onPress()}
      key={key}
      id={id}
    >
      {text}
    </button>
  );
};

export default DayButton;
