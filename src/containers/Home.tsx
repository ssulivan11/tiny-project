import { Link } from "preact-router";
import { h, FunctionalComponent } from "preact";

export interface Props {
  title: string;
}

const imgStyle = { margin: "0 auto", display: "block" };

export const Home: FunctionalComponent<Props> = ({ title }: Props) => (
  <div className="text-center">
    <img
      style={imgStyle}
      src="src/assets/android-chrome-512x512.png"
      alt="Smiley face"
      height="200"
      width="200"
    />
    <h1>{title}</h1>
    <p>
      Read a little more <Link href="/about">here</Link>
    </p>
  </div>
);
