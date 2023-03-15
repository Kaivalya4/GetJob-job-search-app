import React from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const IndexLeft = () => {
    return (
        <form className="sticky font-poppins">
            <input
                className="h-4 w-4 border-color4 focus:border-color3 cursor-pointer"
                type="checkbox"
                name=""
                id="full-time"
            />
            <label
                className="ml-1 font-medium text-lg cursor-pointer"
                htmlFor="full-time"
            >
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
                <span className="flex items-center  border-color4 border-1 border-solid cursor-pointer">
                    <input
                        className="h-5 w-5 cursor-pointer"
                        type="radio"
                        name="default_options"
                        id="radio1"
                    />{" "}
                    &nbsp;
                    <label htmlFor="radio1" className="cursor-pointer">
                        Ranchi
                    </label>
                </span>
                <span className="flex items-center border-color4 border-1 border-solid cursor-pointer">
                    <input
                        className="h-5 w-5 cursor-pointer"
                        type="radio"
                        name="default_options"
                        id="radio2"
                    />{" "}
                    &nbsp;
                    <label htmlFor="radio2" className="cursor-pointer">
                        Banglore
                    </label>
                </span>
                <span className="flex items-center border-color4 border-1 border-solid cursor-pointer">
                    <input
                        className="h-5 w-5 cursor-pointer"
                        type="radio"
                        name="default_options"
                        id="radio3"
                    />{" "}
                    &nbsp;
                    <label htmlFor="radio3" className="cursor-pointer">
                        Ahemdabad
                    </label>
                </span>
                <span className="flex items-center border-color4 border-1 border-solid cursor-pointer">
                    <input
                        className="h-5 w-5 cursor-pointer"
                        type="radio"
                        name="default_options"
                        id="radio4"
                    />{" "}
                    &nbsp;
                    <label htmlFor="radio4" className="cursor-pointer">
                        New York
                    </label>
                </span>
            </div>
        </form>
    );
};

export default IndexLeft;
