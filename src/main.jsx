import { createRoot } from 'react-dom/client';
import App from './App';
import { FiltersProvider } from './context/FiltersContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const root = createRoot(document.querySelector('#app'));
root.render(
  <QueryClientProvider client={queryClient}>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </QueryClientProvider>
);
