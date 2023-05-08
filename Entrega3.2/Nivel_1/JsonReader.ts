import fs from 'fs';
import path from 'path';

export class JsonReader {
  constructor() {
  }

  read() {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, './values.json'), 'utf8')
    );
    return data;
  }
};
