describe("Union Type", () => {
    it("should support in typescript", () => {
        let sample: number | string | boolean = "Otong";
        console.info(sample);

        sample = 25;
        console.info(sample);

        sample = true;
        console.info(sample);
    });

    it("should support typof operator", () => {
        function process(value: number | string | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process("Otong")).toBe("OTONG");
        expect(process(23)).toBe(25);
        expect(process(true)).toBeFalsy();
    });
});
