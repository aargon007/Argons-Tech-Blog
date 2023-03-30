import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const SingleData = (props) => {
    const {id, author, title, cover_image, author_image, publish_date, read_time, tag} = props.blog ;
    const addBookmark = props.addBookmark;
    return (
        <div className='space-y-5'>
            <img src={cover_image} alt="" className='max-h-96 w-full rounded-md' />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <img src={author_image} className="w-12" alt="" />
                    <div>
                        <h1 className='text-lg font-bold'>{author}</h1>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <p>{read_time} min read 
                    <FontAwesomeIcon
                       icon={faBookmark}
                        onClick={()=> addBookmark(title)}
                        className="ms-2 active:bg-red-700 hover:bg-sky-300" />
                </p>
            </div>
            <h1 className='text-3xl font-bold '>{title}</h1>
            <p className='text-[rgba(17, 17, 17, 0.6)] '>{tag.join(" ")}</p>
            <button className='text-[#6047EC] border-b-2 border-[#6047EC]'>Mark as read</button>
            <hr />
        </div>
    );
};

export default SingleData;