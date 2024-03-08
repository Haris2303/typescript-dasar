describe("Object Type", () => {
    it("should support in typescript", () => {
        const person: { id: string; name: string; hobbies?: string[] } = {
            id: "1",
            name: "Otong",
        };

        console.info(person);

        person.id = "2";
        person.name = "Ucup";

        console.info(person);
    });
});
