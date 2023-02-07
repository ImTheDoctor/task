import React from 'react'
import InfoList from './InfoList/InfoList'
import UserDataInput from './userDataInput/UserDataInput'
import styles from './UserinfoBox.module.css'



const UserInfoBox = () => {
    return (
        <div className={styles.container}>
            <UserDataInput  />
            <InfoList  />
        </div>
    )
}

export default UserInfoBox