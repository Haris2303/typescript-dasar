describe("Function", () => {
    it("should support in typescript", () => {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Ucup")).toBe("Hello Ucup");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Otong");
    });

    it("should support defaul value", () => {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Ucup")).toBe("Hello Ucup");
        expect(sayHello()).toBe("Hello Guest");
    });

    it("should support rest parameter", () => {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it("should support optional parameter", () => {
        function sayHello(firstname: string, lastname?: string): string {
            let result: string;

            if (lastname) {
                result = `Hello ${firstname} ${lastname}`;
            } else {
                result = `Hello ${firstname}`;
            }

            return result;
        }

        expect(sayHello("Otong")).toBe("Hello Otong");
        expect(sayHello("Otong", "Surotong")).toBe("Hello Otong Surotong");
    });

    it("should support function overloading", () => {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value * 10;
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe("Otong")).toBe("OTONG");
    });

    it("should support function as parameter", () => {
        function sayHello(name: string, filter: (name: string) => string) {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Otong", toUpper)).toBe("Hello OTONG");

        // Anonymous function
        expect(
            sayHello("Ucup", function (name: string): string {
                return name.toUpperCase();
            })
        ).toBe("Hello UCUP");

        // arrow function
        expect(
            sayHello("Ucup", (name: string): string => name.toUpperCase())
        ).toBe("Hello UCUP");
    });
});
