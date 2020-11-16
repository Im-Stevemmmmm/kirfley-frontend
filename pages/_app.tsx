import '../styles/global.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
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
