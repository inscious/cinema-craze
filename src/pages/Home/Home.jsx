import React from "react";
import Hero from "../../components/Hero/Hero";
import requests from "../../services/Requests";
import Row from "../../components/Row";

const Home = () => {
    return (
        <>
            <Hero />
            <section className="max-w-7xl mx-auto bg-slate-00 px-5 xl:px-0 duration-150 mt-">
                <Row title="Coming Soon" fetchURL={requests.requestUpcoming} />
                <Row title="Popular" fetchURL={requests.requestPopular} />
                <Row title="Top Rated Movies" fetchURL={requests.requestTopRated} />
                <Row title="Trending Movies" fetchURL={requests.requestTrending} />
                <Row title="Horror" fetchURL={requests.requestHorror} />
            </section>
        </>
    );
};

export default Home;
