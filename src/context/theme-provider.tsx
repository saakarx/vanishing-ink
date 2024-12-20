import { MaterialIcon } from '@/components/material-icon';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const themes: { name: string; value: Theme; icon?: React.ReactNode }[] =
  [
    {
      name: 'Light',
      value: 'light',
      icon: (
        <MaterialIcon className='!text-[18px]/none !font-light'>
          &#xe518;
        </MaterialIcon>
      ),
    },
    {
      name: 'Dark',
      value: 'dark',
      icon: (
        <MaterialIcon className='!text-[18px]/none !font-light'>
          &#xe51c;
        </MaterialIcon>
      ),
    },
    {
      name: 'System',
      value: 'system',
      icon: (
        <MaterialIcon className='!text-[18px]/none !font-light'>
          &#xe1b1;
        </MaterialIcon>
      ),
    },
  ];

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
