var soma = [200, 500, 1000, 2000];
var total = 0
var nomes = ["Filipe", " Matheus", " Israel"," Danillo" ," Dione", " Victor"]

function Nomes() {
    document.getElementById('text1').innerHTML = nomes
}

function Numeros() {
    for(var i =0; i < soma.length; i++){
        total = total + soma[i]
    }
    document.getElementById('text').innerHTML = total
}