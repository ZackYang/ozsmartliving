const path = require('path');
const fs = require('fs');
const fsp = fs.promises;

export default async function getFiles(filePattern: string) {
  const dirname = path.join(__dirname, '../assets/curtains');
  const data = [];
  const files = await fsp.readdir(dirname);
  for (const filename of files) {
    if (filename.includes(filePattern)) {
      const full = path.join(dirname, filename);
      data.push(full);
    }
  }
  return data;
}
