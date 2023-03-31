import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Bookmark from './Bookmark';
import SingleData from './SingleData';

const BlogContainer = () => {
    const [blogData, setBlogData] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [timeRead, setTimeRead] = useState(0);

    const addBookmark = (title)=>{
        if(!bookmark.includes(title)){
            const newTitle = [...bookmark, title]
            setBookmark(newTitle)
            toast("Bookmark added successfully")
        } else {
            toast("Bookmark already added")
        }
    }
    // console.log(bookmark);
    const addTime = (time)=>{
        const newTime = timeRead + time;
        setTimeRead(newTime)
    }
    useEffect( () => {
        const loadData = async () => {
            const res = await fetch("/fake_data.json");
            const data = await res.json();
            setBlogData(data);
        }
        loadData();
    }, [])

    return (
        <div className='flex md:flex-row flex-col my-5 gap-5'>
            <div className='md:w-7/12 space-y-10'>
                {
                    blogData.map( blog => <SingleData
                         blog={blog}
                         key={blog.id}
                         addBookmark={addBookmark}
                         addTime={addTime}
                         ></SingleData>)
                }
            </div>
            <Bookmark
                bookmark={bookmark}
                time={timeRead}
                ></Bookmark>
        </div>
    );
};

export default BlogContainer;