function filtro() {
    var input = document.getElementById("txtColuna3");
    input.addEventListener("keyup", function () {
        var table = document.getElementById("tabela");

        var valor = input.value;

        for (var i = 0; i < table.rows.length; i++) {

            if (table.rows[i].cells[2].innerHTML.toUpperCase().indexOf(valor.toUpperCase()) < 0) {
                table.rows[i].classList.add('hide');
            } else {
                table.rows[i].classList.remove('hide');
            }
        }
    })
    var input2 = document.getElementById("txtColuna1");
    input2.addEventListener("keyup", function () {
        var table = document.getElementById("tabela");

        var valor2 = input2.value;

        for (var i = 0; i < table.rows.length; i++) {

            if (table.rows[i].cells[0].innerHTML.indexOf(valor2) < 0) {
                table.rows[i].classList.add('hide');
            } else {
                table.rows[i].classList.remove('hide');
            }
        }
    })
}

function enviar(){
var valor = document.getElementById("txtColuna0").value;
if (valor != null && valor != "")
alert("Boa Sorte, " + valor + ", Você está concorrendo a está vaga")
else 
alert("Preencha o campo Nome")
}

function direcinarIndex(){
window.open("App.js", "_self");

}
function direcionarVaga(){
window.open("App2.js", "_self");

}

function alerta(){
var unidade = prompt("Você está no Polo ou GTC")
        alert("Bem vindo a unidade, " + unidade)
            
        document.getElementById("unidade").value = unidade;
}
