/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.pug"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// content: ["views/**/*.pug"], aqui voy a indicar que carpeta o archivos contienen el css para que tailwind los escanie y lea que clases tiene para que genere un archivo con esas clases

// views/**/*.pug este archivo lo que hace es que no importa el nombre del archivo mientras tenga la extension .pug
//todos los archivos con la extension .pug son templates y todos van a tener clases de tailwind por lo tanto en esos archivos vas a encontrar las clases para generar el archivo de tailwind que vamos a usar en produccion