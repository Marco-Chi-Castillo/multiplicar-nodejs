const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(colors.green(`${base} * ${i} = ${base * i}`));
    }
}

/**Promesa para realizar la conversion del archivo */
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        /**Detecta si no es un numero */
        if (!Number(base)) {
            reject(`El dato introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El dato introducido ${limite} no es un número`);
            return;
        }
        let data = ''; //almacena los datos

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}= ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (error) => {
            if (error)
                reject(error)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

/**Se crean modulos cuando queremos usar una funcion de un archivo
 * a otro archivo, de esta forma podremos usar crearArchivo en otros
 * apartados.
 */

module.exports = {
    crearArchivo,
    listarTabla
}