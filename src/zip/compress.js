import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { createGzip } from 'zlib';

const compress = async () => {
    // Write your code here
    const readStrm = createReadStream(path.resolve('files', 'fileToCompress.txt'), 'utf-8');
    const writeStrm = createWriteStream(path.resolve('files', 'archive.gz'), 'utf-8');

    readStrm.pipe(createGzip()).pipe(writeStrm);
};

await compress();
