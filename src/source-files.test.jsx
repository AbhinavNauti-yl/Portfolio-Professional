// @vitest-environment jsdom
import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { toast } from 'react-hot-toast';

vi.mock('react-hot-toast', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import ExperienceCard from './components/ExperienceCard.jsx';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';
import { experiences, skills } from './utils/constants.js';
import About from './pages/About.jsx';
import Certifications from './pages/Certifications.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Experince from './pages/Experince.jsx';

describe('Portfolio source files', () => {
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

    class MockIntersectionObserver {
      constructor(callback) {
        this.callback = callback;
      }
      observe() {}
      disconnect() {}
      unobserve() {}
    }

    global.IntersectionObserver = MockIntersectionObserver;
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders the app shell and main sections', () => {
    render(<App />);

    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText("Hi, I'm")).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
    expect(screen.getByText('My Projects')).toBeInTheDocument();
    expect(screen.getAllByText('Certifications')[1]).toBeInTheDocument();
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('renders the about page with education and experience details', () => {
    render(<About />);

    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders the home page hero section and profile links', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /hi, i'm abhinav nautiyal/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view projects/i })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: /contact me/i })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('res.cloudinary.com'));
  });

  it('renders skill categories and progress percentages', () => {
    render(<Skills skills={skills} />);

    expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Tools & Others')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders project cards with links and metadata', () => {
    render(<Projects />);

    expect(screen.getByRole('heading', { name: /my projects/i })).toBeInTheDocument();
    expect(screen.getByText('BlogSphere')).toBeInTheDocument();
    expect(screen.getByText('Portfolio Website')).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /github/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /live demo/i }).length).toBeGreaterThan(0);
  });

  it('renders certification entries and certificate links', () => {
    render(<Certifications />);

    expect(screen.getByRole('heading', { name: /^certifications$/i })).toBeInTheDocument();
    expect(screen.getByText('Data Analysis with Python')).toBeInTheDocument();
    expect(screen.getByText('IBM')).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /view certificate/i }).length).toBe(3);
  });

  it('renders contact information and submits the message form successfully', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => ({ success: true }),
    });

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello there!' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.web3forms.com/submit',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      })
    );
    expect(toast.success).toHaveBeenCalledWith('Message Sent');
  });

  it('renders the experience timeline and card details', () => {
    render(<Experince />);

    expect(screen.getByRole('heading', { name: /^experience$/i })).toBeInTheDocument();
    expect(screen.getByText('Infosys')).toBeInTheDocument();
    expect(screen.getByText('System Associate | Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('React.js')).toBeInTheDocument();
  });

  it('renders experience card content from props', () => {
    render(
      <ExperienceCard
        company="Acme Corp"
        role="Frontend Engineer"
        duration="2024 - 2025"
        location="Remote"
        description={['Built UI components', 'Improved performance']}
        technologies={['React', 'TypeScript']}
      />
    );

    expect(screen.getByText('Frontend Engineer')).toBeInTheDocument();
    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
    expect(screen.getByText('Built UI components')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('provides theme context and toggles the document theme', () => {
    const TestConsumer = () => {
      const { isDarkMode, toggleTheme } = useTheme();

      return (
        <button onClick={toggleTheme}>
          {isDarkMode ? 'dark' : 'light'}
        </button>
      );
    };

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    fireEvent.click(screen.getByRole('button', { name: 'light' }));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('throws when useTheme is used outside a provider', () => {
    const BrokenConsumer = () => {
      useTheme();
      return null;
    };

    expect(() => render(<BrokenConsumer />)).toThrow('useTheme must be used within a ThemeProvider');
  });

  it('exports the experience list with expected metadata', () => {
    expect(experiences).toHaveLength(1);
    expect(experiences[0]).toMatchObject({
      company: 'Infosys',
      role: 'System Associate | Frontend Developer',
      location: 'Bengaluru, India',
    });
  });

  it('renders the navigation bar, toggles theme, and scrolls to sections', () => {
    const setActiveSection = vi.fn();
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
          <Navbar activeSection="home" setActiveSection={setActiveSection} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();

    const themeButtons = screen.getAllByRole('button');
    fireEvent.click(themeButtons[0]);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    fireEvent.click(screen.getByText('About'));
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });
});

describe('main entry point', () => {
  it('mounts the React app to the root element', async () => {
    const createRootMock = vi.fn(() => ({ render: vi.fn() }));
    vi.doMock('react-dom/client', () => ({
      createRoot: createRootMock,
      default: createRootMock,
    }));

    const container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);

    await import('./main.jsx');

    expect(createRootMock).toHaveBeenCalledWith(container);
    document.body.removeChild(container);
  });
});
