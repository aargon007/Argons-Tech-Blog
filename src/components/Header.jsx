import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center' id='home'>
                <h1 className='md:text-3xl text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Aargon's Blog</h1>
                <div className='flex items-center'>
                    <a href="#react" className='text-2xl text-indigo-500 font-bold hover:text-amber-700 mx-5 md:me-20'>React</a>
                    <img src="/images/admin.png" alt="admin" className='w-10' />
                </div>
            </div>
            <hr className='border mt-2' />
        </div>
        
    );
};

export default Header;