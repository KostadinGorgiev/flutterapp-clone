import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeContextType {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  toggleMenu: () => void;
  footerHeight: number;
  setFooterHeight: (height: number) => void;
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  // Add more theme-related properties here as needed
  // theme: 'light' | 'dark';
  // setTheme: (theme: 'light' | 'dark') => void;
  // toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {

    window.addEventListener("scroll", () => {
      // calculate scroll percent
      const percent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(percent);
    });
  }, []);

  const value: ThemeContextType = {
    showMenu,
    setShowMenu,
    toggleMenu,
    footerHeight,
    setFooterHeight,
    scrollProgress,
    setScrollProgress,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 