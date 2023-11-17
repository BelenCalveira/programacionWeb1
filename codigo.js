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
let punto = 0;

function puntaje() {
    if (document.getElementById('b').checked) {
        punto = 0;
        if (document.getElementById('b1a').checked) {
            punto = punto + 1;

        }
        if (document.getElementById('b2b').checked) {
            punto = punto + 1;

        }
        if (document.getElementById('b3a').checked) {
            punto = punto + 1;

        }
        if (document.getElementById('b4c').checked) {
            punto = punto + 1;

        }
        if (document.getElementById('b5af').checked) {
            punto = punto + 1;

        }
        if (document.getElementById('b5bv').checked) {
            punto = punto + 1;

        }
        if (document.getElementById('b5cv').checked) {
            punto = punto + 1;

        }
        if (document.getElementById('b5dv').checked) {
            punto = punto + 1;

        }
    } else if (document.getElementById('i').checked) {
        punto = 0;
        if (document.getElementById('i1b').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('i2b').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('i3b').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('i4c').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('i5af').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('i5bv').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('i5cv').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('i5dv').checked) {
            punto = punto + 1;
        }
    } else if (document.getElementById('a').checked) {
        punto = 0;
        if (document.getElementById('a1c').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('a2b').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('a3a').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('a4c').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('a5af').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('a5bv').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('a5cv').checked) {
            punto = punto + 1;
        }
        if (document.getElementById('a5dv').checked) {
            punto = punto + 1;
        }
    }

}

function enviar() {
    var nombre = document.getElementById('nomb').value;
    puntaje();
    let tblDato = document.getElementById('tablaDeP').insertRow(5);
    let col1 = tblDato.insertCell(0);
    let col2 = tblDato.insertCell(1);

    col1.innerHTML = nombre;
    col2.innerHTML = punto;
}