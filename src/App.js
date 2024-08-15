
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [labelInput,setLabelInput] = useState('');
  const [age, setAge] = useState();
  const [textInput, setTextInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [dataList, setDataList] = useState([]);

  const handleLabelInputChange = (event) => {
    setLabelInput(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePreview = () => {
    alert(`Preview:\nLabel Input: ${labelInput}\nAge Input: ${age}\nText Input: ${textInput}\nSelected Option: ${selectedOption}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textInput && selectedOption) {
      setDataList([...dataList, {label: labelInput,age: age, text: textInput, option: selectedOption }]);
      setLabelInput('');
      setAge('');
      setTextInput('');
      setSelectedOption('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="labelInput">Name:</label>
          <input
            type="label"
            id="labelInput"
            value={labelInput}
            onChange={handleLabelInputChange}
          />
        </div>

        <div>
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={age}
        onChange={handleAgeChange}
        min="0" 
        max="120" 
        step="1" 
      />
    </div>
        <div>
          <label htmlFor="textInput">Nickname:</label>
          <input
            type="text"
            id="textInput"
            value={textInput}
            onChange={handleTextInputChange}
          />
        </div>

        <div>
          <label htmlFor="comboBox">Employee:</label>
          <select
            id="comboBox"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">--Select an Option--</option>
            <option value="SD">Software Developer</option>
            <option value="FD">Frontend Developer</option>
            <option value="BD">Backend Developer</option>
          </select>
        </div>

        <div>
          <button type="button" onClick={handlePreview}>
            Preview
          </button>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>

      <h2>Submitted Data</h2>
      {dataList.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name (jOb Title)</th>
              <th>Age</th>
              <th>NickName</th>
              <th>Employee</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data, index) => (
              <tr key={index}>
                <td>{data.label}</td>
                <td>{data.age}</td>
                <td>{data.text}</td>
                <td>{data.option}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default App;
