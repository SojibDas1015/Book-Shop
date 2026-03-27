import React from 'react';

const Tag = ({tag}) => {
    return (
        <div>
            <span className='text-[#23BE0A] px-3 py-1 bg-[#22be0a15] rounded-2xl'>{tag}</span>
        </div>
    );
};

export default Tag;