import React from "react";

import HomeCard from "components/home-card/HomeCard.component";

const HomePage = () => {
    return (
        <div className="home-page">
            <div>
                <h1 className="home-page__title">Ինտերնետային համալիր ծառայություններ</h1>
                <h4 className="home-page__sub-title">
                    WebMagnet վեբ-ստուդիան առաջարկում է կայքերի, հավելվածների պատրաստում, առաջխաղացում և
                    սպասարկում, կոնտեքստային գովազդ, սոցիալական էջերի վարում, կայքի աուդիտ
                </h4>
            </div>

            <div className="home-page__cards">
                <HomeCard iconName="laptop-outline" text="Կայքերի պատրաստում" />
                <HomeCard iconName="analytics-outline" text="Կայքերի առաջխաղացում" />
                <HomeCard iconName="logo-facebook" text="SMM` Առաջխաղացում սոցիալական ցանցերում" />
                <HomeCard iconName="build-outline" text="Կայքերի սպասարկում" />
                <HomeCard iconName="easel-outline" text="Գրաֆիկական դիզայն" />
                <HomeCard iconName="ribbon-outline" text="Բրենդինգ" />
            </div>
        </div>
    );
};

export default HomePage;