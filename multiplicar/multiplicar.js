//required
const fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite) => {

    if (!limite)
        limite = 10;

    console.log('==================='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++)
        console.log(`${ base } * ${ i } = ${ base*i }`);
}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        //Revisamos si la base introducido es un numero:
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = ''; // Creo un string vacio para guardar mi tabla

        for (let i = 1; i <= limite; i++) {

            //console.log("2 * ", +i, "= ", +(base * i));
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`.green);
        });

    });
}

//console.log(module) -- para ver las propiedades del modulo y en especial el objeto: exports: {},
//Para usar la funcion 'crearArchivo' desde otro archivo necesito exportarlo

module.exports = {
    crearArchivo,
    listarTabla
}