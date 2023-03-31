import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between' id='home'>
                <h1 className='text-3xl font-bold'>Aargon's Blog</h1>
                <div className='flex items-center'>
                    <a href="#react" className='text-2xl text-indigo-500 font-bold hover:text-amber-700 mx-5 md:me-20'>React</a>
                    <img src="/images/admin.png" alt="admin" className='w-12' />
                </div>
            </div>
            <hr className='border mt-2' />
        </div>
        
    );
};

export default Header;