
function saveArticle() {
    let article = document.getElementById('inputArticle');

    let ulArticles = document.getElementById('ulArticles');
    ulArticles.innerHTML += `<li>${article.value}</li>`;

    article.value = '';
    article.focus();

    alert("article saved!");
}


function addCar() {
    let inputMake = document.getElementById('inputMake');
    let inputModel = document.getElementById('inputModel');
    let inputYear = document.getElementById('inputYear');
    if(inputMake.value ==="" || inputModel.value ==="" || inputYear.value ===""){
        alert("Al menos un campo está vacío, por favor llene los campos")
        return false;
    }
    let tableBody = document.getElementById('tableBody');
    
    tableBody.innerHTML += `<tr><td>${inputMake.value}</td><td>${inputModel.value}</td><td>${inputYear.value}</td></tr>`;
    alert("car added!");
}

function clearInputs() {
    let inputMake = document.getElementById('inputMake');
    let inputModel = document.getElementById('inputModel');
    let inputYear = document.getElementById('inputYear');

    inputMake.value = '';
    inputModel.value = '';
    inputYear.value = '';

    alert("inputs cleared!");
}

function clearTable() {
    let old_tbody = document.getElementById('tableBody');
    let new_tbody = document.createElement('<tbody id="tableBody"> </tbody>');

    old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
    alert("data deleted!");
}