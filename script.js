// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

// Función para encriptar el texto usando código ASCII
function encriptarTexto(texto) {
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char >= 'a' && char <= 'z') {
            let codigoAscii = char.charCodeAt(0);
            let codigoEncriptado = codigoAscii + 5;

            if (codigoEncriptado > 122) {
                codigoEncriptado = codigoEncriptado - 26;
            }

            resultado += String.fromCharCode(codigoEncriptado);
        } else {
            resultado += char;
        }
    }

    return resultado;
}

// Función para descifrar el texto usando código ASCII
function descifrarTexto(texto) {
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char >= 'a' && char <= 'z') {
            let codigoAscii = char.charCodeAt(0);
            let codigoDescifrado = codigoAscii - 5;

            if (codigoDescifrado < 97) {
                codigoDescifrado = codigoDescifrado + 26;
            }

            resultado += String.fromCharCode(codigoDescifrado);
        } else {
            resultado += char;
        }
    }

    return resultado;
}

// Función para manejar el clic en el botón de cifrado
document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;

    if (!validarTexto(inputText)) {
        alert("No se aceptan mayúsculas ni caracteres especiales.");
    } else {
        const encryptedText = encriptarTexto(inputText);
        const outputTextElement = document.getElementById('output-text');
        const copyButton = document.getElementById('copy-btn');

        outputTextElement.textContent = encryptedText;
        outputTextElement.style.display = 'block';
        outputTextElement.style.color = 'green';
        outputTextElement.style.fontWeight = 'bold';
        outputTextElement.style.marginTop = '20px';

        // Mostrar el botón de copiar
        copyButton.style.display = 'block';
    }
});

// Función para manejar el clic en el botón de descifrado
document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;

    if (!validarTexto(inputText)) {
        alert("No se aceptan mayúsculas ni caracteres especiales.");
    } else {
        const decryptedText = descifrarTexto(inputText);
        const outputTextElement = document.getElementById('output-text');
        const copyButton = document.getElementById('copy-btn');

        outputTextElement.textContent = decryptedText;
        outputTextElement.style.display = 'block';
        outputTextElement.style.color = 'blue';
        outputTextElement.style.fontWeight = 'bold';
        outputTextElement.style.marginTop = '20px';

        // Ocultar el botón de copiar al descifrar
        copyButton.style.display = 'none';
    }
});

// Función para copiar el texto al portapapeles
document.getElementById('copy-btn').addEventListener('click', function() {
    const outputTextElement = document.getElementById('output-text');
    const textToCopy = outputTextElement.textContent;

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert('Texto copiado al portapapeles.');
    }, function(err) {
        alert('Error al copiar el texto: ', err);
    });
});

// Añadir nombre y año de creación en el footer
document.getElementById('footer').textContent = "Creado por Paola Jaqueline Yebra Rivero - 2024";
