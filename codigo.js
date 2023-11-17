/*var nota = 7
console.log("He realizado mi examen")
if (nota < 5)
  calificacion = "Insuficiente"
else if (nota < 6)
  calificación = "Suficiente"
else if (nota < 8)
  calificacion = "Bien"
else if (nota <= 9)
  calificacion = "Notable"
else
  calificacion = "Sobresaliente"
console.log("He obtenido un", calificacion)
var otro = document.getElementById("basico").is
console.log(otro)*/
function validarComplejidad() {
    if (document.getElementById('b').checked) {
        document.getElementById('basico').style.display = 'block';
        document.getElementById('intermedio').style.display = 'none';
        document.getElementById('avanzado').style.display = 'none';
    }
    if (document.getElementById('i').checked) {
        document.getElementById('basico').style.display = 'none';
        document.getElementById('intermedio').style.display = 'block';
        document.getElementById('avanzado').style.display = 'none';
    }
    if (document.getElementById('a').checked) {
        document.getElementById('basico').style.display = 'none';
        document.getElementById('intermedio').style.display = 'none';
        document.getElementById('avanzado').style.display = 'block';
    }

}