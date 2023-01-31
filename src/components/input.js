import React from 'react'

export default function input({
        label,
        errorMessage = null,
        onChange,
        type,
        name,
        placeholder,
        value,
        id 
    }) {
    return (
        <div className="mb-6">
            <div className="flex items-center justify-between px-[0.10rem]">
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 myFontMedium">
                    {label}
                </label>
                <label
                    className="block pr-2 mb-2 text-sm font-medium text-primary-strawberry myFontMedium">
                    {errorMessage}
                </label>
            </div>
            <input 
                className={errorMessage == null ?
                    'outline-none border-[1.5px] border-neutral-coolGray myFontMedium  text-primary-marineBlue text-base rounded-lg  focus:border-none block w-full p-3 focus:outline-neutral-coolGray '
                    :
                    'outline-none border-[1.5px] border-primary-strawberry myFontMedium text-primary-strawberry text-base rounded-lg focus:border-none block w-full p-3 focus:outline-primary-strawberry'
                } 
                type={type}
                placeholder={placeholder}
                value={value}
                id={id}
                name={name}
                onChange={onChange}
            />
        </div>
    )
}
