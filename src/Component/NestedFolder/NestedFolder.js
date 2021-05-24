import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const NestedFolder = () => {
    const [data, setData] = useState('')

    const id = useParams()
    useEffect(() => {
        fetch('http://localhost:5050/folder')
        .then(res => res.json())
        .then(result => {
            const myFolder = result.find(folder => folder._id === id.id)
            setData(myFolder)
        })
    }, [])

    return (
        <div>
            {data.name}
        </div>
    );
};

export default NestedFolder;