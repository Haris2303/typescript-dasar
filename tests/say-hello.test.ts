import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
    it("should return hello world", () => {
        expect(sayHello("World")).toBe("Hello World");
    });
});
