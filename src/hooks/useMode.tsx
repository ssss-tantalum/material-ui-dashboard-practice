import { createContext, useState, useMemo } from 'react';

import { PaletteMode, createTheme } from '@mui/material';

import { themeSettings } from '../theme';

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return {
    theme,
    colorMode
  };
};
