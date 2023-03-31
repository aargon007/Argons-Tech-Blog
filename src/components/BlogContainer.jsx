import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Bookmark from './Bookmark';
import SingleData from './SingleData';

const BlogContainer = () => {
    const [blogData, setBlogData] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [timeRead, setTimeRead] = useState(0);
    //fetch data from json
    useEffect( () => {
        const loadData = async () => {
            const res = await fetch("/fake_data.json");
            const data = await res.json();
            setBlogData(data);
        }
        loadData();
    }, [])

    const addBookmark = (title)=>{
        const previousBookmark = JSON.parse(localStorage.getItem("bookmarks"));
        // console.log(previousBookmark);
        if(previousBookmark == null || !previousBookmark.includes(title)){
            let bookmarkItem = [...bookmark, title];
            localStorage.setItem("bookmarks", JSON.stringify(bookmarkItem));
            setBookmark(bookmarkItem)
            toast.success("Bookmark added successfully")
        } else {
            toast.error("Bookmark already added")
        }
    }
    
    // console.log(bookmark);
    const addTime = (time)=>{
        const previousTime = JSON.parse(localStorage.getItem("read_time"));
        if(previousTime){
            const sum = previousTime + time;
            localStorage.setItem("read_time", sum)
            setTimeRead(sum);
        } else {
            localStorage.setItem("read_time", time);
            setTimeRead(time)
        }
    }
    

    return (
        <div className='flex md:flex-row flex-col mt-5 mb-10 gap-5'>
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