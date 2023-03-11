import React from "react";
import Image from "next/image";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const RightEachJob = () => {
    return (
        <div className="h-40 flex my-2 p-2 gap-4 bg-color3 rounded shadow-md font-roboto">
            <Image src="/devchallenges.png" width={90} height={90} />
            <div className="flex basis-5/6 flex-col justify-evenly w-9/12">
                <h5 className="font-bold text-color5">Kasisto</h5>
                <h1 className="font-normal text-lg text-color5">
                    Front-End Software Engineer
                </h1>
                <div className="flex flex-col sm:flex-row text-sm">
                    <div className="basis-4/6 text-color5">
                        <div className="border-2 border-color5 border-solid max-w-max p-1 rounded">
                            Full Time
                        </div>
                    </div>
                    <div className="flex justify-between  basis-2/6 text-color4">
                        <div className="flex items-center">
                            <BsGlobeCentralSouthAsia className="h-4 w-4" />{" "}
                            &nbsp; New York
                        </div>
                        <div className="flex items-center">
                            <AiOutlineClockCircle className="h-4 w-4" /> &nbsp;
                            5 days ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightEachJob;
