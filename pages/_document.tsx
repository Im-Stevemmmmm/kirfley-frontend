import Document, { Head, Html, Main, NextScript } from "next/document";

const AppDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/circle.svg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

AppDocument.getInitialProps = async (ctx: any) => {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
};

AppDocument.renderDocument = Document.renderDocument;

export default AppDocument;
