import React,{useState,useEffect,useCallback}  from 'react'
import {picks} from '@/data/step3'
import { useFormikContext } from 'formik';

export default function Step3() {
    const { setFieldValue, values } = useFormikContext();
    const [selectedAddOns, setSelectedAddOns] = useState(
        JSON.parse(localStorage.getItem('selectedAddOns')) || []
    );

    const calculateAddOnPrice = (newSelectedAddOns, checkPlan, picks) => {
        return checkPlan
        ? newSelectedAddOns.map(name => picks.find(p => p.name === name).priceAddYr)
        : newSelectedAddOns.map(name => picks.find(p => p.name === name).priceAddMo);
    };

    const handleClick = useCallback(
        (pick) => {
            let newSelectedAddOns = [...selectedAddOns];
            if (newSelectedAddOns.includes(pick.name)) {
                newSelectedAddOns = newSelectedAddOns.filter(
                    name => name !== pick.name
                );
            } else {
                newSelectedAddOns.push(pick.name);
            }
            setSelectedAddOns(newSelectedAddOns);
            localStorage.setItem(
                'selectedAddOns',
                JSON.stringify(newSelectedAddOns)
            );
            setFieldValue('add_on', newSelectedAddOns);
            setFieldValue('price_add_on', calculateAddOnPrice(newSelectedAddOns, values.check_plan, picks));
        },
        [selectedAddOns, setFieldValue,values.check_plan,]
    );
    
    useEffect(() => {
        const selectedAddOn = JSON.parse(localStorage.getItem('selectedAddOns')) || [];
        setSelectedAddOns(selectedAddOn);
        setFieldValue('price_add_on', calculateAddOnPrice(selectedAddOn, values.check_plan, picks));
        
    }, [values.check_plan,setFieldValue]);
    
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
                            name="add_on"
                            value={pick.name}
                            id={pick.id}
                            checked={selectedAddOns.includes(pick.name)}
                            className="peer w-5 h-5 absolute top-[1.8rem] left-[1rem] accent-primary-purplishBlue rounded-lg"
                            onChange={() => handleClick(pick, index)}
                            
                        />

                        <label htmlFor={pick.id} className="
                            flex 
                            cursor-pointer 
                            items-center 
                            justify-between 
                            rounded-lg 
                            border-[1.4px] 
                            hover:border-primary-purplishBlue 
                            border-neutral-lightGray p-4 text-sm 
                            peer-checked:border-primary-purplishBlue 
                            peer-checked:bg-neutral-magnolia"
                            >
                            <div className="pl-8 lg:pl-10">
                                <p className="text-sm lg:text-base text-primary-marineBlue myFontMedium">{pick.name}</p>
                                <p className="pt-1 text-xs lg:text-sm text-neutral-coolGray myFontRegular">{pick.desc}</p> 
                            </div>
                            <div>
                                <p className="text-sm lg:text-base text-primary-purplishBlue myFontMedium">
                                    {values.check_plan == false ?  '+$'+pick.priceAddMo+'/mo' :  '+$'+pick.priceAddYr+'/yr'}
                                </p>
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
