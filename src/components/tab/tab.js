import React from 'react'

function tab({
    stepNo,
    title,
    message,
    state
}) 
{
    return (
    <div className="flex items-start mb-5 space-x-4">
        <div className={
            state == 'active' ? 
            'flex items-center justify-center mb-2 border-none rounded-full  h-12 w-12 lg:w-9 lg:h-9 text-primary-marineBlue bg-primary-lightBlue myFontMedium' 
            : 
            'flex items-center justify-center mb-2 text-white border-[1.5px] border-white rounded-full h-12 w-12 lg:w-9 lg:h-9 bg-trasparent myFontMedium'
        }>
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