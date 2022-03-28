import React from 'react'

export default function Loader ()
{
    return (
        <div className="flex justify-center items-center py-2">
            <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-orange-700"></div>
        </div>
    )
}
