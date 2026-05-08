import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App", () => {
  it("renders the DBShield landing page", () => {
    render(<App />);

    expect(screen.getAllByText("DBShield").length).toBeGreaterThan(0);
    expect(screen.getByText(/Um painel claro/i)).toBeInTheDocument();
  });
});
