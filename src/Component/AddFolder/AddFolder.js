import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './AddFolder.module.css'

const AddFolder = () => {
    const history = useHistory()
    const [name, setName] = useState('')

    const handleClick = () => {
        const infoDetails = {
            name: name,
        }
        fetch('https://peaceful-river-84147.herokuapp.com/addFolder', {
            method: "POST",
            headers :{
                'content-type': 'application/json'
            },
            body: JSON.stringify(infoDetails)
        })
        .then(res => {
            setTimeout(() => {
                history.push('/')
            }, 500)
        })
    }

    const handleBlur = (e) => {
        setName(e.target.value)
    }


    return (
        <div className={styles.add}>
            <h4 style={{color:'red'}}>add folder in folder 1</h4>
            <input type="text" placeholder="folder name" onBlur={handleBlur} />
            <div className={styles.button}>
                <Link to='/'><button className={styles.cancel}>cancel</button></Link>
                <button className={styles.create} onClick={handleClick}>create</button>
            </div>
        </div>
    );
};

export default AddFolder;