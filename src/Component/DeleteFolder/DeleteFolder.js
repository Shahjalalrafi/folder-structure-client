import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import styles from './DeleteFolder.module.css'

const DeleteFolder = () => {
    const history = useHistory()

    const id = useParams()
    console.log(id)

    const handleDelete = (del) => {
        console.log(del)
        fetch(`http://localhost:5050/folderDelete/${del}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                setTimeout(() => {
                    history.push('/')
                }, 500)
            }
        })
    }

    return (
        <div className={styles.cut}>
            <h4>delete folder</h4>
            <div className={styles.button}>
                <Link to="/"><button className={styles.cancel}>cancel</button></Link>
                <button className={styles.delete} onClick={() => handleDelete(id)} >Delete</button>
            </div>
        </div>
    );
};

export default DeleteFolder;