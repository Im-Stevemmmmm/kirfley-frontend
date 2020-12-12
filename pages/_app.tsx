import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";
import "styles/global.scss";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_API_URI,
        credentials: "include",
    }),
});

interface AppProps {
    Component: React.ComponentType;
    pageProps: unknown;
}

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </div>
    );
};

export default App;
