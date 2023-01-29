import React from 'react'
import Input from "@/components/input"

function step1({
    nameId,
    nameValue,
    nameName,
    nameOnChange,
    nameErrorMessage,

    emailId,
    emailValue,
    emailName,
    emailOnChange,
    emailErrorMessage,

    phoneId,
    phoneValue,
    phoneName,
    phoneOnChange,
    phoneErrorMessage,
}) {
    return (
        <>
        <div className="pt-10 pb-8">
            <h1 className='text-4xl myFontBold text-primary-marineBlue'>Personal info</h1>
            <h1 className='pt-2 text-base lg:text-lg myFontRegular text-neutral-coolGray'>Please provide your name, email address, and phone number.</h1>
        </div>
        <div>
            <Input
                label="Name"
                placeholder="e.g. Safwan Azman"
                id={nameId}
                value={nameValue}
                name={nameName}
                onChange={nameOnChange}
                errorMessage={nameErrorMessage}
            />
            <Input
                label="Email Address"
                placeholder="e.g. SafwanAzman@gmail.com"
                id={emailId}
                value={emailValue}
                name={emailName}
                onChange={emailOnChange}
                errorMessage={emailErrorMessage}
            />
            <Input
                label="Phone Number"
                placeholder="e.g. +1 234 567 890"
                id={phoneId}
                value={phoneValue}
                name={phoneName}
                onChange={phoneOnChange}
                errorMessage={phoneErrorMessage}
            />
        </div>
        </>
    )
}

export default step1