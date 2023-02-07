import React from 'react'
import styles from '../UserinfoBox.module.css'

const UserDataInput = ({handleChange}) => {
    return (
        <div className={styles.userInput}>
            <form className={styles.form}>
                <div>
                    <label htmlFor="name">Upload User Image</label>
                    <input className={styles.file} type="file" id="file" name="file" required accept="image/png, image/jpeg"/>
                </div>
                <div>
                    <label htmlFor="header">User Header</label>
                    <input className={styles.header} type="text" id="header" name="header" required />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea className={styles.description} id="description" name="description" rows="4" cols="50" />
                </div>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <input className={styles.rating} type="range" id="rating" name="rating" min="0" max="5" />
                </div>
                <div>
                    <input className={styles.btn} type="submit" value="Send" />
                </div>
            </form>
        </div>
    )
}

export default UserDataInput