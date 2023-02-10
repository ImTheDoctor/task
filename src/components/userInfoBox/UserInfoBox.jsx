import React from 'react'
import InfoList from './InfoList/InfoList'
import UserDataInput from './userDataInput/UserDataInput'
import styles from './UserinfoBox.module.css'
import useInfo from '../../hooks/useInfo.js'



const UserInfoBox = () => {
    const { handleChange, handleSubmit, handleDelete, info } = useInfo({
        initial: {
            file: "",
            header: "",
            Name: "",
            description: "",
            rating: 0,
            isActive: false
        },
        onSubmit: values => {
            console.log(values)
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