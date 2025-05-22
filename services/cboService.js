const fs = require('fs');
const path = './cbos.json';

function readFile() {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function writeFile(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

module.exports = {
  getAll: (titulo) => {
    const cbos = readFile();
    if (titulo) {
      return cbos.filter(cbo => cbo.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }
    return cbos;
  },

  getOne: (codigo) => {
    const cbos = readFile();
    return cbos.find(cbo => cbo.codigo === codigo);
  },

  create: (data) => {
    const cbos = readFile();
    cbos.push(data);
    writeFile(cbos);
    return data;
  },

  update: (codigo, newData) => {
    const cbos = readFile();
    const index = cbos.findIndex(cbo => cbo.codigo === codigo);
    if (index === -1) return null;

    cbos[index] = { ...cbos[index], ...newData };
    writeFile(cbos);
    return cbos[index];
  },

  remove: (codigo) => {
    const cbos = readFile();
    const index = cbos.findIndex(cbo => cbo.codigo === codigo);
    if (index === -1) return null;

    cbos.splice(index, 1);
    writeFile(cbos);
    return true;
  }
};
