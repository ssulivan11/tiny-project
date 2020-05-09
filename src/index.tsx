import { h, render } from "preact";
// @ts-ignore
import { App } from "./components/home.tsx";

render(<App name={"tiny project"} />, document.getElementById("app"));
