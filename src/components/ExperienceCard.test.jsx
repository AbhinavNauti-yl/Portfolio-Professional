// @vitest-environment jsdom
import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExperienceCard from "./ExperienceCard.jsx";

describe("ExperienceCard", () => {
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
  it("renders key card details", () => {
    render(
      <ExperienceCard
        company="Acme Corp"
        role="Frontend Engineer"
        duration="2024 - 2025"
        location="Remote"
        description={["Built UI components", "Improved performance"]}
        technologies={["React", "TypeScript"]}
      />
    );

    expect(screen.getByText("Frontend Engineer")).toBeInTheDocument();
    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
    expect(screen.getByText("Built UI components")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
