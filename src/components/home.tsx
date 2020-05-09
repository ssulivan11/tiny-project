import { h, FunctionalComponent } from "preact";

export interface Props {
  name: string;
}

export const App: FunctionalComponent<Props> = ({ name }: Props) => {
  return (
    <div className="container">
      <div className="banner">
        <h1>Welcome to {name}!</h1>
        <p>
          This is just a simple demo project messing with vite for the dev
          server, stupid fast, no bundling and hmr.
        </p>
        <p>Also utilizing parcel as the bundler.</p>
      </div>
    </div>
  );
};
