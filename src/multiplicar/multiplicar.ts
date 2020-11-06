var colors = require('colors');
import colores from 'colors';
import { writeFile as wf } from "fs";

//
// const fs = require('fs');

let listarTabla = async (base: number, limite: number = 10) => {
  
  console.log("=======================================".green);
  console.log(`===========tabla de ${base} ===========`.green);
  console.log("=======================================".green);
  
  for (let i = 0; i < limite; i++) {
    console.log(`${base} * ${i + 1} = ${base * (i + 1)}`);
  }
};

let crearArchivo = async (base: number,limite: number = 10): Promise<string> => {
  if (!Number(base)) {
    throw new Error(`${base} no es un numero permitido;`);
  }

  let data = "";
  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i} \n`;
  }

  wf(`./src/tablas/tabla-${base}.txt`, data, function (err) {
    if (err) throw err;
    return `tabla-${base}.txt`;
  });

  return `tabla-${base}.txt`;
};

module.exports = { crearArchivo, listarTabla };
