// @vitest-environment jsdom
import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home.jsx";

describe("Home", () => {
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

  it("renders the hero section and links", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /hi, i'm abhinav nautiyal/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view projects/i })
    ).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /contact me/i })).toHaveAttribute(
      "href",
      "#contact"
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      expect.stringContaining("res.cloudinary.com")
    );
  });
});
