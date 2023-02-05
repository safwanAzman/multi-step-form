import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import ThanksIcon from '@/assets/img/icon-thank-you.svg';
import lottie from 'lottie-web';
import loading from '@/components/loading.json'
import congrat from '@/components/congrat.json'

export default function StepFinal() {
    const [showThanks, setShowThanks] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowThanks(true);
        }, 4000);
    }, []);
    return (
        <div className="grid grid-cols-1 gap-6 ">
            <div className="flex items-center justify-center h-[33rem] relative">
                <div className="flex flex-col items-center max-w-lg space-y-6 text-center">
                {!showThanks ? (
                <div>
                    <div
                        ref={(container) => {
                        lottie.loadAnimation({
                            container,
                            renderer: 'svg',
                            loop: true,
                            autoplay: true,
                            animationData: loading,
                        });
                    }}
                    />
                </div>
                ) : (
                <>
                    <div
                        className="absolute w-full h-full md:h-[30rem] md:w-[30rem] -top-2"
                        ref={(container) => {
                        lottie.loadAnimation({
                            container,
                            renderer: 'svg',
                            loop: false,
                            autoplay: true,
                            animationData: congrat,
                        });
                    }}
                    />
                    <Image src={ThanksIcon} alt={`Picture of CheckMark`} className="animate-bounce"/>
                    <h1 className="text-3xl myFontBold text-primary-marineBlue">Thank you!</h1>
                    <span className="text-lg myFontRegular text-neutral-coolGray">
                    Thanks for confirming your subscription! We hope you have fun using our platform. 
                    If you ever need support, please feel free to email us at <span className="cursor-pointer relative font-medium text-primary-purplishBlue before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-purplishBlue before:transition hover:before:scale-100">
                    support@loremgaming.com.
                    </span>
                    </span>
                </>
                )}
                </div>
            </div>
        </div>
    )
}
