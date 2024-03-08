describe("If Statement", () => {
    it("should support in typescript", () => {
        const examValue = 90;

        if (examValue > 80) {
            console.info("GOOD");
        } else if (examValue > 60) {
            console.info("NOT BAD");
        } else {
            console.info("TRY AGAIN");
        }
    });

    it("should support ternary operator", () => {
        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again";

        console.info(say);
    });

    it("should support switch statement", () => {
        function sayHello(name: string): string {
            switch (name) {
                case "Otong":
                    return "Hello Otong";
                case "Ucup":
                    return "Hello Ucup";
                default:
                    return "Hello Bro";
            }
        }

        console.info(sayHello("Otong"));
        console.info(sayHello("Ucup"));
        console.info(sayHello("Budi"));
    });
});
