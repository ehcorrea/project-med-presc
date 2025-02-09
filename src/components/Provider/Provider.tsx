import { ThemeProvider } from 'styled-components/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from '@/constants';

type ProviderProps = {
  children: React.ReactElement;
  customQueryClient?: QueryClient;
};

const queryClient = new QueryClient();

export function Provider({ children, customQueryClient }: ProviderProps) {
  return (
    <QueryClientProvider client={customQueryClient || queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
