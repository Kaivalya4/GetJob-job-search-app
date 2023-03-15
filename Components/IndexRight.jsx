import TotaljobContext from "@/context/totaljobContext";
import React, { useContext, useState } from "react";
import RightEachJob from "./RightEachJob";

const IndexRight = () => {
    const data = useContext(TotaljobContext);

    const [currentPage, setcurrentPage] = useState(1);

    const totaljobs = data.length;
    const totalpage = Math.ceil(totaljobs / 5);

    const indexoflastjob = currentPage * 5;
    const indexoffirstjob = indexoflastjob - 5;
    const currentjobs = data.slice(indexoffirstjob, indexoflastjob);

    return (
        <div className="w-full">
            <div className="flex flex-col justify-evenly w-full ">
                {currentjobs.map((job) => {
                    return <RightEachJob job={job} key={job.id} />;
                })}
            </div>
        </div>
    );
};

export default IndexRight;
