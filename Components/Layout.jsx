import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="bg-color1 font-poppins min-h-screen box-border">
            <header className="min-h-20 sm:px-20 sm:pt-8 pt-4 px-2 text-2xl sticky">
                <span className="font-bold ">Get</span> Job
            </header>
            {children}
        </div>
    );
};

export default Layout;
