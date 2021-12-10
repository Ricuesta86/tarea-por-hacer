const { getCipherInfo } = require('crypto');
const fs = require('fs');

let elementosGuardados = [];

const guardarArray = () => {
    let data = JSON.stringify(elementosGuardados);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        elementosGuardados = require('../db/data.json');
    } catch (error) {
        elementosGuardados = [];
    }


}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    elementosGuardados.push(porHacer);
    guardarArray();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return elementosGuardados;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = elementosGuardados.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        elementosGuardados[index].completado = completado;
        guardarArray();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    // let index = elementosGuardados.findIndex(tarea => tarea.descripcion === descripcion);
    // if (index >= 0) {
    //     elementosGuardados.splice(index, 1);
    //     guardarArray();
    //     return true;
    // } else {
    //     return false
    // }

    let nuevoArreglo = elementosGuardados.filter(tarea => tarea.descripcion !== descripcion);
    if (elementosGuardados.length === nuevoArreglo.length) {
        return false;
    } else {
        elementosGuardados = nuevoArreglo;
        guardarArray();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}