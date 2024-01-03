import React, { ChangeEvent } from 'react';

interface ComboBoxProps {
  name: string;
  label: string;
  options: string[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({ name, label, options, value, onChange }) => (
  <div key={name} style={{ marginBottom: '15px' }}>
    <label key={name} style={{ display: 'block', marginBottom: '5px' }}>
      {label}:
      <select
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default ComboBox;
