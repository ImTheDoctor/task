import React from 'react'
import styles from '../UserinfoBox.module.css'

const UserDataInput = ({ handleChange, handleSubmit, handleDelete }) => {
    return (
        <div>
            <form className={styles.form} onSubmit={(event)=>{handleSubmit(event)}}>
                <div>
                    <label htmlFor="name">Upload User Image</label>
                    <input
                        onChange={(event) => handleChange(event)}
                        className={styles.file}
                        type="file"
                        id="file"
                        name="file"
                        required accept="image/png, image/jpeg"
                    />
                </div>
                <div>
                    <label htmlFor="header">User Header</label>
                    <input
                        onChange={(event) => handleChange(event)}
                        className={styles.header}
                        type="text"
                        id="header"
                        name="header"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        onChange={(event) => handleChange(event)}
                        className={styles.description}
                        id="description"
                        name="description"
                        rows="4" cols="50"
                    />
                </div>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <input
                        onChange={(event) => handleChange(event)}
                        className={styles.rating}
                        type="range"
                        id="rating"
                        name="rating"
                        min="0" max="5"
                    />
                </div>
                <div>
                    <input className={styles.btn} type="submit" value="Send" />
                    <button className={styles.btn} onClick={handleDelete}>Delete</button>
                </div>
            </form>
            
        </div>
    )
}

export default UserDataInput