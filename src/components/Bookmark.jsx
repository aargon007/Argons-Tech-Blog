import React, { useEffect, useState } from 'react';
import BookmarkItem from './BookmarkItem';

const Bookmark = (props) => {
    const bookmark = props.bookmark;
    const time = props.time;
    const [spendTime, setSpendTime] = useState(time);
    const [localBookmark, setLocalBookmark] = useState(bookmark);

    useEffect(()=>{
        const getBookmarkFromLocal = JSON.parse(localStorage.getItem("bookmarks"));
        console.log(getBookmarkFromLocal);
        setLocalBookmark(getBookmarkFromLocal);
    },[bookmark])

    useEffect( ()=>{
        const getTimeFromLocal = localStorage.getItem("read_time");
        setSpendTime(getTimeFromLocal);
    },[time])

    return (
        <div className='md:w-5/12 space-y-5'>
            <h1 className='text-[#6047EC] border-[#6047EC] p-6 border rounded-md text-xl font-bold bg-slate-100'>
                Spent time on read : {spendTime ? spendTime : 0} min
            </h1>
            <div className='bg-slate-200 rounded-md p-6 mb-5'>
                <h1 className='text-xl font-bold mb-5'>
                    Bookmarked Blogs : {localBookmark ? localBookmark.length : 0}
                </h1>
                {
                    localBookmark && localBookmark.map((item,index) => <BookmarkItem item={item}
                     key={index}></BookmarkItem>)
                }
            </div>
        </div>
    );
};

export default Bookmark;