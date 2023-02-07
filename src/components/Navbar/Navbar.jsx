import React from "react";

const Navbar = () => {
    return (
        <div className="bg-black backdrop-blur-x w-full flex z-50 h-24 items-center justify-center duration-150">
            <div className="max-w-7xl mx-auto w-full bg-slate-00 px-5 xl:px-0 duration-150 flex flex-row justify-between items-center">
                <h2 className="text-white font-bold text-3xl">Cinema Craze</h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-white stroke-2 cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Navbar;
