import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.scss";

interface HomeContentCardProps {
    imgPath: string;
    description: string;
    href: string;
}

export const HomeContentCard = ({
    description,
    imgPath,
    href,
}: HomeContentCardProps) => {
    return (
        <Link href={href}>
            <div className={styles.card}>
                <div>
                    <Image src={imgPath} width="100%" height="100%" alt="" />
                </div>

                <div>
                    <h1 className={styles.card__title}>{description}</h1>
                </div>
            </div>
        </Link>
    );
};
