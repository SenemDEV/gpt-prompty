import "@styles/globals.css";
import { Children } from "react";
import Provider from "@components/Provider";
import Nav from "@components/Nav";

export const metadata = {
  title: "gpt-prompty",
  description:
    "Find out about the best prompts for Chat-GPT and get the best out of it!",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
