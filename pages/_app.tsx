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
        uri: process.env.API_URI,
        credentials: "include",
    }),
});

const App = ({ Component, pageProps }) => {
    return (
        <div>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </div>
    );
};

export default App;
