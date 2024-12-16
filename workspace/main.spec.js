import { test } from "vitest";

test("uncaught", () => {
  Promise.reject("boom!");
});
