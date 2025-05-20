// cypress/e2e/math.cy.js
const {
    sum,
    substract,
    multiply,
    divide,
    elevPoten,
    squareRoot,
} = require("../../calculator.js");

describe("Funciones matemáticas", () => {
    context("Función suma", () => {
        it("sum(4, 2) debería ser 6", () => {
            expect(sum(4, 2)).to.eq(6);
        });

        it("sum(-1,-1) debería ser -2", () => {
            expect(sum(-1, -1)).to.eq(-2);
        });
    });

    context("Función resta", () => {
        it("substract(10, 5) debería ser 5", () => {
            expect(substract(10, 5)).to.eq(5);
        });

        it("substract(-5, -5) debería ser 0", () => {
            expect(substract(-5, -5)).to.eq(0);
        });
    });

    context("Función multiplica", () => {
        it("multiply(3, 2) debería ser 6", () => {
            expect(multiply(3, 2)).to.eq(6);
        });

        it("multiply(-2, 4) debería ser -8", () => {
            expect(multiply(-2, 4)).to.eq(-8);
        });
    });

    context("Función division", () => {
        it("divide(10, 2) debería ser 5", () => {
            expect(divide(10, 2)).to.eq(5);
        });

        it("divide(5, 0) debería manejar la división por cero", () => {
            expect(divide(5, 0)).to.eq("NO SE PUEDE DIVIDIR ENTRE CERO");
        });
    });

    context("Función Elevada potencia", () => {
        it("elevPoten(2, 3) debería ser 8", () => {
            expect(elevPoten(2, 3)).to.eq(8);
        });

        it("elevPoten(3, 0) debería ser 1", () => {
            expect(elevPoten(3, 0)).to.eq(1);
        });
    });

    context("Función Raíz Cuadrada", () => {
        it("squareRoot(25) y squareRoot(25,) debería ser 5", () => {
            expect(squareRoot(25)).to.eq(5);
            expect(squareRoot(25)).to.eq(5);
        });

        it("squareRoot(3, 4) debería ser indicar que no ha de tener numeros en los dos campos para realizar la operación", () => {
            expect(squareRoot(3, 4)).to.eq(
                "Debe haber solo un número para calcular la raíz cuadrada"
            );
        });

        it("squareRoot(null, 4) debería decír que ponga el número en el otro campo", () => {
            expect(squareRoot(null, 4)).to.eq("Pon el número en el otro campo");
        });

        it("squareRoot(-15) debería decír que no se pueden calcular números negativos en raíces cuadradas", () => {
            expect(squareRoot(-15)).to.eq(
                "NO SE PUEDE CALCULAR LA RAÍZ CUADRADA DE NÚMEROS NEGATIVOS"
            );
        });
    });
});
