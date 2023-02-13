import React from 'react'
import styles from '../UserinfoBox.module.css'

const UserDataInput = ({ handleChange, handleSubmit, handleDelete }) => {
    return (
        <div>
            <form className={styles.form} onSubmit={(event) => { handleSubmit(event) }}>
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
                    <label htmlFor="Name">Name</label>
                    <input
                        onChange={(event) => handleChange(event)}
                        className={styles.header}
                        type="text"
                        id="Name"
                        name="Name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="isActive">checkbox</label>
                    <input
                        onChange={(event) => handleChange(event)}
                        className={styles.header}
                        type="checkbox"
                        id="isActive"
                        name="isActive"
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
                <fieldset>
                    <legend>Radio Input:</legend>
                    <input
                        type="radio"
                        id="option1"
                        name="radioInput"
                        value="option1"
                        
                        onChange={handleChange}
                    />
                    <label htmlFor="option1">Option 1</label>

                    <input
                        type="radio"
                        id="option2"
                        name="radioInput"
                        value="option2"
                        
                        onChange={handleChange}
                    />
                    <label htmlFor="option2">Option 2</label>
                </fieldset>
                <div>
                    <input className={styles.btn} type="submit" value="Send" />
                    <button className={styles.btn} onClick={handleDelete}>Delete</button>
                </div>
            </form>

        </div>
    )
}

export default UserDataInput