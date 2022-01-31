import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    let fileName;

    if (file.originalname.slice(-3) === 'jpg') {
      fileName = uuid.v4() + '.jpg';
    }
    if (file.originalname.slice(-3) === 'svg') {
      fileName = uuid.v4() + '.svg';
    }

    const filePath = path.resolve(__dirname, '..', 'static');
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    fs.writeFileSync(path.join(filePath, fileName), file.buffer);
    return fileName;
  }
}
