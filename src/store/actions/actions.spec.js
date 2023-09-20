import { listFailure, listRequired, listSuccess } from "./";

describe('Actions', () => {
  it("Should return type required list", () => {
    const result = listRequired()
    expect(result).toEqual({ type: "list_required" });
  });
  it("Should return failed list type", () => {
    const result = listFailure();
    expect(result).toEqual({ type: "list_failure" });
  });
  it("Should return success list type", () => {
    const result = listSuccess();
    expect(result).toEqual({ type: "list_success" });
  });
});
