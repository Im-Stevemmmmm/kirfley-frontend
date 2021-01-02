import Image from "next/image";
import styles from "./card.module.scss";

interface CardProps {
    title: string;
    iconPath: string;
    children: React.ReactNode;
}

export const Card = ({ title, children, iconPath }: CardProps) => {
    const logoSize = 27.5;

    return (
        <div className={styles.card}>
            <Image src={iconPath} width={logoSize} height={logoSize} alt="" />

            <h1 className={styles.card__title}>{title}</h1>

            <p className={styles.card__text}>{children}</p>
        </div>
    );
};
