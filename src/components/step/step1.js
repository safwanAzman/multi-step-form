import React from 'react'
import Input from "@/components/input"
import { useFormikContext } from 'formik';

export default function Step1() {
    const { handleChange,values,errors,touched, } = useFormikContext();
    return (
        <>
        <div className="pt-10 pb-8">
            <h1 className='text-4xl myFontBold text-primary-marineBlue'>Personal info</h1>
            <h1 className='pt-2 text-base lg:text-lg myFontRegular text-neutral-coolGray'>Please provide your name, email address, and phone number.</h1>
        </div>
        <div>
            <Input
                label="Name"
                id='name'
                name='name'
                placeholder="e.g. Safwan Azman"
                value={values.name}
                onChange={handleChange("name")}
                errorMessage={errors.name && touched.name ? errors.name : null}
            />
            <Input
                label="Email Address"
                placeholder="e.g. SafwanAzman@gmail.com"
                id="email"
                name='email'
                value={values.email}
                onChange={handleChange("email")}
                errorMessage={errors.email && touched.email ? errors.email : null}
            />
            <Input
                label="Phone Number"
                placeholder="e.g. +1 234 567 890"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange("phone")}
                errorMessage={errors.phone && touched.phone ? errors.phone : null}
            />
        </div>
        </>
    )
}
