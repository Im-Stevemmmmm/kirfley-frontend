import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { animated, useTransition } from "react-spring";
import styles from "styles/pages/index2.module.scss";

interface ItemProps {
    items: React.ReactNode;
}

interface NavbarProps extends ItemProps {
    setClicked?: Dispatch<SetStateAction<boolean>>;
    isClicked?: boolean;
}

interface SidebarProps extends ItemProps {
    transition: unknown;
}

const Sidebar = ({ items, transition }: SidebarProps) => {
    return (
        <animated.div style={transition} className={styles.sidebar}>
            <ul className={styles.sidebar__items}>{items}</ul>
        </animated.div>
    );
};

const HeaderNavbar = ({ items, isClicked, setClicked }: NavbarProps) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__icon}>
                <Image
                    src="/icons/nav-icon.svg"
                    width={35}
                    height={35}
                    onClick={() => setClicked(!isClicked)}
                    alt="Navbar Icon"
                />
            </div>

            <ul className={styles.navbar__navItems}>{items}</ul>
        </nav>
    );
};

export const Navbar = () => {
    const [isClicked, setClicked] = useState(false);

    const Items = () => {
        return (
            <>
                <li className={styles.navbar__nav}>Support</li>
                <li className={styles.navbar__nav}>Log In</li>
                <li className={styles.navbar__nav}>Sign Up</li>
            </>
        );
    };

    const transition = useTransition(isClicked, null, {
        from: {
            transform: "translateX(-100%)",
        },
        enter: {
            transform: "translateX(0)",
        },
        leave: {
            transform: "translateX(-100%)",
        },
    });

    return (
        <>
            <HeaderNavbar
                items={<Items />}
                setClicked={setClicked}
                isClicked={isClicked}
            />

            {transition.map(
                ({ item, props }) =>
                    item && <Sidebar items={<Items />} transition={props} />
            )}
        </>
    );
};
