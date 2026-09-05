// @vitest-environment jsdom
import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Projects from "./Projects.jsx";

describe("Projects", () => {
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
  it("renders project cards and external links", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", { name: /my projects/i })
    ).toBeInTheDocument();
    expect(screen.getByText("BlogSphere")).toBeInTheDocument();
    expect(screen.getByText("Portfolio Website")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /github/i })).toHaveLength(3);
    expect(screen.getAllByRole("link", { name: /live demo/i })).toHaveLength(3);
  });
});
