import React from 'react';
import './input.css';

export interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const Input = ({ type, id, value, onChange, required = false }: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="storybook-input"
    />
  );
};
