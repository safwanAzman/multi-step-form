import React,{useState,useEffect,useCallback} from 'react'
import Image from 'next/image'
import {plans} from '@/data/step2'
import { useFormikContext } from 'formik';

export default function Step2() {
    const { setFieldValue } = useFormikContext();
    const [tab , setTab] = useState('1');
    const [optionPrice , setOptionPrice] = useState(false);

    const handleClick = useCallback((plan, index) => {
        localStorage.setItem('selectedTab', plan.tab);
        setFieldValue('plan', plan.name);
        setFieldValue('check_plan', optionPrice);
        setFieldValue('price', optionPrice ? plan.priceYr : plan.priceMo);
        setTab(index + 1);
    }, [optionPrice,setFieldValue]);

    useEffect(() => {
        const selectedTab = localStorage.getItem('selectedTab') ? localStorage.getItem('selectedTab') : "1"  ;
        const selectedOptionPrice = localStorage.getItem('selectedOptionPrice');
        if(selectedTab) {
            setTab(JSON.parse(selectedTab));
            const selectedPlan = plans.find(plan => plan.tab === selectedTab);
            handleClick(selectedPlan, plans.indexOf(selectedPlan));
        }
        if(selectedOptionPrice) {
            setOptionPrice(JSON.parse(selectedOptionPrice));
        }
    }, [optionPrice,handleClick]);
    
    return (
        <>
        <div className="pt-10 pb-8">
            <h1 className='text-4xl myFontBold text-primary-marineBlue'>Select your plan</h1>
            <h1 className='pt-2 text-base lg:text-lg myFontRegular text-neutral-coolGray'>You have the option of monthly or yearly billing.</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
            {plans.map((plan, index) => (
                <button
                key={plan.name}
                onClick={() => handleClick(plan, index)}
                type="button"
                className={`flex border-[1.4px] flex-row items-center p-4 space-x-4 hover:border-primary-purplishBlue rounded-lg md:flex-col md:items-start md:space-x-0 cursor-pointer
                    ${tab != index + 1 ? ' border-neutral-lightGray' : 'border-primary-purplishBlue bg-neutral-magnolia' }`}
                >
                    <Image src={plan.icon} alt={`Picture of ${plan.name} plan`} />
                    <div className="pt-0 text-left md:pt-14">
                        <h1 className="text-lg myFontMedium text-primary-marineBlue">{plan.name}</h1>
                        <h1 className="text-sm myFontRegular text-neutral-coolGray">{optionPrice ? '+$'+plan.priceYr+'/yr' : '+$'+plan.priceMo+'/mo'}</h1>
                        <h1 className="pt-1 text-xs myFontBold text-primary-marineBlue">{optionPrice ? '2 months free ' : ''}</h1>
                    </div>
                </button>
            ))}
        </div>
        <div className="flex items-center justify-center p-4 mt-6 bg-neutral-alabaster">
            <div className="flex items-center space-x-3">
                <h1 className={`text-sm myFontMedium  ${optionPrice == false ? 'text-primary-marineBlue' : 'text-neutral-coolGray' }`}>Monthly</h1>
                <label htmlFor="AcceptConditions" className="relative cursor-pointer h-7 w-14">
                    <input type="checkbox" id="AcceptConditions" className="sr-only peer" 
                        checked={optionPrice ? true : false}
                        onChange={() => {
                            localStorage.setItem('selectedOptionPrice', !optionPrice);
                            setOptionPrice(!optionPrice)
                        }}
                    />
                    <span className="absolute inset-0 transition rounded-full bg-neutral-lightGray peer-checked:bg-primary-marineBlue"></span>
                    <span className="absolute inset-0 m-1 h-5 w-5 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:w-2 peer-checked:translate-x-8 peer-checked:bg-white peer-checked:ring-transparent"> </span>
                </label>
                <h1 className={`text-sm myFontMedium  ${optionPrice == true ? 'text-primary-marineBlue' : 'text-neutral-coolGray' }`}>Yearly</h1>
            </div>
        </div>
        </>
    )
}
