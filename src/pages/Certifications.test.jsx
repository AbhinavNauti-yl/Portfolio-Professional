// @vitest-environment jsdom
import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Certifications from "./Certifications.jsx";

describe("Certifications", () => {
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

  it("renders certification cards with links", () => {
    render(<Certifications />);

    expect(
      screen.getByRole("heading", { name: /^certifications$/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Data Analysis with Python")).toBeInTheDocument();
    expect(screen.getByText("IBM")).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /view certificate/i })
    ).toHaveLength(3);
  });
});
