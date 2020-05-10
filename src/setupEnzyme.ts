import { configure } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-preact-pure";

configure({ adapter: new EnzymeAdapter() });
