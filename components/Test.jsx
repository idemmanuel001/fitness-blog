import React from 'react';

const Test = () => {
    return (
        <div className='mt-8 bg-black text-white'>
            <button
                onClick={() => console.log('Test component clicked')}
                className="p-2  border border-blue-900">
                click me
            </button>
            <button
                onClick={() => console.log('Test component clicked')}
                className="p-2  border border-blue-900">
                click me
            </button>
        </div>
    );
};

export default Test;