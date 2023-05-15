import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello world as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you + button NOT clicked", () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders clicked + button IS clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const paragraphElement = screen.getByText("changed", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("Button is Clicked and good to see you must not be visible", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const paragraphElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
