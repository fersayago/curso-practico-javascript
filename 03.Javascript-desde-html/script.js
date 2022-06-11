

function calcularPerimetroCuadrado(lado) {
    return lado * 4;
}

function calcularAreaCuadrado(lado) {
    return lado * lado;
}



function calcularPerimetroCuadradoDesdeDocumento() {
  const value = document.getElementById('inputCuadrado').value;

  const perimetro = calcularPerimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadradoDesdeDocumento() {
  const value = document.getElementById('inputCuadrado').value;

  const area = calcularAreaCuadrado(value);
  alert(area);
}