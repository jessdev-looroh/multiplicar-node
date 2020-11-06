var colors = require('colors');
import colores from 'colors';
const { listarTabla,crearArchivo } = require("./multiplicar/multiplicar");
const { argv } = require("./config/yargs");




let comando = argv._[0];
let base;
let limite;
switch (comando) {
  case "listar":
    base = argv.base;
    limite = argv.limite;
    listarTabla(base, limite);

    break;
  case "crear":
    base = argv.base;
    limite = argv.limite;

    crearArchivo(base, limite)
      .then((archivo: any) => console.log(`Archivo creado: ${colores.green(archivo)}`.bgRed))
      .catch((err: string) => console.log(err));
    console.log("Crear");
    break;

  default:
    console.log("Comando no reconocido");
    break;
}

// console.log("argv2:",argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);
//
