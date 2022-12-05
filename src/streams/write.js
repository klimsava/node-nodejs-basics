import { createWriteStream } from 'fs';
import path from 'path';
import { stdin } from 'process';

const write = async () => {
    const writeStream = createWriteStream(path.resolve('files', 'fileToWrite.txt'), 'utf-8');

    stdin.pipe(writeStream);
};

await write();