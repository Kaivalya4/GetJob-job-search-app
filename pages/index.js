import IndexLeft from "@/Components/IndexLeft";
import IndexRight from "@/Components/IndexRight";
import TotaljobContext from "@/context/totaljobContext";
import Head from "next/head";
import { BsBriefcase } from "react-icons/bs";

export default function Home({ data }) {
    return (
        <div className="mx-3 sm:mx-20">
            <div className="search-main h-32  flex justify-center items-center">
                <form className="h-3/6 w-11/12  1sm:w-4/6 bottom-1/2 bg-white py-4 pl-4 pr-1  flex flex-row items-center">
                    <BsBriefcase className="basis-2/12 bsbriefcase mr-4 text-2xl" />
                    <input
                        className="w-28 basis-11/12 1sm:basis-5/6 focus:outline-none"
                        type="text"
                        placeholder="Title , companies , expertise or benefits"
                    />
                    <button
                        className=" p-2 1sm:basis-1/6 ml-4 bg-color2 1sm:p-4 rounded text-color3 "
                        onClick={(e) => e.preventDefault()}
                    >
                        Search
                    </button>
                </form>
            </div>
            <br />
            <div className="p-2 flex flex-col lg:flex-row gap-x-9">
                <IndexLeft />
                <TotaljobContext.Provider value={data}>
                    <IndexRight />
                </TotaljobContext.Provider>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(
        "https://640c7004a3e07380e8f48952.mockapi.io/getjob"
    );
    const data = await res.json();

    return { props: { data } };
}
