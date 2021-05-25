import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SingleFolder.module.css'

const SingleFolder = ({ details }) => {
    const {name, _id} = details

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://peaceful-river-84147.herokuapp.com/folderDelete/${id}`, {
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
                {name}<button className={styles.delete} onClick={() => handleDelete(_id)}>X</button>
            </div>
            <div className={styles.folderCreate}>
                <Link style={{ color: 'green', textDecoration: 'none' }} to={`/addFolder`}><span>+</span> NEW</Link>
            </div>
        </div>
    );
};

export default SingleFolder;