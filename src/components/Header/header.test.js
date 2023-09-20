import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@components/Header";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Header", () => {
  it("renders the header content correctly", () => {
    useRouter.mockReturnValue({ pathname: "/" });

    render(<Header />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();

    expect(screen.getByText("Banks")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/Banks");
  });

  it("renders the header content correctly when on the Banks page", () => {
    useRouter.mockReturnValue({ pathname: "/Banks" });

    render(<Header />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
