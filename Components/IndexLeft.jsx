import React from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const IndexLeft = () => {
    return (
        <form className="sticky font-poppins">
            <input
                className="h-4 w-4 border-color4 focus:border-color3"
                type="checkbox"
                name=""
                id="full-time"
            />
            <label className="ml-1 font-medium text-lg" for="full-time">
                {" "}
                Full Time
            </label>
            <br />
            <br />
            <span className="font-bold text-color4 text-lg">Location</span>
            <br />
            <div className="flex bg-color3 items-center  p-4 w-96 shadow-md rounded">
                <BsGlobeCentralSouthAsia className="text-color4" />
                <input
                    className="outline-none ml-2 w-64"
                    type="text"
                    name=""
                    id=""
                    placeholder="City , state , zip code or country"
                />
            </div>
            <br />
            <div className="flex flex-col justify-evenly h-36">
                <span className="flex items-center  border-color4 border-1 border-solid">
                    <input
                        className="h-5 w-5"
                        type="radio"
                        name="default_options"
                        id=""
                    />{" "}
                    &nbsp; Ranchi
                </span>
                <span className="flex items-center border-color4 border-1 border-solid">
                    <input
                        className="h-5 w-5"
                        type="radio"
                        name="default_options"
                        id=""
                    />{" "}
                    &nbsp; Banglore
                </span>
                <span className="flex items-center border-color4 border-1 border-solid">
                    <input
                        className="h-5 w-5"
                        type="radio"
                        name="default_options"
                        id=""
                    />{" "}
                    &nbsp; Ahemdabad
                </span>
                <span className="flex items-center border-color4 border-1 border-solid">
                    <input
                        className="h-5 w-5"
                        type="radio"
                        name="default_options"
                        id=""
                    />{" "}
                    &nbsp; New York
                </span>
            </div>
        </form>
    );
};

export default IndexLeft;
