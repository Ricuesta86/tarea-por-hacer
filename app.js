// const argv = require('yargs').argv;
const colors = require('colors');
const argv = require('./config/yargs').argv;

const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');







const comando = argv._[0];
switch (comando) {
    case 'crear':
        let porHacer = crear(argv.descripcion);
        console.log(porHacer);
        break;
    case 'listar':
        const listado = getListado();
        for (let tarea of listado) {
            console.log("============Por Hacer===========".green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("================================".green);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}