// @vitest-environment jsdom
import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../utils/constants.js";

describe("ProjectCard", () => {
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
  it("renders the project content, image, technologies, and links", () => {
    render(<ProjectCard project={projects[0]} index={1} />);

    expect(
      screen.getByRole("heading", { name: projects[0].title })
    ).toBeInTheDocument();
    expect(screen.getByText(projects[0].description)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: projects[0].title })
    ).toHaveAttribute("src", projects[0].image);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      projects[0].github
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
    expect(screen.getByRole("link", { name: "Live Demo" })).toHaveAttribute(
      "href",
      projects[0].live
    );
  });
});
