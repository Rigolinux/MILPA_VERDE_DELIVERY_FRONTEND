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
                    <p>
                        Tex Mex Food
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
