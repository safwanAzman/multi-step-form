import React from 'react'
import {picks} from '@/data/step3'

export default function Step3() {
    return (
        <>
        <div className="pt-10 pb-8">
            <h1 className='text-4xl myFontBold text-primary-marineBlue'>Pick add-ons</h1>
            <h1 className='pt-2 text-base lg:text-lg myFontRegular text-neutral-coolGray'>Add-ons help enhance your gaming experience.</h1>
        </div>
        <div className="grid grid-cols-1 gap-6">
        <div className="space-y-4">
            {picks.map((pick, index) => (
            <div key={index}>
                <div className="relative">
                    <input
                        type="checkbox"
                        name="pick"
                        value={pick.name}
                        id={pick.id}
                        className="peer w-5 h-5 absolute top-[1.8rem] left-[1rem] accent-primary-purplishBlue rounded-lg"
                        
                    />

                    <label htmlFor={pick.id} className="
                        flex 
                        cursor-pointer 
                        items-center 
                        justify-between 
                        rounded-lg 
                        border-[1.4px] 
                        hover:border-primary-purplishBlue 
                        hover:bg-neutral-magnolia  
                        border-neutral-lightGray p-4 text-sm 
                        peer-checked:border-primary-purplishBlue 
                        peer-checked:bg-neutral-magnolia"
                        >
                        <div className="pl-8 lg:pl-10">
                            <p className="text-sm lg:text-base text-primary-marineBlue myFontMedium">{pick.name}</p>
                            <p className="pt-1 text-xs lg:text-sm text-neutral-coolGray myFontRegular">{pick.desc}</p> 
                        </div>
                        <div>
                            <p className="text-sm lg:text-base text-primary-purplishBlue myFontMedium">{pick.priceAddMo}</p>
                        </div>
                    </label>
                    </div>
                </div>
            ))}
            

            
        </div>
        </div>
        </>
    )
}
