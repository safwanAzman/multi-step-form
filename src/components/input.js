import React from 'react'

function input({
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
        <div>
            <div className="flex items-center justify-between px-[0.10rem]">
                <label
                    class="block mb-2 text-sm font-medium text-gray-900 myFontMedium">
                    {label}
                </label>
                <label
                    class="block mb-2 text-sm font-medium text-primary-strawberry myFontMedium pr-2">
                    {errorMessage}
                </label>
            </div>
            <input 
                className={errorMessage == null ?
                    'outline-none border-[1.5px] border-black text-gray-900 text-sm rounded-lg  focus:border-none block w-full p-3 focus:outline-primary-marineBlue '
                    :
                    'outline-none border-[1.5px] border-primary-strawberry text-primary-strawberry text-sm rounded-lg focus:border-none block w-full p-3 focus:outline-primary-strawberry'
                } 
                type={type}
                placeholder={placeholder}
                value={value}
                id={id}
                name={name}
                onChange={onChange}
            />

{/* <input type="text"
  placeholder="Custom focus style"
  className="outline-none focus:outline-red-500" /> */}
        </div>
    )
}

export default input