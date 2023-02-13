import React, { useState } from 'react';

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return { formData, handleChange, handleSubmit };
};

export default useForm

import React from 'react'
import useForm from './useForm'

const FormExample = () => {
  const { formData, handleChange, handleSubmit } =
    useForm({
      textInput: '',
      passwordInput: '',
      checkboxInput: false,
      radioInput: 'option1',
      selectInput: '',
      textareaInput: '',
    });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="textInput">Text Input:</label>
      <input
        type="text"
        id="textInput"
        name="textInput"
        value={formData.textInput}
        onChange={handleChange}
      />

      <label htmlFor="passwordInput">Password Input:</label>
      <input
        type="password"
        id="passwordInput"
        name="passwordInput"
        value={formData.passwordInput}
        onChange={handleChange}
      />

      <label htmlFor="checkboxInput">Checkbox Input:</label>
      <input
        type="checkbox"
        id="checkboxInput"
        name="checkboxInput"
        checked={formData.checkboxInput}
        onChange={handleChange}
      />

      <fieldset>
        <legend>Radio Input:</legend>
        <input
          type="radio"
          id="option1"
          name="radioInput"
          value="option1"
          checked={formData.radioInput === 'option1'}
          onChange={handleChange}
        />
        <label htmlFor="option1">Option 1</label>

        <input
          type="radio"
          id="option2"
          name="radioInput"
          value="option2"
          checked={formData.radioInput === 'option2'}
          onChange={handleChange}
        />
        <label htmlFor="option2">Option 2</label>
      </fieldset>

      <label htmlFor="selectInput">Select Input:</label>
      <select
        id="selectInput"
        name="selectInput"
        value={formData.selectInput}
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <label htmlFor="textareaInput">Textarea Input:</label>
      <textarea
        id="textareaInput"
        name="textareaInput"
        value={formData.textareaInput}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
