import React from 'react';

const BookmarkItem = (props) => {
    return (
        <>
            <h1 className='bg-white text-xl font-semibold p-3 mb-5'>{props.item}</h1>
        </>
    );
};

export default BookmarkItem;