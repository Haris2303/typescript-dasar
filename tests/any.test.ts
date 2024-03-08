describe("Any Data Type", () => {
    it("should support in typescript", () => {
        const person: any = {
            id: 1,
            name: "Otong Surotong",
            age: 23,
        };

        person.age = 500;
        person.address = "Kuola";

        console.info(person);
    });
});
