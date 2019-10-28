//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

/** argv._[0] va a tomar el nombre del comando que queremos realizar, nosotros solo
 * queremos ejecutar un comando que se llame crear y lstar, por ello creamos
 * un switch para poder capturar esos comando y trabajarlos
*/
let comando = argv._[0];

/**Podemos verificar que comando queremos ejecutar , solo deceamos tomar crear y
 * listar
 */
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.blue(archivo)))
            .catch(error => console.log(error));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default: console.log('comando no reconocido');
}

/** FORMA MANUAL DE RECIBIR UN PARAMETRO EN CONSOLA.
 * //forma de poder recibir parametros en la consola de nodeJS
    let argv = process.argv;
    let parametro = argv[2];
    let base = parametro.split('=')[1];
*/


