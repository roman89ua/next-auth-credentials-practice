'use client';

import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </>
    </QueryClientProvider>
  );
};

export default QueryProvider;
