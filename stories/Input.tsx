import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className="border p-2 rounded" />;
};

export default Input;
