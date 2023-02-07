import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../services/Requests";

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
    console.log(featured);

    return (
        <div className="w-full lg:h-[40rem] h-96 duration-150">
            {/* Optional Chaining '?.' */}
            <div className="w-full h-full">
                <div className="bg-gradient-to-r from-black w-full absolute lg:h-[40rem] h-96 duration-150" />
                <img
                    className="object-cover w-full h-full object-top"
                    alt={featured?.title}
                    src={`https://image.tmdb.org/t/p/w1280/${featured?.backdrop_path}`}
                />
                <div className="relative w-full max-w-7xl bg-slate-00/60 mx-auto bottom-1/2 lg:bottom-1/3  px-5 xl:px-0 duration-150">
                    <h1 className="text-white text-2xl lg:text-5xl mb-5 duration-150">
                        {featured?.title}
                    </h1>
                    <div className="lg:max-w-2xl max-w-sm duration-150 md:max-w-lg">
                        <p className="text-white duration-150 text-sm line-clamp-3 lg:line-clamp-4">
                            {featured?.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
