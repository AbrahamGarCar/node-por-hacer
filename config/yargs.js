const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado la r'
};



const argv = require('yargs')
    .command('crear', 'Crea una tarea a realizar', { descripcion })
    .command('actualizar', 'Actualiza cualquier tarea que deseé', { descripcion, completado })
    .command('borrar', 'Crea una tarea a realizar', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}