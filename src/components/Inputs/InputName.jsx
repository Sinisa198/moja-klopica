import React from 'react';

const Inputname = ({ name, value, placeholder, type, onChange, errorMsg }) => {
  return (
    <div>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
};
export default Inputname;
