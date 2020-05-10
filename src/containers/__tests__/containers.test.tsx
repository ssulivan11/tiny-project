/// <reference types="enzyme-adapter-preact-pure" />

import { h } from "preact";
import { shallow, mount } from "enzyme";
import { App } from "../App";
import { Home } from "../Home";
import { About } from "../About";

test("Home tests", () => {
  const HomeContainer = shallow(<Home title="Testing" />);

  expect(HomeContainer.find("h1").text()).toBe("Testing");
  expect(HomeContainer).toMatchSnapshot();
});

test("About tests", () => {
  const AboutContainer = shallow(<About title="About Page" />);

  expect(AboutContainer.find("h1").text()).toBe("About Page");
  expect(AboutContainer).toMatchSnapshot();
});

test("App Interaction", () => {
  const AppContainer = mount(<App />);
  expect(AppContainer).toMatchSnapshot();

  AppContainer.find("a[href='/about']").first().simulate("click");
  expect(AppContainer.find("nav a.active").text()).toBe("About");

  AppContainer.find("a[href='/']").first().simulate("click");
  expect(AppContainer.find("nav a.active").text()).toBe("TinyProject");
});
