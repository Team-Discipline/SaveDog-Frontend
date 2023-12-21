import React, {ChangeEvent, FormEvent, useState} from 'react';
import ComboBox from "@/components/ComboBox";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
interface Input {
  name: string;
  label: string;
  type?: string;
  initialValue?: string;
  pattern?: string;
};
interface Checkbox {
  name: string;
  label: string;
}

interface ComboBoxOption {
  name: string;
  label: string;
  options: string[];
}
interface datePickerOption {
  name: string;
  label: string;
  date: string;
}
interface FormProps {
  inputs: Input[];
  checkbox?: Checkbox[];
  comboBox?: ComboBoxOption[];
  datePicker?: datePickerOption[];
  onSubmit: (formData: Record<string, string>) => void;
};
const ReusableForm: React.FC<FormProps> = ({inputs,comboBox, checkbox, datePicker, onSubmit}) => {
  const initialFormState: Record<string, string> = {};
  inputs.forEach((input) => {
    initialFormState[input.name] = input.initialValue || '';
  });

  const [formData, setFormData] = useState(initialFormState);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };
  const handleDateChange = (date: Date | null, datepickerName: string) => {
    setSelectedDate(date)
    setFormData({
      ...formData,
      [datepickerName]: date ? date.toISOString() : '',
    });
  };
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, checkboxName: string) => {
    setFormData({
      ...formData,
      [checkboxName]: e.target.checked ? 'checked' : '',
    });
  };
  const handleComboBoxChange = (e: React.ChangeEvent<HTMLSelectElement>, comboBoxName: string) => {
    setFormData({
      ...formData,
      [comboBoxName]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 폼 데이터를 사용하여 원하는 작업 수행
    onSubmit(formData);
    console.log(formData);
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
      {datePicker && datePicker.length > 0 && (
        datePicker.map((datePickerItem) => (
          <div key={datePickerItem.name}>
            <label>
              {datePickerItem.label}:
              <div style={{border: '1px solid #ccc'}}>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => handleDateChange(date, datePickerItem.name)}
                placeholderText={` ${datePickerItem.label}를 선택하세요`}
              />
              </div>
            </label>
          </div>
        ))
      )}
      {comboBox && comboBox.length > 0 && (
        comboBox.map((comboBox) => (
          <ComboBox
            key={comboBox.name}
            name={comboBox.name}
            label={comboBox.label}
            options={comboBox.options}
            value={formData[comboBox.name]}
            onChange={(e) => handleComboBoxChange(e, comboBox.name)}
          />
        ))
      )}
      {checkbox && checkbox.length > 0 && (
        checkbox.map((c) => (
          <div key={c.name} style={{marginBottom: '15px'}}>
            <label key={c.name} style={{display: 'block', marginBottom: '5px'}}>
              {c.label}:
              <input
                type="checkbox"
                checked={formData[c.name] === 'checked'}
                onChange={(e) => handleCheckboxChange(e, c.name)}
                style={{ marginLeft: '8px' }}
              />
            </label>
          </div>
        ))
      )}
      <br />
      <button type="submit" style={{ background: '#4caf50', color: 'white', padding: "10px", borderRadius: "4px", cursor: "pointer" }}>Submit</button>
    </form>
  );
};

export default ReusableForm;
