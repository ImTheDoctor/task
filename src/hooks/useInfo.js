import { useState } from "react";

const useInfo = data => {
    const [values, setValues] = useState(data.initialValues)
    const [errors, setErrors] = useState({})

    const handleChange = event => {
        const {value, name} = event.target
        const init = {...values}
    }

    const handleErrors = err => {
        setErrors(err)
    }

    const setInitialValues = init => {
        setValues(init)
    }

    return {values, errors, handleChange, handleErrors, setInitialValues}
}