import classNames from "classnames";
import { default as NextLink } from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
    const Column = ({
        title,
        children,
    }: {
        title: string;
        children: React.ReactNode;
    }) => {
        return (
            <ul className={styles.column}>
                <li className={styles.column__title}>{title}</li>

                {children}
            </ul>
        );
    };

    const Link = ({
        href: location,
        tooltip,
        children,
    }: {
        href: string;
        tooltip: string;
        children: React.ReactNode;
    }) => {
        return (
            <li className={styles.column__link} title={tooltip}>
                <NextLink href={location}>{children}</NextLink>
            </li>
        );
    };

    return (
        <footer id={styles.footer}>
            <Column title="About">
                <Link href="/company" tooltip="About the company behind Fern">
                    Company
                </Link>

                <Link href="/business" tooltip="About the company behind Fern">
                    Business
                </Link>
            </Column>

            <Column title="Support">
                <Link href="/contact" tooltip="Get help with any problems">
                    Contact Us
                </Link>
            </Column>

            <Column title="Legal">
                <Link href="/" tooltip="Our privacy policy">
                    Privacy Policy
                </Link>

                <Link href="/" tooltip="Our cookie policy">
                    Cookie Policy
                </Link>

                <li
                    className={classNames(
                        styles.column__link,
                        styles.column__link___copyright
                    )}
                >
                    &copy; Fern {new Date().getFullYear()}
                </li>
            </Column>
        </footer>
    );
};

export default Footer;
