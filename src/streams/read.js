import { createReadStream } from 'fs';
import path from 'path';
import { stdout } from 'process';

const read = async () => {
    // Write your code here
    const readStream = createReadStream(path.resolve('files', 'fileToRead.txt'), 'utf-8');
    readStream.pipe(stdout);
};

await read();