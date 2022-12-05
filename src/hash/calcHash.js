import { createReadStream } from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { stdout } from 'process';

const calculateHash = async () => {
    // Write your code here 
    const input = createReadStream(path.resolve('files', 'fileToCalculateHashFor.txt'));

  input.pipe(createHash('sha256')).setEncoding('hex').pipe(stdout);
};

await calculateHash();