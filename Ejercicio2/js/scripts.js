
function doSum() {

    let inputSum1 = document.getElementById('inputSum1');
    let inputSum2 = document.getElementById('inputSum2');

    let result = Number(inputSum1.value) + Number(inputSum2.value);
    // console.log(result);

    var lblSumResult = document.getElementById('lblSumResult');
    lblSumResult.innerHTML = `The result is: ${result}`;
}

function doRest() {

    let inputRest1 = document.getElementById('inputRest1');
    let inputRest2 = document.getElementById('inputRest2');

    let result = Number(inputRest1.value) - Number(inputRest2.value);
    // console.log(result);

    let lblRestResult = document.getElementById('lblRestResult');
    lblRestResult.innerHTML = `The result is: ${result}`;
}

function doMult() {

    let inputMult1 = document.getElementById('inputMult1');
    let inputMult2 = document.getElementById('inputMult2');

    let result = Number(inputMult1.value) * Number(inputMult2.value);
    // console.log(result);

    let lblMultResult = document.getElementById('lblMultResult');
    lblMultResult.innerHTML = `The result is: ${result}`;
}

function doDiv() {

    let inputDiv1 = document.getElementById('inputDiv1');
    let inputDiv2 = document.getElementById('inputDiv2');

    let result = Number(inputDiv1.value) / Number(inputDiv2.value);
    // console.log(result);

    let lblDivtResult = document.getElementById('lblDivResult');
    lblDivResult.innerHTML = `The result is: ${result}`;
}

function doSqrt() {

    let inputSqrt = document.getElementById('inputSqrt');

    let result = Math.sqrt(Number(inputSqrt.value))
    // console.log(result);

    let lblSqrtResult = document.getElementById('lblSqrtResult');
    lblSqrtResult.innerHTML = `The result is: ${result}`;
}