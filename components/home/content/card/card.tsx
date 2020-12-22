import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.scss";

interface HomeContentCardProps {
    title: string;
    imgPath: string;
    href: string;
}

export const HomeContentCard = ({
    title,
    imgPath,
    href,
}: HomeContentCardProps) => {
    return (
        <Link href={href}>
            <div className={styles.card}>
                <div className={styles.card__child}>
                    <Image src={imgPath} width="auto" height="auto" alt="" />
                </div>

                <div className={styles.cardInfo}>
                    <h1 className={styles.cardInfo__title}>{title}</h1>
                </div>
            </div>
        </Link>
    );
};
