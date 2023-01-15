import React from 'react'

function tab({
    stepNo,
    title,
    message,
}) 
{
    return (
    <div className="flex items-start mb-5 space-x-4">
        <div className="flex items-center justify-center mb-2 border-none rounded-full h-9 w-9 text-primary-marineBlue bg-primary-lightBlue myFontMedium">
            {stepNo}
        </div>
        <div>
            <h1 className="text-xs text-neutral-lightGray myFontMedium">{title}</h1>
            <h1 className="text-sm text-white myFontMedium">{message}</h1>
        </div>
    </div>
    )
}

export default tab