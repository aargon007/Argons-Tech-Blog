import React from 'react';
import BookmarkItem from './BookmarkItem';

const Bookmark = (props) => {
    const bookmark = props.bookmark;
    return (
        <div className='w-5/12 space-y-5'>
            <h1 className='text-[#6047EC] border-[#6047EC] p-5 border text-xl font-bold bg-slate-100'>Spent time on read : min</h1>
            <div className='bg-slate-100 p-4'>
                <h1 className='text-xl font-bold mb-5'>Bookmarked Blogs : {bookmark.length}</h1>
                {
                    bookmark.map((item,index) => <BookmarkItem item={item} key={index}></BookmarkItem>)
                }
            </div>
        </div>
    );
};

export default Bookmark;