import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SingleFolder.module.css'

const SingleFolder = ({ details }) => {
    const {name, _id} = details

    const handleDelete = (_id) => {
        fetch(`http://localhost:5050/folderDelete/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                alert('folder delete succesfully')
            }
        })
    }

     return (
        <div className={styles.folder}>
            <div className={styles.folderName}>
                {name}<button className={styles.delete} onClick={handleDelete}>X</button>
            </div>
            <div className={styles.folderCreate}>
                <Link style={{ color: 'green', textDecoration: 'none' }} to={`/addFolder/${_id}`}><span>+</span> NEW</Link>
            </div>
        </div>
    );
};

export default SingleFolder;