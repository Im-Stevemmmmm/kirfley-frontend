import { HomeContentCard } from "./card/card";
import styles from "./content.module.scss";

export const HomeContent = () => {
    return (
        <div className={styles.content}>
            <HomeContentCard
                title="New React Spring and Framer Motion NPM Package"
                href="/explore"
                imgPath="/forest.jpg"
            />
            <HomeContentCard
                title="New React Spring and Framer Motion NPM Package"
                href="/explore"
                imgPath="/forest.jpg"
            />
            <HomeContentCard
                title="New React Spring and Framer Motion NPM Package"
                href="/explore"
                imgPath="/forest.jpg"
            />
            <HomeContentCard
                title="New React Spring and Framer Motion NPM Package"
                href="/explore"
                imgPath="/forest.jpg"
            />
            <HomeContentCard
                title="New React Spring and Framer Motion NPM Package"
                href="/explore"
                imgPath="/forest.jpg"
            />
        </div>
    );
};
