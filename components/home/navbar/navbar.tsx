import classNames from "classnames";
import Image from "next/image";
import styles from "./navbar.module.scss";

export const HomeNavbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__items}>
                <li
                    className={classNames(
                        styles.navbar__item,
                        styles.navbar__item___logo
                    )}
                >
                    <Image src="/sec.svg" width={35} height={35} alt="Logo" />
                </li>
            </ul>
        </nav>
    );
};
