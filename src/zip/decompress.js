import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { createUnzip } from 'zlib';

const decompress = async () => {
    // Write your code here
    const readStrm = createReadStream(path.resolve('files', 'archive.gz'), 'utf-8');
    const writeStrm = createWriteStream(path.resolve('files', 'fileToCompress.txt'), 'utf-8');

    readStrm.pipe(createUnzip()).pipe(writeStrm);
};

await decompress();
