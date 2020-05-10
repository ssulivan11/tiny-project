import { h, render } from "preact";
// @ts-ignore
import { App } from "./components/app.tsx";

render(<App name={"tiny project"} />, document.getElementById("app"));
