let opts = {
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
    .command('listar', 'Muestra la tabla de multiplicar', { opts })
    .command('crear', 'Crea un archivo con la tabla de multiplicar pasando la base y el limite por consola', { opts })
    .help() //con esta funcion visualizo en mi consola el mensaje de lo que hace el comando -> node app listar --help
    .argv;


module.exports = {
    argv
}