import React from 'react'
import InfoList from './InfoList/InfoList'
import UserDataInput from './userDataInput/UserDataInput'
import styles from './UserinfoBox.module.css'
import useInfo from '../../hooks/useInfo.js'



const UserInfoBox = () => {
    const { handleChange, values } = useInfo()
    return (
        <div className={styles.container}>
            <UserDataInput handleChange={handleChange} />
            <InfoList values={values}/>
        </div>
    )
}

export default UserInfoBox