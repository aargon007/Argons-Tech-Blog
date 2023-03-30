import React, { useEffect, useState } from 'react';
import Bookmark from './Bookmark';
import SingleData from './SingleData';

const BlogContainer = () => {
    const [blogData, setBlogData] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    const addBookmark = (title)=>{
        const newTitle = [...bookmark, title]
        setBookmark(newTitle)
    }
    console.log(bookmark);
    useEffect( () => {
        const loadData = async () => {
            const res = await fetch("/fake_data.json");
            const data = await res.json();
            
            setBlogData(data);
        }
        loadData();
    }, [])

    return (
        <div className='flex mt-5 gap-5'>
            <div className='w-7/12 space-y-10'>
                {
                    blogData.map( blog => <SingleData blog={blog}
                         key={blog.id}
                         addBookmark={addBookmark}
                         ></SingleData>)
                }
            </div>
            <Bookmark
                bookmark={bookmark}
                ></Bookmark>
        </div>
    );
};

export default BlogContainer;