import React from "react";

import "./Banner.scss";
import BannerImg from "../../../src/assets/Food-img.png"

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Burritos &</h1>
                    <h1>Quesadillas</h1>
                    <p className="text-center">
                        Tex Mex Food
                    </p>
                    <div className="ctas">
                        <div className="banner-cta"><a className="a1" href="/about">Read More</a></div>
                        <div className="banner-cta v2"><a className="a2" href="/articles">Shop now</a></div>
                    </div>
                </div>
                    <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
