import React from "react";
import Image from "next/image";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import Link from "next/link";

const RightEachJob = ({ job }) => {
    return (
        <Link href="/jobs/[id]" as={`/jobs/${job.id}`}>
            <div className="h-40 flex my-2 p-2 gap-4 bg-color3 rounded shadow-md font-roboto cursor-pointer">
                <Image src={job.avatar} width={90} height={90} alt="#" />
                <div className="flex basis-5/6 flex-col justify-evenly w-9/12">
                    <h5 className="font-bold text-color5">{job.companyname}</h5>
                    <h1 className="font-normal text-lg text-color5">
                        {job.position}
                    </h1>
                    <div className="flex flex-col sm:flex-row text-sm">
                        <div className="basis-4/6 text-color5">
                            {job.isfulltime ? (
                                <div className="border-2 border-color5 border-solid max-w-max p-1 rounded">
                                    Full Time
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="flex justify-between  basis-2/6 text-color4">
                            <div className="flex items-center">
                                <BsGlobeCentralSouthAsia className="h-4 w-4" />{" "}
                                &nbsp; {job.location}
                            </div>
                            <div className="flex items-center">
                                <AiOutlineClockCircle className="h-4 w-4" />{" "}
                                &nbsp; 5 days ago
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RightEachJob;
