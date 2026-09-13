// @vitest-environment jsdom
import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SkillsCard from "./SkillsCard.jsx";

describe("SkillsCard", () => {
  it("renders the category icon, title, and every skill", () => {
    const category = {
      title: "Frontend",
      icon: "⚡",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    };

    render(<SkillsCard category={category} />);

    expect(screen.getByRole("heading", { name: category.title })).toBeInTheDocument();
    expect(screen.getByText(category.icon)).toBeInTheDocument();

    category.skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
