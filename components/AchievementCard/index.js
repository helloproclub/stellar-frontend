import React from "react";
import styles from "./achievementCard.module.css";
import { ButtonOutline } from "pinoccio";

const AchievementCard = ({ title, subtitle, imgUrl }) => {
    return (
        <div className={styles["achievement-card"]}>
            <div className={styles["card-img"]}
            style={{backgroundImage: `url(${imgUrl})`,}}>                
            </div>
            <div className={styles.container}>
                <p className={styles["card-title"]}>{title}</p>                
                <p className={styles["card-subtitle"]}>{subtitle}</p>                
                <ButtonOutline text="View More"/>
            </div>
        </div>
    );
}

export default AchievementCard;