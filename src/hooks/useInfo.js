import { useState } from "react";

const useInfo = (data) => {
    const [values, setValues] = useState(data.initial)
    const [errors, setErrors] = useState({})


    const handleSubmit = event => {
        event.preventDefault()
        data.onSubmit(values)
        event.target.reset()
    }

    const handleChange = event => {
        const { type, checked, value, name } = event.target;
        switch (type) {
            case 'checkbox':
                setValues({
                    ...values,
                    [name]: checked
                });
                break;
            default:
                setValues({
                    ...values,
                    [name]: value
                });
        }
    };

    const handleErrors = err => {
        setErrors(err)
    }

    const handleDelete = () => {
        data.onDelete()
    }

    return { values, errors, handleChange, handleSubmit, handleDelete, handleErrors }
}

export default useInfo