import React, { useState } from "react";
import RightEachJob from "./RightEachJob";

const IndexRight = () => {
    const [currentPage, setcurrentPage] = useState(1);
    return (
        <div className="w-full">
            <div className="flex flex-col justify-evenly w-full ">
                <RightEachJob />
                <RightEachJob />
                <RightEachJob />
                <RightEachJob />
                <RightEachJob />
            </div>
        </div>
    );
};

export default IndexRight;
