import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const SingleData = (props) => {
    const {id, author, title, cover_image, author_image, publish_date, read_time, tag} = props.blog ;
    const addBookmark = props.addBookmark;
    const addTime = props.addTime;
    //add days ago function
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US');
    const pubDate = Date.parse(publish_date);
    //return jsx element
    return (
        <div className='space-y-5'>
            <img src={cover_image} alt="" className='h-60 md:h-80 w-full rounded-md' />
            <div className='flex justify-between md:flex-row flex-col gap-3'>
                <div className='flex gap-5 items-center'>
                    <img src={author_image} className="w-10 h-10" alt="" />
                    <div>
                        <h1 className='text-lg font-bold'>{author}</h1>
                        <p>{publish_date} ({timeAgo.format(pubDate - 24 * 60 * 1000)})</p>
                    </div>
                </div>
                <p className='text-lg'>{read_time} min read 
                    <FontAwesomeIcon
                       icon={faBookmark}
                        onClick={()=> addBookmark(title)}
                        className="ms-3 active:bg-amber-400 hover:bg-sky-300 font-bold" />
                </p>
            </div>
            <h1 className='md:text-3xl text-2xl font-bold '>
                {title}
            </h1>
            <p className='text-slate-500'>{tag.join("  ")}</p>
            <button className='text-[#6047EC] border-b-2 border-[#6047EC] hover:text-red-600' onClick={()=> addTime(read_time)}>Mark as read</button>
            <hr />
        </div>
    );
};

export default SingleData;