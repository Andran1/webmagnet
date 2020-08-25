import React from "react";
import Icon from "components/icon/Icon.component";

const HomeCard = ({ iconName, text }) => {
    return (
        <div className="home-card">
            <div>
                <Icon name={iconName} className="home-card__icon" />
            </div>
            <div className="home-card__text">{text}</div>
        </div>
    );
};

export default HomeCard;
