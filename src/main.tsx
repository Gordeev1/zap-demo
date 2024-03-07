import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './libs/theme/provider.tsx';
import { QueryClientProvider } from 'react-query';
import { apiQueryClient } from './libs/api/query-client.ts';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<QueryClientProvider client={apiQueryClient}>
				<App />
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
