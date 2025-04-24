import clsx from 'clsx'
import React from 'react'
import { IoMdAdd } from 'react-icons/io';

const TaskTitle = ({ label, className }) => {
    return (
        <div 
            className='h-10 md:h-12 px-6 md:px-8 rounded bg-white flex items-center justify-between' 
            style={{ 
                marginTop: '1rem', 
                marginLeft: '5rem', 
                marginRight: '5rem', 
                width: '800px' // Adjusted width to match task cards
            }} 
        >
            <div className='flex gap-2 items-center'>
                <div className={clsx("w-4 h-4 rounded-full", className)} />
                <p className='text-sm md:text-base text-gray-600'>{label}</p>
            </div>
            <button className='hidden md:block ml-2'> 
                <IoMdAdd className='text-lg text-black' />
            </button>
        </div>
    )
}

export default TaskTitle