/// <reference types="enzyme-adapter-preact-pure" />

import { h } from "preact";
import { shallow } from "enzyme";
import { App } from "../app";

test("App jest tests", () => {
  const AppComponent = shallow(<App name={"test"} />);
  expect(AppComponent).toMatchSnapshot();
});
