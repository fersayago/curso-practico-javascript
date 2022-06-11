// Cuadrado

const lado = 5;

function calcularPerimetroCuadrado(lado) {
    return lado * 4;
}

function calcularAreaCuadrado(lado) {
    return lado * lado;
}

console.group('Cuadrado');
console.log(`Lado del cuadrado: ${calcularPerimetroCuadrado(lado)}`);
console.log(`Perimetro del cuadrado: ${calcularPerimetroCuadrado(lado)}`);
console.log(`Area del cuadrado: ${calcularAreaCuadrado(lado)}`);
console.groupEnd('Cuadrado');

// Triangulo

const lado1Triangulo = 6;
const lado2Triangulo = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

function calcularPerimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.group('Triangulo');
console.log(`Los lados del trinagulo son: ${lado1Triangulo}, ${lado2Triangulo} y ${baseTriangulo}`);
console.log(`La altura del triangulo es: ${alturaTriangulo}`);
console.log(`Perimetro del triangulo: ${calcularPerimetroTriangulo(lado1Triangulo, lado2Triangulo, baseTriangulo)}`);
console.log(`Area del triangulo: ${calcularAreaTriangulo(baseTriangulo, alturaTriangulo)}`);
console.groupEnd('Triangulo');

// Circulo

const radioCirculo = 5;

function calcularDiametroCirculo(radio) {
    return radio * 2;
}

function calcularCircunferenciaCirculo(radio) {
    return 2 * Math.PI * radio;
}
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

console.group('Circulo');
console.log(`Radio del circulo: ${radioCirculo}`);
console.log(`Diametro del circulo: ${calcularDiametroCirculo(radioCirculo)}`);
console.log(`Circunferencia del circulo: ${calcularCircunferenciaCirculo(radioCirculo)}`);
console.log(`Area del circulo: ${calcularAreaCirculo(radioCirculo)}`);
console.groupEnd('Circulo');