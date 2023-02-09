import { useState } from "react";

const useInfo = () => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem("data")) || [])

    const handleSubmit = event => {
        event.preventDefault()
        setInfo([...info, values]);
        localStorage.setItem("data", JSON.stringify([...info, values]));
        event.target.reset()
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    }

    const handleErrors = err => {
        setErrors(err)
    }

    const handleDelete = () => {
        setInfo([]);
        return localStorage.removeItem("data");
    }
console.log(values);
    return { info, errors, handleChange, handleSubmit, handleDelete, handleErrors }
}

export default useInfo