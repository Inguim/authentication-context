import React from 'react';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import GlobalStyle from './styles/global'

function App() {

  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  )
}

export default App;
