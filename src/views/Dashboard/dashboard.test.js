import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "@views/Dashboard";

describe("Dashboard", () => {
  it("renders the dashboard content correctly", () => {
    render(<Dashboard />);

    expect(screen.getByAltText("phoneImg")).toBeInTheDocument();
    expect(screen.getByText("Conocenos")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Estamos afiliados a muchos bancos y con la app puedes tener todos en uno.",
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole("link")).toHaveAttribute("href", "/Banks");
  });
});
