import classNames from "classnames";
import { default as NextLink } from "next/link";
import { ComponentChildren } from "utils/component-children/component-children";
import styles from "./footer.module.scss";

interface ColumnProps extends ComponentChildren {
    title: string;
}

interface LinkProps extends ComponentChildren {
    href: string;
    tooltip: string;
}

const Column = ({ title, children }: ColumnProps) => {
    return (
        <ul className={styles.column}>
            <li className={styles.column__title}>{title}</li>

            {children}
        </ul>
    );
};

const Link = ({ href, tooltip, children }: LinkProps) => {
    return (
        <li className={styles.column__link} title={tooltip}>
            <NextLink href={href}>{children}</NextLink>
        </li>
    );
};

const Footer = () => {
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
