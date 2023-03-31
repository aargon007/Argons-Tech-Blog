import React from 'react';

const BookmarkItem = (props) => {
    return (
        <>
            <h1 className='bg-white text-xl font-semibold p-3 mb-5 rounded-md hover:bg-amber-100 transition-all'>
                {props.item}
            </h1>
        </>
    );
};

export default BookmarkItem;