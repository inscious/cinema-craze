import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../services/Requests";

const Hero = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);

    useEffect(() => {
        const fetchFeaturedMovie = async () => {
            const result = await axios(requests.requestPopular);
            setFeaturedMovies(result.data.results);
        };
        fetchFeaturedMovie();
    }, []);
    console.log(featuredMovies);

    // useEffect(() => {
    //     axios.get(requests.requestPopular).then((response) => {
    //         // setFeaturedMovies(res.data.results);
    //         console.log(response)
    //     });
    // }, []);
    // console.log(featuredMovies);

    return (
        <div>
            <></>
        </div>
    );
};

export default Hero;
