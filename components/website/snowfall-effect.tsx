'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

export default function SnowfallEffect() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <Snowfall
      color={isDark ? '#ffffff' : '#d1d5db'}
      snowflakeCount={50}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}
