import Image from "next/image";
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const index = ({ job }) => {
    return (
        <div className="mx-2 sm:mx-20 flex flex-col sm:flex-row gap-16 ">
            <div className="flex basis-2/12 flex-col text-poppins text-base">
                <br />
                <Link
                    href="/"
                    className="cursor-pointer text-color6 font-medium"
                >
                    &larr; &nbsp; Back to search
                </Link>
                <br />
                <h1 className="font-bold text-color4">HOW TO APPLY</h1>
                <br />
                <p className="text-color5 font-medium">
                    Please email a copy of your resume and online portfolio to{" "}
                    <span className="text-color6">{job.email}</span>
                </p>
            </div>
            <div className="flex flex-col font-roboto">
                <br />
                <div className="flex gap-4 flex-col sm:flex-row">
                    <div className="text-3xl text-color5">{job.position}</div>
                    {job.isfulltime ? (
                        <div className="mx-1 text-base border-2 border-color5 border-solid max-w-max px-2 py-1 text-center rounded">
                            Full time
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="flex items-center">
                    <AiOutlineClockCircle className="h-4 w-4" /> &nbsp; 5 days
                    ago
                </div>
                <br />
                <div className=" flex gap-4">
                    <Image src={job.avatar} width={90} height={90} alt="#" />
                    <div className="flex basis-5/6 flex-col gap-4 w-9/12 text-lg">
                        <h5 className="font-bold text-color5">
                            {job.companyname}
                        </h5>
                        <div className="flex items-center text-color4">
                            <BsGlobeCentralSouthAsia className="h-4 w-4" />{" "}
                            &nbsp; {job.location}
                        </div>
                    </div>
                </div>
                <br />
                <div className="text-color5 text-lg">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Temporibus ullam ipsum impedit fugit a iusto
                        magnam laboriosam corporis incidunt dolorem. Vitae
                        explicabo iusto illum repellat odio neque deserunt
                        nesciunt nobis ex. Laudantium ex quia eum amet magnam
                        fugit! Est a, ratione hic in veritatis provident? Quasi
                        vitae ducimus quas ullam.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Temporibus ullam ipsum impedit fugit a iusto
                        magnam laboriosam corporis incidunt dolorem. Vitae
                        explicabo iusto illum repellat odio neque deserunt
                        nesciunt nobis ex. Laudantium ex quia eum amet magnam
                        fugit! Est a, ratione hic in veritatis provident? Quasi
                        vitae ducimus quas ullam.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Temporibus ullam ipsum impedit fugit a iusto
                        magnam laboriosam corporis incidunt dolorem. Vitae
                        explicabo iusto illum repellat odio neque deserunt
                        nesciunt nobis ex. Laudantium ex quia eum amet magnam
                        fugit! Est a, ratione hic in veritatis provident? Quasi
                        vitae ducimus quas ullam.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum consectetur nam impedit harum provident nisi,
                        voluptatibus accusamus excepturi nulla totam optio quam
                        adipisci quod distinctio.
                    </p>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://640c7004a3e07380e8f48952.mockapi.io/getjob/${context.params.id}`
    );

    const job = await res.json();

    return {
        props: {
            job,
        },
    };
};

export const getStaticPaths = async () => {
    const res = await fetch(
        "https://640c7004a3e07380e8f48952.mockapi.io/getjob/"
    );

    const jobs = await res.json();

    const jobids = jobs.map((job) => {
        return job.id;
    });

    const paths = jobids.map((id) => {
        return { params: { id: id.toString() } };
    });

    return {
        paths,
        fallback: false,
    };
};

export default index;
