let opciones = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
}
const argv = require('yargs')
  /**como primer parametro introducimos el comando a realizar en este caso listar
   * como segundo es una descripcion de lo que hace ese comando, para que se muestre
   * en la informacion de ayuda
   * como tercer parametro metemos objetos, que seran la configuracion de parametros
   * que podra recibir nuestro comando
   */
  .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
  .command('crear', 'Genera un archivo con la tabla de multiplicar', opciones)
  .help()
  .argv;

module.exports = {
  argv
}