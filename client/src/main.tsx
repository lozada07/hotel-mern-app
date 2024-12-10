import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryProvider } from './libs/react-query/QueryProvider.tsx'
import SonnerProvider from './libs/sonner/SonnerProvider.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import App from './App.tsx'
import { SearchBarProvider } from './contexts/SearchBarContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>

    <QueryProvider >
      <AuthProvider>
        <SearchBarProvider>

          <SonnerProvider />
          <App />
        </SearchBarProvider>
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>,
)
