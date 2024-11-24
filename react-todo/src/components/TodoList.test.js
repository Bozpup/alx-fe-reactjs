// __tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component correctly", () => {
    render(<TodoList />);
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("allows a user to add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("allows a user to toggle todo completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Simulate clicking the todo to toggle it
    fireEvent.click(todoItem);

    // Check if the text is struck through
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to toggle it back
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("allows a user to delete a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];

    // Click the delete button
    fireEvent.click(deleteButton);

    // Check if the todo is removed from the document
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
