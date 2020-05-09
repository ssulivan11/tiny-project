import { h } from "preact";

export const App = ({ name }) => (
  <div className="container">
    <div className="banner">
      <h1>Welcome to {name}!</h1>
      <p>
        This is just a simple demo project messing with vite for a dev server
        and rollup as a tiny bundler.
      </p>
    </div>
  </div>
);
