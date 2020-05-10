import { h, FunctionalComponent, Fragment } from "preact";

export interface Props {
  title: string;
}

export const About: FunctionalComponent<Props> = ({ title }: Props) => (
  <Fragment>
    <h1>{title}</h1>
    <p>
      This is just a simple{" "}
      <a href="https://github.com/preactjs/preact">preact</a> typescript demo
      project messing with{" "}
      <a href="https://github.com/vuejs/vite#bare-module-resolving">vite</a> for
      the dev server, stupid fast, no bundling and hmr.
    </p>
    <p>
      Also utilizing{" "}
      <a href="https://github.com/parcel-bundler/parcel">parcel</a> as the
      bundler. <a href="https://github.com/facebook/jest">Jest</a> and{" "}
      <a href="https://github.com/cypress-io/cypress">cypress</a> for testing.
    </p>
  </Fragment>
);
