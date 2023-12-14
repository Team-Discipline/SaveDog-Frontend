import React, { useState } from 'react';

interface Input {
  name: string;
  label: string;
  type?: string;
  initialValue?: string;
  pattern?: string;
};

interface FormProps {
  inputs: Input[];
  onSubmit: (formData: Record<string, string>) => void;
};
const ReusableForm: React.FC<FormProps> = ({inputs, onSubmit}) => {
  const initialFormState: Record<string, string> = {};
  inputs.forEach((input) => {
    initialFormState[input.name] = input.initialValue || '';
  });

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 폼 데이터를 사용하여 원하는 작업 수행
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: '400px', margin: 'auto', marginTop: '10%'}}>
      {inputs.map((input) => (
        <div key={input.name} style={{marginBottom: '15px'}}>
        <label key={input.name} style={{display: 'block', marginBottom: '5px'}}>
          {input.label}:
          <input
            type={input.type || 'text'}
            value={formData[input.name]}
            onChange={(e) => handleChange(e, input.name)}
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </label>
        </div>
      ))}
      <br />
      <button type="submit" style={{ background: '#4caf50', color: 'white', padding: "10px", borderRadius: "4px", cursor: "pointer" }}>Submit</button>
    </form>
  );
};

export default ReusableForm;
