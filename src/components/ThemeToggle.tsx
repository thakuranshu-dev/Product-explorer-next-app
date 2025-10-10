'use client'
import React, { useEffect, useState } from 'react';
import {LightMode, DarkMode} from '@mui/icons-material';

export default function ToggleTheme() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  
  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = (theme: 'light' | 'dark') => {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      try{ localStorage.setItem('theme-mode', theme)}
      catch{}
      setTheme(theme);
    }

    const stored = (() => {
      try { return localStorage.getItem('theme-mode')} 
      catch { return null; }
    })();

    const initial: 'light' | 'dark' = (stored === 'light' || stored === 'dark') ? stored : 
    (mediaQueryList.matches ? 'dark' : 'light');

    applyTheme(initial);

    const handler = (e: MediaQueryListEvent) => {
      const storedNow = (() => {
        try{ return localStorage.getItem('theme-mode')} 
        catch{ return null; }
      })();
      if(storedNow !== 'light' && storedNow !== 'dark') 
        applyTheme(e.matches ? 'dark' : 'light');
    };

    if(mediaQueryList.addEventListener)
      mediaQueryList.addEventListener('change', handler);
    else
      mediaQueryList.addListener(handler);

    return () => {
      if(mediaQueryList.removeEventListener)
        mediaQueryList.removeEventListener('change', handler);
      else
        mediaQueryList.removeListener(handler);
    };

  }, []);

  const toggle = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      try{ localStorage.setItem('theme-mode', next)}
      catch{}
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="theme-button"
      style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      {theme === 'dark' ? <LightMode /> : <DarkMode />}
      <span className="text">{theme === null ? '' : (theme === 'dark' ? 'Light' : 'Dark')}</span>
    </button>
  );
}