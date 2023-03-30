import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
                <img src="/images/admin.png" alt="admin" className='w-12' />
            </div>
            <hr className='border mt-2' />
        </div>
        
    );
};

export default Header;