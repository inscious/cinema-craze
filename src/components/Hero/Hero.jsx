import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../services/Requests";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";

const Hero = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);

    const featured =
        featuredMovies[Math.floor(Math.random() * featuredMovies.length)];

    useEffect(() => {
        const fetchFeaturedMovie = async () => {
            const result = await axios(requests.requestPopular);
            setFeaturedMovies(result.data.results);
        };
        fetchFeaturedMovie();
    }, []);
    // console.log(featuredMovies);
    // console.log(featured);

    return (
        <div className="w-full lg:h-[40rem] h-96 duration-150">
            {/* Optional Chaining '?.' */}
            <div className="w-full h-full">
                <div className="bg-gradient-to-t from-black w-full absolute lg:h-[40rem] h-96 duration-150" />
                <img
                    className="object-cover w-full h-full object-top"
                    alt={featured?.title}
                    src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${featured?.backdrop_path}`}
                />
                <div className="relative w-full max-w-7xl bg-slate-00/60 mx-auto bottom-1/2 lg:bottom-1/3  px-5 xl:px-0 duration-150">
                    <h1 className="text-white text-2xl lg:text-5xl mb-5 duration-150">
                        {featured?.title}
                    </h1>
                    <div className="lg:max-w-2xl max-w-sm duration-150 md:max-w-lg">
                        <p className="text-white duration-150 text-sm line-clamp-2 lg:line-clamp-3">
                            {featured?.overview}
                        </p>
                    </div>
                    <button className="bg-purple-600/70 text-white px-3 py-2 rounded-md relative top-5 hover:bg-purple-500/70 duration-150">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
