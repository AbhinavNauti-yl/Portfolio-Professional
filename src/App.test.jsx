// @vitest-environment jsdom
import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App.jsx';

describe('App', () => {
  beforeEach(() => {
    class MockIntersectionObserver {
      constructor() {}
      observe() {}
      disconnect() {}
      unobserve() {}
    }

    global.IntersectionObserver = MockIntersectionObserver;
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

  it('renders the main portfolio sections', () => {
    render(<App />);

    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
    expect(screen.getByText('My Projects')).toBeInTheDocument();
    expect(screen.getAllByText('Certifications')[1]).toBeInTheDocument();
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });
});
