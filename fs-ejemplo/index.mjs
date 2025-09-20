import fs from 'fs';

// Leer un archivo de manera asíncrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenido del archivo:', data);
});

// Escribir en un nuevo archivo
const content = '¡Hola desde fs.writeFile!';
fs.writeFile('./data/newfile.txt', content, (err) => {
  if (err) throw err;
  console.log('Archivo guardado');
});

// Renombrar un archivo
fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
  if (err) throw err;
  console.log('Archivo renombrado');
});