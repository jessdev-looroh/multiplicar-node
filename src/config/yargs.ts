import { argv, command } from "yargs";
const opts = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
};
command(
  "listar",
  "Imprime en consola la tabla de multiplicar segun un numero dado",
  opts
);
command(
  "crear",
  "Crea un archivo con la tabla de multiplicar segun un numero dado",
  opts
);


module.exports = {
    argv
}