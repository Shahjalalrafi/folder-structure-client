import React, { useState } from 'react';
import SingleFolder from './SingleFolder';

const AllFolder = () => {
    const [folders, setFolders] = useState([])

    fetch('https://peaceful-river-84147.herokuapp.com/folder')
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