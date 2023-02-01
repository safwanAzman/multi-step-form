import React from 'react'

function Button({
    stateStep,
    stateHandleSubmit,
    stateHandlePrevStep
}) {
    return (
        <>
        {stateStep != 4 ?
            <div className={
                `flex 
                lg:mt-16 
                lg:py-10
                lg:px-[7rem]
                lg:bg-transparent
                lg:absolute
                lg:w-[49rem]
                lg:border-t-0
                fixed bottom-0 right-0 px-4 bg-white w-full py-3 mt-0 border-t-2
                ${stateStep > 0 ? 'justify-between' : 'justify-end'}`}
            >
            {stateStep > 0 ?
                <button type="button" onClick={stateHandlePrevStep} className="px-4 py-2 text-base transition rounded-md text-neutral-coolGray myFontBold hover:text-neutral-coolGray/50 hover:scale-90">
                    Go Back
                </button>
            : null}
            <button type="submit" 
                onClick={stateHandleSubmit} 
                className={`w-32 h-12 px-4 py-2 text-base text-white rounded-md myFontRegular transition hover:scale-90
                ${stateStep == 3 ? 'bg-primary-purplishBlue hover:bg-primary-purplishBlue/90' : 'bg-primary-marineBlue hover:bg-primary-marineBlue/90' }
                `}>
                {stateStep == 3 ? 'Confirm' : 'Next Step' }
            </button>
            </div>
        : null}
        </>
    )
}

export default Button