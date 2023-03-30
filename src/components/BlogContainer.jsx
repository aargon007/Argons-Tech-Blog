import React, { useEffect, useState } from 'react';
import SingleData from './SingleData';

const BlogContainer = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect( () => {
        const loadData = async () => {
            const res = await fetch("/fake_data.json");
            const data = await res.json();
            
            setBlogData(data);
        }
        loadData();
    }, [])

    return (
        <div className='flex mt-5'>
            <div className='w-8/12 space-y-10'>
                {
                    blogData.map( blog => <SingleData blog={blog} key={blog.id}></SingleData>)
                }
            </div>
        </div>
    );
};

export default BlogContainer;