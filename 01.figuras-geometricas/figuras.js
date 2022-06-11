/*
  calcular perimetro de un cuadrado:
  perimetro = lado * 4
  calcular area de un cuadrado:
  area = lado * lado
  
  calcular perimetro de un triangulo:
  perimetro = base + altura + hipotenusa
  calcular area de un triangulo:
  area = (base * altura) / 2

  calcular perimetro de un circulo:
  perimetro = 2 * pi * radio
  calcular area de un circulo:
  area = pi * radio * radio
  Calcular circunferencia de un circulo:
  circunferencia = 2 * pi * radio
*/

// Cuadrado

console.group('Cuadrado');
const ladoCuadrado = 5;
console.log(`Lado del cuadrado: ${ladoCuadrado}`);

const perimetroCuadrado = ladoCuadrado * 4
console.log(`Perimetro del cuadrado: ${perimetroCuadrado}`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`Area del cuadrado: ${areaCuadrado}`);

console.groupEnd('Cuadrado');

// Triangulo

console.group('Triangulo');
const lado1Triangulo = 6;
const lado2Triangulo = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del trinagulo son: ${lado1Triangulo}, ${lado2Triangulo} y ${baseTriangulo}`);
console.log(`La altura del triangulo es: ${alturaTriangulo}`);

const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
console.log(`Perimetro del triangulo: ${perimetroTriangulo}`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`Area del triangulo: ${areaTriangulo}`);

console.groupEnd('Triangulo');

// Circulo

console.group('Circulo');
const radioCirculo = 5;
console.log(`Radio del circulo: ${radioCirculo}`);

const diametroCirculo = radioCirculo * 2;
console.log(`Diametro del circulo: ${diametroCirculo}`);

const circunferenciaCirculo = diametroCirculo * Math.PI;
console.log(`Circunferencia del circulo: ${circunferenciaCirculo}`);

const areaCirculo = Math.PI * radioCirculo * radioCirculo
console.log(`Area del circulo: ${areaCirculo}`);

console.groupEnd('Circulo');