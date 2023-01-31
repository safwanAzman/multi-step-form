import React from 'react'

export default function tab({
    stepNo,
    title,
    message,
    state,
}) 
{
    return (
    <div className="relative flex items-start mb-5 space-x-4">
        <div>
        <div className={
            state == 'active' ? 'absolute inline-flex w-12 h-12 rounded-full opacity-30 animate-ping bg-primary-lightBlue lg:w-9 lg:h-9' : ''}>
        </div>
        <div className={
            state == 'active' ? 
            'flex items-center justify-center mb-2 border-none rounded-full  h-12 w-12 lg:w-9 lg:h-9 text-primary-marineBlue bg-primary-lightBlue myFontMediu z-40' 
            : 
            'flex items-center justify-center mb-2 text-white border-[1.5px] border-white rounded-full h-12 w-12 lg:w-9 lg:h-9 bg-trasparent myFontMedium'
        }>
            {stepNo}
        </div>
        </div>
        
        <div>
            <h1 className="text-xs text-neutral-lightGray myFontMedium">{title}</h1>
            <h1 className="text-sm text-white myFontMedium">{message}</h1>
        </div>
    </div>
    )
}