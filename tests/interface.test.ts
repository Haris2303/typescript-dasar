import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/seller";

describe("Interface", () => {
    it("should support in typescript", () => {
        const seller: Seller = {
            id: 1,
            name: "Toko Z",
            nib: "1234134",
            npwp: "1234123432",
        };

        seller.name = "Toko Ganteng";
        // seller.nib = "13413413"; // error

        console.info(seller);
    });

    it("should suport function interface", () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(5, 10)).toBe(15);
    });

    it("should support indexable interface", () => {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ["Ucup", "Otong", "Budi"];
        console.info(names);
    });

    it("should suuport indexable interface for non number index", () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            name: "Otong",
            address: "Indonesia",
        };

        expect(dictionary["name"]).toBe("Otong");
        expect(dictionary["address"]).toBe("Indonesia");
    });

    it("should support extends interface", () => {
        const employee: Employee = {
            id: "1",
            name: "Otong",
            division: "IT",
        };

        console.info(employee);

        const manager: Manager = {
            id: "1",
            name: "Ucup",
            division: "IT",
            numberOfEmployees: 10,
        };

        console.info(manager);
    });

    it("should support function in interface", () => {
        const person: Person = {
            name: "Otong",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };

        console.info(person.sayHello("Ucup"));
    });

    it("should support intersection types", () => {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: string;
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: "1",
            name: "Otong",
        };

        console.info(domain);
    });

    it("should support type assertions", () => {
        const person: any = {
            name: "Otong",
            age: 23,
        };

        const person2: Person = person as Person;
        // person2.sayHello("Ucup"); // error

        console.info(person2);
    });
});
