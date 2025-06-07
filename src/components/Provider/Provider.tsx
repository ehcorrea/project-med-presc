import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { THEME } from '@/constants';

type ProviderProps = {
  children: React.ReactElement;
  customQueryClient?: QueryClient;
};

const queryClient = new QueryClient();

export function Provider({ children, customQueryClient }: ProviderProps) {
  return (
    <QueryClientProvider client={customQueryClient || queryClient}>
      <ThemeProvider theme={THEME}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
