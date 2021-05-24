import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DeleteFolder.module.css'

const DeleteFolder = () => {
    return (
        <div className={styles.cut}>
            <h4>delete folder 2</h4>
            <div className={styles.button}>
                <Link to="/"><button className={styles.cancel}>cancel</button></Link>
                <button className={styles.delete}>Delete</button>
            </div>
        </div>
    );
};

export default DeleteFolder;