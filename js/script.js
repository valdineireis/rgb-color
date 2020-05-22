/**
 * IGTI - Bootcamp Desenvolvedor Full Stack
 * Primeiro trabalho referente ao Módulo 1
 * Desenvolvido por Valdinei Reis - http://valdineireis.com.br/
 * v1.0 | 20200520
 */

window.addEventListener('load', start);

var inputRangeR, inputRangeG, inputRangeB;
var inputCodeR, inputCodeG, inputCodeB;
var boxColorPreview;

function start() {
  loadElements();

  mapperInputChange(inputRangeR, inputCodeR);
  mapperInputChange(inputRangeG, inputCodeG);
  mapperInputChange(inputRangeB, inputCodeB);

  clearValues();
}

function loadElements() {
  inputRangeR = document.querySelector('#inputRangeR');
  inputCodeR = document.querySelector('#inputCodeR');

  inputRangeG = document.querySelector('#inputRangeG');
  inputCodeG = document.querySelector('#inputCodeG');

  inputRangeB = document.querySelector('#inputRangeB');
  inputCodeB = document.querySelector('#inputCodeB');

  boxColorPreview = document.querySelector('#boxColorPreview');
}

function mapperInputChange(inputRange, inputCode) {
  inputRange.addEventListener('change', function () {
    inputCode.value = inputRange.value;
    applyRGBColor();
  });
}

function applyRGBColor() {
  let rgbColor = `rgb(${inputCodeR.value},${inputCodeG.value},${inputCodeB.value})`;
  boxColorPreview.style.backgroundColor = rgbColor;
  document.querySelector('body').style.backgroundColor = rgbColor;
}

function clearValues() {
  inputCodeR.value = inputRangeR.value = 0;
  inputCodeG.value = inputRangeG.value = 0;
  inputCodeB.value = inputRangeB.value = 0;
  applyRGBColor();
}