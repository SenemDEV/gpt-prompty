"use client";

import "@styles/globals.css";
import Provider from "@components/Provider";
import Nav from "@components/Nav";

import { Children } from "react";

export const metadata = {
  title: "gpt-prompty",
  description:
    "Find out about the best prompts for Chat-GPT and get the best out of it!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
