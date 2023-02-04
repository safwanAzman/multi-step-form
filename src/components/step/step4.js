import React from 'react'
import { useFormikContext } from 'formik';


export default function Step4({onClcik}) {
    const { values } = useFormikContext();
    const basePrice = values.price;
    const addOnPrices = values.price_add_on;
    const total = basePrice + addOnPrices.reduce((a, b) => a + b, 0);
    return (
        <>
            <div className="pt-10 pb-8">
                <h1 className='text-4xl myFontBold text-primary-marineBlue'>Finishing up</h1>
                <h1 className='pt-2 text-base lg:text-lg myFontRegular text-neutral-coolGray'>Double-check everything looks OK before confirming.</h1>
            </div>
            <div>
            <div className="grid grid-cols-1 gap-6 ">
                <div className="px-8 py-4 rounded-md bg-neutral-magnolia">
                    <div className="flex items-center justify-between pb-5 border-b-[1.4px] border-neutral-lightGray">
                        <div>
                            <h1 className="text-base md:text-lg myFontBold text-primary-marineBlue">{
                                values.plan} ({values.check_plan == false ? 'Monthly' : 'Yearly'})
                            </h1>
                            <button  
                                className="relative font-medium text-primary-purplishBlue before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-purplishBlue before:transition hover:before:scale-100"
                                onClick={onClcik}>
                                Change
                            </button>
                        </div>
                        <div>
                            <h1 className="text-base md:text-lg myFontBold text-primary-marineBlue">
                                {values.check_plan == false ? '$'+values.price+'/mo' : '$'+values.price+'/yr'}
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                        <div className="space-y-4">
                        {values.add_on.map((item, index) => (
                            <h1 className="text-sm md:text-base myFontRegular text-neutral-coolGray" key={index}>
                                {item}
                            </h1>
                        ))}
                        </div>
                        <div className="space-y-4">
                        {values.price_add_on.map((item, index) => (
                            <h1 className="text-sm md:text-base myFontRegular text-primary-marineBlue" key={index}>
                                {values.check_plan == false ? '+$'+item+'/mo' : '+$'+item+'/yr'}
                            </h1>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between px-8">
                    <div>
                        <h1 className="text-sm md:text-base myFontRegular text-neutral-coolGray">
                            Total {values.check_plan == false ? '(per month)' : '(per year)'}
                        </h1>
                    </div>
                    <div>
                        <h1 className="text-base md:text-lg myFontBold text-primary-purplishBlue">
                            {values.check_plan == false ? '$' + total + '/mo' : '$' + total + '/yr'}
                        </h1>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
