import Router, { Link } from "preact-router";
import { h, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

// @ts-ignore
import { Home } from "./Home.tsx";
// @ts-ignore
import { About } from "./About.tsx";

export const App: FunctionalComponent = () => {
  const [active, setActive] = useState("home");

  return (
    <div>
      <nav class="nav">
        <div class="container">
          <Link
            onClick={() => setActive("home")}
            className={`${active === "home" ? "active" : ""} pagename current`}
            href="/"
          >
            TinyProject
          </Link>
          <Link
            onClick={() => setActive("about")}
            className={active === "about" ? "active" : ""}
            href="/about"
          >
            About
          </Link>
          <a href="https://github.com/ssulivan11/tiny-project">Github</a>
        </div>
      </nav>
      <div class="container">
        <Router>
          <Home path="/" title={"Welcome to Tiny Project!"} />
          <About path="/about" title={"About the Tiny Project"} />
        </Router>
      </div>
    </div>
  );
};
