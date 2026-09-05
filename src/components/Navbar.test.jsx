// @vitest-environment jsdom
import React from 'react';
import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Navbar from './Navbar.jsx';
import { ThemeProvider } from '../context/ThemeContext.jsx';

describe('Navbar', () => {
  beforeEach(() => {
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
    localStorage.clear();
  });

  it('renders nav links and toggles the theme', () => {
    const scrollIntoView = vi.fn();
    const originalGetElementById = document.getElementById.bind(document);
    document.getElementById = vi.fn((id) => {
      if (id === 'about') {
        return { scrollIntoView };
      }
      return originalGetElementById(id);
    });

    render(
      <MemoryRouter>
        <ThemeProvider>
          <Navbar activeSection="home" setActiveSection={vi.fn()} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    fireEvent.click(screen.getByText('About'));
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });
});
