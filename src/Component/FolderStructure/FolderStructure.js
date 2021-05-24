import React from 'react';
import { Link } from 'react-router-dom';
import AllFolder from '../AllFolder/AllFolder';
import styles from './FolderStructure.module.css'

const FolderStructure = () => {


    return (
        <div>
            <h2>FOLDER STRUCTURE</h2>
            <div className={styles.allFolder}>
                <div className={styles.folderName}>
                    Root
                </div>
                <div className={styles.folderCreate}>
                   <Link style={{color: 'greenyellow', textDecoration:'none'}} to="/addFolder"><span>+</span> NEW</Link>
                </div>
            </div>
            <AllFolder />
        </div>
    );
};

export default FolderStructure;