/*
Requerir paquete - required

Paquete: FileSystem
Ejercicio: grabar en un archivo de texto mi tabla de multiplicar
*/

//required, (tres tipos)
//const fs = require('fs'); importamos una libreria que es de Node
//const fs = require('express');   //No es una libreria nativa de Node, no existe en la documentacion. Es una paquete no nativo de Node(expansiones o codigo de otro desarrollador)
//const fs = require('./fs');      //Son archivos que nosotros definimos. Se le pasa el path


// Muevo este require a yargs.js para tener el codigo mas limpio
// const argv = require('yargs')
//     .command('listar', 'Muestra la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea un archivo con la tabla de multiplicar pasando la base y el limite por consola', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help() //con esta funcion visualizo en mi consola el mensaje de lo que hace el comando -> node app listar --help
//     .argv;

//importo mi archivo multiplicar.js para usar el metodo crearArchivo:
//hacer console.log(multiplicar): se vera que tiene una prop crearArchivo con mi funcion crearArchivo.
//{ crearArchivo: [Function: crearArchivo] }
//El problema es que para usar esta const se deberia llamar todo el tiempo al modulo:
//multiplicar.crearArchivo()...

//const multiplicar = require('./multiplicar/multiplicar');
//Para eso destructuramos:
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const color = require('colors');


//ahora la base no esta en una variable sino en argv.base
//console.log(argv) -> { _: [], '$0': 'app' }

let comando = argv._[0];

switch (comando) {

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => { console.log(e) }); //capturamos el error e
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    default:
        console.log('No se ha reconocido el comando');

}





//let base = 9;

/*
**
***

let data = ''; // Creo un string vacio para guardar mi tabla

for (let i = 0; i < 11; i++) {

    //console.log("2 * ", +i, "= ", +(base * i));
    data += (`${base} * ${i} = ${base*i}\n`);
}

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;

    console.log(`El archivo tabla-${ base }.txt ha sido creado con exito!`);
});

Voy a mover todo esto a multiplicar.js (separo la logica)
***
**
*/


/*ver console.log(module);
module: objeto universal que esta disponible a lo largo de toda la aplicacion

Module {
  id: '.',
  path: 'E:\\Cursos\\curso-node\\03-bases-node',
  exports: {},
  filename: 'E:\\Cursos\\curso-node\\03-bases-node\\app.js',
  loaded: false,
  children: [],
  paths: [
    'E:\\Cursos\\curso-node\\03-bases-node\\node_modules',
    'E:\\Cursos\\curso-node\\node_modules',
    'E:\\Cursos\\node_modules',
    'E:\\node_modules'
  ]
}
*/

/*
let argv = process.argv; //muestra la cantidad de argumentos. Por defecto muestra dos(el path de node y el del file). Process es un objeto global en el que viene info del sistema operativo, usuario, etc..
*/

/*
console.log(argv);
[
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\Cursos\\Projects\\curso-node\\03-bases-node\\app.js'
]


let argv2 = process.argv

console.log(argv2);
*/
//console.log(argv);

// let parametro = argv[2]; // parametro = elemento 2º pasado por consola
// //console.log(parametro);

// let base = parametro.split("=")[1]; //split = divide el string en dos elementos. Con el 1 le indico el elemento
// //console.log(base);
// //[ '--base', '7' ]

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => { console.log(e) }); //capturamos el error e