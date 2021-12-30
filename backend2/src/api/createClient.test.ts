process.env.COMPLY_CUBE_API_KEY = "asdfasdf";

import { handler } from "./createClient";

describe("createClient", () => {
  it("should work", () => {
    expect(handler).toBeDefined();
    expect(1 + 1).toEqual(2);
  });
});
