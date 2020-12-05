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
        title: "#Geat",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "#YEET",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "YEET",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "YKEET",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "#G3ieeat",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "#YEE93T",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "YEET39",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "YKEET93",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "#Geat38207y5",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "#YEET10",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "YEET1",
        content: "HIII XD",
        url: "/signup",
    },
    {
        title: "YKEET2",
        content: "HIII XD",
        url: "/signup",
    },
];

const TrendingCard = ({ title, content, url }: TrendingCardProps) => {
    const router = useRouter();

    return (
        <div className={styles.trendingCard} onClick={() => router.push(url)}>
            <h1>{title}</h1>

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

            <main id={styles.container}>
                <div className={styles.banner}>
                    <div className={styles.banner__column}>
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

                        <h2>The #1 Video Sharing Platform</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus ultricies semper sagittis. Proin vitae
                            est augue. Duis commodo, leo sed scelerisque
                            porttitor, erat arcu lobortis velit.
                        </p>
                    </div>

                    <div
                        className={classNames(
                            styles.banner__column,
                            styles.banner__column___form
                        )}
                    >
                        <LoginForm />
                    </div>
                </div>

                <div className={styles.trendingContainer}>
                    <h1 className={styles.trendingContainer__title}>
                        Connect with the world.
                    </h1>

                    <h2>Be the first to find out about the world.</h2>

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

            {/* <Footer /> */}
        </div>
    );
};

export default Index;
