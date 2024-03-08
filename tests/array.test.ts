describe("Array Data Type", () => {
    it("should same with javascript", () => {
        const names: string[] = ["otong", "ucup", "asep"];
        const values: number[] = [1, 2, 3];

        console.info(names);
        console.info(values);
    });

    it("should support readonly array", () => {
        const hobbies: ReadonlyArray<string> = ["Coding", "Game"];
        console.info(hobbies);

        // hobbies[0] = "Lari"; // error
    });

    it("should support tupple", () => {
        const person: readonly [string, string, number] = [
            "Otong",
            "Lompat",
            20,
        ];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // person[0] = "Ucup"; // error
    });
});
