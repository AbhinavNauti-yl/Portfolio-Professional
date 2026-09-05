// @vitest-environment jsdom
import React from 'react';
import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeContext.jsx';

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  it('provides a theme value and toggles it', () => {
    const Consumer = () => {
      const { isDarkMode, toggleTheme } = useTheme();
      return (
        <button onClick={toggleTheme}>{isDarkMode ? 'dark' : 'light'}</button>
      );
    };

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    fireEvent.click(screen.getByRole('button', { name: 'light' }));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('throws when used outside a provider', () => {
    const Consumer = () => {
      useTheme();
      return null;
    };

    expect(() => render(<Consumer />)).toThrow('useTheme must be used within a ThemeProvider');
  });
});
