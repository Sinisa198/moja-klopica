import React from 'react';

const InputPassword = ({ name, value, placeholder, type, onChange }) => {
  return (
    <div>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default InputPassword;
