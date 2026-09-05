// @vitest-environment jsdom
import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Experince from "./Experince.jsx";

describe("Experince", () => {
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

  it("renders experience timeline content", () => {
    render(<Experince />);

    expect(
      screen.getByRole("heading", { name: /^experience$/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Infosys")).toBeInTheDocument();
    expect(
      screen.getByText("System Associate | Frontend Developer")
    ).toBeInTheDocument();
    expect(screen.getByText("React.js")).toBeInTheDocument();
  });
});
