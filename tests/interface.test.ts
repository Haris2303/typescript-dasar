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
});
