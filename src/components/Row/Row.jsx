import React, { useEffect, useState } from "react";
import axios from "axios";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL]);
    console.log(movies);

    return (
        <div className="mt-10">
            <h3 className="text-black text-2xl">{title}</h3>
            <div className="grid md:grid-cols-5 gap-5 grid-cols-2 mt-10">
                {movies.map((data, index) => {
                    return (
                        <div key={index} className="cursor-pointer hover:scale-110 duration-150">
                            {/* <p>{data.title}</p> */}
                            <img
                                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${data?.poster_path}`}
                                alt={data?.title}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Row;
