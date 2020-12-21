import { HomeContentCard } from "./card/card";
import styles from "./content.module.scss";

export const HomeContent = () => {
    return (
        <div className={styles.content}>
            <HomeContentCard
                href="/explore"
                description="Hey"
                imgPath="/forest.jpg"
            />
        </div>
    );
};
