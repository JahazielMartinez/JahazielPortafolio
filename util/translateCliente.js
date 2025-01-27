import { Translate } from "@google-cloud/translate";

// Ruta al archivo JSON de credenciales
const keyFilePath = "./util/jdml-448601-3555ff0480ac.json";

const translate = new Translate({
  keyFilename: keyFilePath,
});

console.log("Archivo encontrado");

export default translate;
