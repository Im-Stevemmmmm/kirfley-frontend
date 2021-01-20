import { QueryClient, QueryClientProvider } from "react-query";
import "styles/index.css";

interface AppProps {
  Component: React.ComponentType;
  pageProps: unknown;
}

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
