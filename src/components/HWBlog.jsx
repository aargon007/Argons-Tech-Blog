import React from 'react';

const HWBlog = () => {
    return (
        <>
            <h1 className='text-center text-3xl font-bold underline text-indigo-600' id='react'>React Blog</h1>
            <div className='py-5 grid md:grid-cols-2 gap-8 '>
                <div className='shadow-lg shadow-slate-300 p-6 border hover:bg-amber-100 transition-all rounded-md'>
                    <h1 className='text-center text-2xl font-bold mb-5'>Props vs state</h1>
                    <p className='text-xl'>Props make components reusable by giving components the ability to receive data from their parent component in the form of props. They are equivalent to function parameters.On the other hand, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.</p>
                </div>
                <div className='shadow-lg shadow-slate-300 p-6 border hover:bg-amber-100 transition-all rounded-md'>
                    <h1 className='text-center text-2xl font-bold mb-5'>How does useState work?</h1>
                    <p className='text-xl'>useState is a React Hook that add a state variable to a component. The useState can store any data type including object, array, string, boolean, or a number. We can only call useState at the top level of a component to declare a state variable. useState takes a parameter as initialState and after the initial render this argument is ignored.useState returns an array with exactly two values:
                        1. The current state. During the first render, it will match the initialState you have passed. 2. The set function that lets you update the state to a different value and trigger a re-render. </p>
                </div>
                <div className='shadow-lg shadow-slate-300 p-6 border hover:bg-amber-100 transition-all rounded-md'>
                    <h1 className='text-center text-2xl font-bold mb-5'>Purpose of useEffect other than fetching data.</h1>
                    <p className='text-xl'>the useEffect Hook allows to perform side effects in a components.The main purpose of useEffect is fetching data.Other purpose of using useEffect is directly updating the DOM, and timers</p>
                </div>
                <div className='shadow-lg shadow-slate-300 p-6 border hover:bg-amber-100 transition-all rounded-md'>
                    <h1 className='text-center text-2xl font-bold mb-5'>How Does React work?</h1>
                    <p className='text-xl'>React is written using JSX that can infuse HTML code with JavaScript.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.Whenever a React component returns an element, the Virtual DOM will update the real DOM to match.</p>
                </div>
            </div>
        </>
        
    );
};

export default HWBlog;