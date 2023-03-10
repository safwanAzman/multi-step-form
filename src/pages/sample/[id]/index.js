import Input from "@/components/input"
import { useRouter as UseRouter } from 'next/router'

export default function sample() {
const id = UseRouter().query.id 
return (
    <div className="flex flex-col justify-center w-full h-full pt-24 space-x-0 overflow-auto bg-black lg:h-screen lg:space-x-24 lg:flex-row">
        <div className="flex">
            <div>
                <h1 className="pb-4 mr-6 text-2xl font-bold text-white">Primary-color </h1>
                <div className="flex items-center justify-center h-32 p-4 text-white bg-primary-marineBlue">
                    primary-marineBlue
                </div>
                <div className="flex items-center justify-center h-32 p-4 text-white bg-primary-purplishBlue">
                    primary-purplishBlue
                </div>
                <div className="flex items-center justify-center h-32 p-4 text-black bg-primary-pastelBlue">
                    primary-pastelBlue
                </div>
                <div className="flex items-center justify-center h-32 p-4 text-black bg-primary-lightBlue">
                    primary-lightBlue
                </div>
                <div className="flex items-center justify-center h-32 p-4 text-white bg-primary-strawberry">
                    primary-strawberry
                </div>
            </div>

            <div>
                <h1 className="pb-4 mr-6 text-2xl font-bold text-white">Neutral-color</h1>
                <div className="flex items-center justify-center h-32 p-4 text-white bg-neutral-coolGray">
                    neutral-coolGray
                </div>
                <div className="flex items-center justify-center h-32 p-4 text-black bg-neutral-lightGray">
                    neutral-lightGray
                </div>
                <div className="flex items-center justify-center h-32 p-4 text-black bg-neutral-magnolia">
                    neutral-magnolia
                </div>
                <div className="flex items-center justify-center h-32 p-4 text-black bg-neutral-alabaster">
                    neutral-alabaster
                </div>
            </div>
        </div>

        <div className="my-20">
            <h1 className="text-4xl text-white">Pass ID is - {id}</h1>
            <h1 className="pb-2 text-2xl text-white lg:text-6xl myFontRegular ">
                myFontRegular
            </h1>
            <h1 className="pb-2 text-2xl text-white lg:text-6xl myFontMedium">
                myFontMedium
            </h1>
            <h1 className="pb-2 text-2xl text-white lg:text-6xl myFontBold">
                myFontBold
            </h1>

            <div className="p-4 mt-4 bg-white rounded-lg">
                <h1 className="text-xl font-bold">My component</h1>
                <div className="grid grid-cols-1 mx-5 my-5">
                    <Input
                        label="Name"
                        placeholder="Enter your Name"
                        // value=""
                        // id=""
                        // name=""
                        // onChange=""
                        errorMessage={null}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}
