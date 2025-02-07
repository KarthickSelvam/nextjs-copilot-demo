import { render } from "@testing-library/react";
import Head from "next/head";
import RootLayout, { metadata } from "./layout";

describe("RootLayout", () => {
  it('should have the title "Copilot Workspace Demo"', () => {
    render(
      <RootLayout>
        <div />
      </RootLayout>
    );

    const head = document.head;
    const title = head.querySelector("title");

    expect(title).toBeTruthy();
    expect(title?.textContent).toBe("Copilot Workspace Demo");
  });
});
