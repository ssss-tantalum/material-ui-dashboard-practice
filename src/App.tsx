import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { ColorModeContext, useMode } from './hooks/useMode';
import { Dashboard } from './scenes/dashboard';
import { Sidebar } from './scenes/global/Sidebar';
import { Topbar } from './scenes/global/Topbar';

function App() {
  const { theme, colorMode } = useMode();
  const [isSidebarOpen, SetIsSidebarOpen] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
