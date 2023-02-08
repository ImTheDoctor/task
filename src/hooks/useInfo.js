import { useState } from "react";

const useInfo = () => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [info, setInfo] = useState([])

    

    // useEffect(() => {
    //     const getData = () => {
    //         const data = JSON.parse(localStorage.getItem("data"))
    //         setInfo(s => ({ ...s, data }))
    //     }
    //     getData()
    // }, [])

    const handleSubmit = event => {
        event.preventDefault()
        localStorage.setItem("data", JSON.stringify([values]))
        setInfo(JSON.parse(localStorage.getItem("data")))
        event.target.reset()
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    }

    const handleErrors = err => {
        setErrors(err)
    }

    const handleDelete = (event) => {
        event.preventDefault()
        localStorage.removeItem("data");
    }

    return { info, errors, handleChange, handleSubmit, handleDelete, handleErrors }
}

export default useInfo