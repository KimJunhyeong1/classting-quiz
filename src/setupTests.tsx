import '@testing-library/jest-dom';
import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Theme from './components/themes/Theme';
import { render, RenderOptions } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

const queryClient = new QueryClient();

const AllTheProviders = ({ children }: { children?: React.ReactNode }): React.ReactElement => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Theme>{children}</Theme>
        </RecoilRoot>
      </QueryClientProvider>
    </Router>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
