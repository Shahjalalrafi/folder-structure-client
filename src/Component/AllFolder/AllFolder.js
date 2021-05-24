import React, { useState } from 'react';
import SingleFolder from './SingleFolder';

const AllFolder = () => {
    const [folders, setFolders] = useState([])

    fetch('http://localhost:5050/folder')
    .then(res => res.json())
    .then(data => setFolders(data))

    return (
        <div>
            {
                folders.map(folder => <SingleFolder details = {folder} />)
            }
        </div>
    );
};

export default AllFolder;