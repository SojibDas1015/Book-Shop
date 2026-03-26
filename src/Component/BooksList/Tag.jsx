import React from 'react';

const Tag = ({tag}) => {
    return (
        <div>
            <p className='text-[#23BE0A] px-3 py-1 bg-[#22be0a15] rounded-2xl'>{tag}</p>
        </div>
    );
};

export default Tag;