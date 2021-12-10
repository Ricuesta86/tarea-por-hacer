const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}
let completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', opts)
    .command('listar', 'Muestra las tarea por hacer', {})
    .command('actualizar', 'Actualiza el estado completado de una tarea por hacer', {
        ...opts,
        completado
    })
    .command('borrar', 'Elimina una tarea por hacer', opts)
    .help()
    .argv;


module.exports = {
    argv
}