import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '../styles/global.scss';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
});

export default function App({ Component, pageProps }) {
    return (
        <div>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </div>
    );
}
