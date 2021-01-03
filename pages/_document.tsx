import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";

const AppDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/icons/logo.svg" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

AppDocument.getInitialProps = async (ctx: DocumentContext) => {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
};

AppDocument.renderDocument = Document.renderDocument;

export default AppDocument;
