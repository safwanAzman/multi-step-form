import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

import desktopBgSidebar from '../assets/img/bg-sidebar-desktop.svg'
import mobileBgSidebar from '../assets/img/bg-sidebar-mobile.svg'
import Step1 from '@/components/step/step1'
import Tab from '@/components/tab/tab'

export default function Home() {

  const step = [
    {
      stepNo: '1',
      title: 'STEP 1',
      message : 'YOUR INFO',
      state: ''
    },
    {
      stepNo: '2',
      title: 'STEP 2',
      message : 'SELECT PLAN',
      state: ''
    },
    {
      stepNo: '3',
      title: 'STEP 3',
      message : 'ADD-ONS',
      state: ''
    },
    {
      stepNo: '4',
      title: 'STEP 4',
      message : 'SUMMARY',
      state: ''
    },
    
]
  
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      <div className="block lg:hidden">
        <div className="bg-no-repeat bg-cover h-[20rem] flex items-center justify-center" style={{ backgroundImage: `url(${mobileBgSidebar.src})` }}>
            {step.map((step,index) => (
              <>
                <Tab 
                  stepNo={step.stepNo}
                  state={index === 0 ? "active" : ""}
                />
              </>
            ))}
        </div>
      </div>
      <main className="flex flex-col items-center justify-start h-screen pt-32 lg:justify-center lg:pt-0 bg-neutral-magnolia ">
        
        <div className="absolute mx-4 bg-white rounded-lg shadow-lg top-52 lg:relative lg:top-0 ">
          <div className="grid grid-cols-12 gap-8 lg:gap-6 md:gap-12">
            <div className="hidden col-span-12 lg:col-span-4 w-[21rem] bg-no-repeat bg-center h-[38rem] lg:block relative" style={{ backgroundImage: `url(${desktopBgSidebar.src})` }}>
              <div className="absolute top-[4rem] left-[4rem]">
              {step.map((step,index) => (
                <>
                  <Tab 
                    stepNo={step.stepNo}
                    title={step.title}
                    message={step.message}
                    state={index === 0 ? "active" : ""}
                  />
                </>
              ))}
              </div>
            </div>
            <div className="col-span-12 px-8 py-5 lg:pr-[7rem] lg:col-span-8">
              <Step1
                  nameId=""
                  nameName=""
                  // nameOnChange=""
                  nameErrorMessage={null}
              
                  emailId=""
                  emailName=""
                  // emailOnChange=""
                  emailErrorMessage={null}
              
                  phoneId=""
                  phoneName=""
                  // phoneOnChange=""
                  phoneErrorMessage={null}
                />



              <div className="flex justify-between mt-16">
                <button className="px-4 py-2 text-base rounded-md text-neutral-coolGray myFontBold hover:text-primary-purplishBlue">
                    Go Back
                </button>
                <button className="w-32 h-12 px-4 py-2 text-base text-white rounded-md myFontRegular bg-primary-marineBlue hover:bg-primary-purplishBlue">
                    Next Step
                </button>
              </div>
            </div>


           
          </div>
        </div>
      </main>
      </>
    </>
  )
}
