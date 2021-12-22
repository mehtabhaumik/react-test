import { types } from "../../actions/types";
import reducer from "./reducer";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return a new state if receiving type", () => {
    const posts = [
      { title: "Test 1" },
      { title: "Test 2" },
      { title: "Test 3" },
    ];
    const newState = reducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
