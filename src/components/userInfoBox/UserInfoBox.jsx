import React, {useState} from 'react'
import InfoList from './InfoList/InfoList'
import UserDataInput from './userDataInput/UserDataInput'
import styles from './UserinfoBox.module.css'
import useInfo from '../../hooks/useInfo.js'

const UserInfoBox = () => {
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem("data")) || [])
    const { handleChange, handleSubmit, handleDelete} = useInfo({
        initial: {
        file: "",
        header: "",
        Name: "",
        description: "",
        rating: 0,
        isActive: false,
        radioInput: ""
    },
    onSubmit: values => {
            setInfo([...info, values]);
            localStorage.setItem("data", JSON.stringify([...info, values]));      
    },
    onDelete: () => {
        setInfo([])
        return localStorage.removeItem("data");
    }
    })
    

    return (
        <div className={styles.container}>
            <div className={styles.userInput}>
                <UserDataInput handleChange={handleChange} handleSubmit={handleSubmit} handleDelete={handleDelete} />
            </div>
            <div className={styles.infoList}>
                <InfoList info={info} />
            </div>
        </div>
    )
}

export default UserInfoBox