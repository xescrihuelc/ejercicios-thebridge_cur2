function assertEquals(actual, expected, testName) {
    if (actual === expected) {
        return `Test: ${testName}\n\nPASSED ✅`;
    } else {
        return `Test: ${testName}\n\nFAILED ❌ || EXPECTED: ${expected} 🆚 OBTAINED ${actual}`;
    }
}

console.log(assertEquals(sum(4, 2), 6, "sum(4, 2) debería ser 6:"));
console.log(assertEquals(sum(-1, -1), -2, "sum(-1,-1) debería ser -2:"));
console.log(
    assertEquals(substract(10, 5), 5, "substract(10, 5) debería ser 5:")
);
console.log(
    assertEquals(substract(-5, -5), 0, "substract(-5, -5) debería ser 0:")
);
console.log(assertEquals(multiply(3, 2), 6, "multiply(3, 2) debería ser 6:"));
console.log(
    assertEquals(multiply(-2, 4), -8, "multiply(-2, 4) debería ser -8:")
);
console.log(assertEquals(divide(10, 2), 5, "divide(10, 2) debería ser 5:"));
console.log(
    assertEquals(
        divide(5, 0),
        "NO SE PUEDE DIVIDIR ENTRE CERO",
        "divide(5, 0) debería manejar la división por cero:"
    )
);
console.log(assertEquals(elevPoten(2, 3), 8, "elevPoten(2, 3) debería ser 8:"));
console.log(assertEquals(elevPoten(3, 0), 1, "elevPoten(3, 0) debería ser 1:"));
console.log(assertEquals(squareRoot(25), 5, "squareRoot(25,) debería ser 5:"));
console.log(
    assertEquals(
        squareRoot(3, 4),
        "Debe haber solo un número para calcular la raíz cuadrada",
        "squareRoot(3, 4) debería ser indicar que no ha de tener numeros en los dos campos para realizar la operación:"
    )
);
console.log(
    assertEquals(
        squareRoot(null, 4),
        "Pon el número en el otro campo",
        "squareRoot(, 4) debería decír que ponga el número en el otro campo:"
    )
);
