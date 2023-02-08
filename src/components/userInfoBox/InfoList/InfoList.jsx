import React from 'react'
import styles from '../UserinfoBox.module.css'

const InfoList = ({ info }) => {
console.log(info)
  return (
    <>
      {info && info.map((elem, idx) => (
        <div className={styles.infoBox} key={idx}>
          <div className={styles.fileWrapper}>
            <img src={`${elem.file.replace("C:\\fakepath\\", "")}`} alt="logo" />
          </div>
          <div className={styles.infoWrapper}>
            <h3>{elem.header}</h3>
            <span>Rating : {elem.rating}</span>
            <p>{elem.description}</p>
          </div>
        </div>
      ))
      }
    </>
  )
}

export default InfoList