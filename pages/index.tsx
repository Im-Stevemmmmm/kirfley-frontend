import classNames from "classnames";
import LoginForm from "components/auth-forms/login-form/login-form";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "styles/pages/index.module.scss";
import { websiteName } from "utils/constants/constants";

interface TrendingCardProps {
    title: string;
    content: string;
    url: string;
}

const dummyCards: TrendingCardProps[] = [
    {
        title: "@Stevemmmmm",
        content: `Some text`,
        url: "/signup",
    },
    {
        title: "@Someone",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "@Stevemmmmm",
        content: `Some text`,
        url: "/signup",
    },
    {
        title: "@Someone",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "@Stevemmmmm",
        content: `Some text`,
        url: "/signup",
    },
    {
        title: "@Someone",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "@Stevemmmmm",
        content: `Some text`,
        url: "/signup",
    },
    {
        title: "@Someone",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "@Stevemmmmm",
        content: `Some text`,
        url: "/signup",
    },
    {
        title: "@Someone",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "@Stevemmmmm",
        content: `Some text`,
        url: "/signup",
    },
    {
        title: "@Someone",
        content: "HIII XD",
        url: "/signup",
    },
];

const TrendingCard = ({ title, content, url }: TrendingCardProps) => {
    const router = useRouter();

    return (
        <div className={styles.trendingCard} onClick={() => router.push(url)}>
            <h1 className={styles.trendingCard__title}>{title}</h1>

            <p>{content}</p>
        </div>
    );
};

const Index = () => {
    return (
        <div>
            <Head>
                <title>{websiteName}</title>
            </Head>

            <main>
                <div className={styles.banner}>
                    <div className={styles.banner__child}>
                        <h1 className={styles.banner__title}>
                            {websiteName}

                            <span className={styles.banner__logo}>
                                <Image
                                    src="/fern.svg"
                                    width="100%"
                                    height="75px"
                                    alt="Fern picture"
                                    priority
                                />
                            </span>
                        </h1>
                    </div>

                    <div
                        className={classNames(
                            styles.banner__child,
                            styles.banner__child___form
                        )}
                    >
                        <LoginForm />
                    </div>
                </div>

                <div className={styles.trendingContainer}>
                    <h1 className={styles.trendingContainer__title}>
                        The Latest Trends
                    </h1>

                    <h2>See what the world is talking about</h2>

                    <div className={styles.trendingContainer__trendingCards}>
                        {dummyCards.map(({ content, title, url }) => (
                            <TrendingCard
                                key={title}
                                title={title}
                                content={content}
                                url={url}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Index;
