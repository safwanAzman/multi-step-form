import React from 'react'
import Input from "@/components/input"

function step1() {
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
                // id=""
                // name=""
                // onChange=""
                errorMessage={'This field is required'}
            />
            <Input
                label="Email Address"
                placeholder="e.g. SafwanAzman@gmail.com"
                // id=""
                // name=""
                // onChange=""
                errorMessage={null}
            />
            <Input
                label="Phone Number"
                placeholder="e.g. +1 234 567 890"
                // id=""
                // name=""
                // onChange=""
                errorMessage={null}
            />
        </div>
        </>
    )
}

export default step1