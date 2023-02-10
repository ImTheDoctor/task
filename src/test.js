import React, { useState, useEffect } from "react";


const useInfo = () => {
  const [values, setValues] = useState({
    file: "",
    header: "",
    Name: "",
    isActive: false,
    description: "",
    rating: 0
  });
  const [errors, setErrors] = useState({});
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setInfo(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setInfo([...info, values]);
    localStorage.setItem("data", JSON.stringify([...info, values]));
    event.target.reset();
  };

  const handleChange = event => {
    const { value, name, type, checked } = event.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleErrors = err => {
    setErrors(err);
  };

  const handleDelete = () => {
    setInfo([]);
    localStorage.removeItem("data");
  };

  return {
    info,
    errors,
    handleChange,
    handleSubmit,
    handleDelete,
    handleErrors,
    values
  };
};





//import React, { useState } from "react";
// import styles from './UserinfoBox.module.css'

// const useInfo = () => {
//   const [values, setValues] = useState({
//     file: "",
//     header: "",
//     Name: "",
//     isActive: false,
//     description: "",
//     rating: 0
//   });
//   const [errors, setErrors] = useState({});
//   const [info, setInfo] = useState(JSON.parse(localStorage.getItem("data")) || []);

//   const handleSubmit = event => {
//     event.preventDefault();
//     setInfo([...info, values]);
//     localStorage.setItem("data", JSON.stringify([...info, values]));
//     event.target.reset();
//   };

//   const handleChange = event => {
//     const { value, name, type, checked } = event.target;
//     setValues({
//       ...values,
//       [name]: type === "checkbox" ? checked : value
//     });
//   };

//   const handleErrors = err => {
//     setErrors(err);
//   };

//   const handleDelete = () => {
//     setInfo([]);
//     localStorage.removeItem("data");
//   };

//   return {
//     info,
//     errors,
//     handleChange,
//     handleSubmit,
//     handleDelete,
//     handleErrors,
//     values
//   };
// };

// const UserInfoBox = () => {
//   const {
//     handleChange,
//     handleSubmit,
//     handleDelete,
//     info,
//     values
//   } = useInfo();

//   return (
//     <div className={styles.container}>
//       <div className={styles.userInput}>
//         <UserDataInput
//           handleChange={handleChange}
//           handleSubmit={handleSubmit}
//           handleDelete={handleDelete}
//         />
//       </div>
//       <div className={styles.infoList}>
//         <InfoList info={info} />
//       </div>
//     </div>
//   );
// };

// const UserDataInput = ({ handleChange, handleSubmit, handleDelete }) => {
//   return (
//     <div>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="file">Upload User Image</label>
//           <input
//             onChange={handleChange}
//             className={styles.file}
//             type="file"
//             id="file"
//             name="file"
//             required
//             accept="image/png, image/jpeg"
//           />
//         </div>
//         <div>
//           <label htmlFor="header">User Header</label>
//           <input
//             onChange={handleChange}
//             className={styles.header}
//             type="text"
//             id="header"
//             name="header"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="Name">Name</label>
//           <input
//             onChange={handleChange}
//             className={styles.header}
//             type="text"
//             id="Name"
//             name="Name"
//             required
//           />
//         </div>


// last

// import { useState, useEffect } from 'react';

// const useLocalStorage = (key, initialValue) => {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     return storedValue ? JSON.parse(storedValue) : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// };

// export default useLocalStorage;

// import React, { useState } from 'react';
// import useLocalStorage from './useLocalStorage';

// const Form = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [textareaValue, setTextareaValue] = useState('');
//   const [checkboxValue, setCheckboxValue] = useLocalStorage('checkboxValue', false);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleTextareaChange = (event) => {
//     setTextareaValue(event.target.value);
//   };

//   const handleCheckboxChange = () => {
//     setCheckboxValue(!checkboxValue);
//   };

//   return (
//     <form>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <textarea value={textareaValue} onChange={handleTextareaChange} />
//       <input type="checkbox" checked={checkboxValue} onChange={handleCheckboxChange} />
//     </form>
//   );
// };

// export default Form;


// import { useState, useEffect } from 'react';

// const useLocalStorage = (key, initialValue) => {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     return storedValue ? JSON.parse(storedValue) : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleCheckboxChange = () => {
//     setValue(!value);
//   };

//   return [value, handleChange, handleCheckboxChange];
// };

// export default useLocalStorage;

//import React from 'react';
// import useLocalStorage from './useLocalStorage';

// const Form = () => {
//   const [inputValue, handleInputChange, handleInputCheckboxChange] = useLocalStorage('inputValue', '');
//   const [textareaValue, handleTextareaChange, handleTextareaCheckboxChange] = useLocalStorage('textareaValue', '');
//   const [checkboxValue, handleCheckboxChange] = useLocalStorage('checkboxValue', false);

//   return (
//     <form>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <textarea value={textareaValue} onChange={handleTextareaChange} />
//       <input type="checkbox" checked={checkboxValue} onChange={handleCheckboxChange} />
//     </form>
//   );
// };

// export default Form;


// import React, { useState } from 'react';

// const InputCheckbox = (props) => {
//   const [state, setState] = useState({ value: '', checked: false });

//   const handleChange = (event) => {
//     if (event.target.type === 'checkbox') {
//       setState({ ...state, checked: event.target.checked });
//     } else {
//       setState({ ...state, value: event.target.value });
//     }
//   };

//   return (
//     <div>
//       <input type={props.type} checked={state.checked} onChange={handleChange} />
//       <p>Checked: {state.checked.toString()}</p>
//       <p>Value: {state.value}</p>
//     </div>
//   );
// };

// export default InputCheckbox;

