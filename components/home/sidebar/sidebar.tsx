import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.scss";

interface SidebarItemProps {
    name: string;
    iconPath: string;
    url: string;
}

const SidebarItem = ({ iconPath, name, url }: SidebarItemProps) => {
    return (
        <Link href={url}>
            <div className={styles.item}>
                <span className={styles.item__icon}>
                    <Image src={iconPath} width="25px" height="25px" alt="" />
                </span>

                <h1 className={styles.item__title}>{name}</h1>
            </div>
        </Link>
    );
};

export const HomeSidebar = () => {
    return (
        <div className={styles.container}>
            <div>
                <SidebarItem name="Home" iconPath="/home.svg" url="/home" />
                <SidebarItem
                    name="Explore"
                    iconPath="/hashtag.svg"
                    url="/explore"
                />
            </div>
        </div>
    );
};
