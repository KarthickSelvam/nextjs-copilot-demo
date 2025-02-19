import React from 'react';

interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            padding: '8px',
            margin: '8px 0',
            boxSizing: 'border-box',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
          }}
        />
      </label>
    </div>
  );
};

export default Input;
