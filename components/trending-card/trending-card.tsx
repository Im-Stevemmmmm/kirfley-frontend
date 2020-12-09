import { useRouter } from "next/router";
import styles from "./trending-card.module.scss";

interface TrendingCardProps {
    title: string;
    url: string;
}

export const TrendingCard = ({ title, url }: TrendingCardProps) => {
    const router = useRouter();

    return (
        <div className={styles.trendingCard} onClick={() => router.push(url)}>
            <h1 className={styles.trendingCard__title}>{title}</h1>
        </div>
    );
};

export const mockTrends: TrendingCardProps[] = [
    {
        title: "#COVID-19",
        url: "/signup",
    },
    {
        title: "#GalacticFederation",
        url: "/signup",
    },
    {
        title: "#GithubDarkTheme",
        url: "/signup",
    },
    {
        title: "#Prisma",
        url: "/signup",
    },
];
