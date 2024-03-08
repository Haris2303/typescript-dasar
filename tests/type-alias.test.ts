import { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
    it("should support in typescript", () => {
        const category: Category = {
            id: "SMARTPHONE",
            name: "Smartphone",
        };

        const product: Product = {
            id: 1,
            name: "Samsung A5",
            price: 5000000,
            category: category,
        };

        console.info(category);
        console.info(product);
    });
});
