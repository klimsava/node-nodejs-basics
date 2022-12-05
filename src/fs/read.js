import { promises as fs } from 'fs';
import path from 'path';

const read = async () => {
    // Write your code here 
   try {
        const pathToDir = (name = '') => path.resolve(name);
        const allFilesAndDir = await fs.readdir(pathToDir('files'));

        if (!allFilesAndDir.includes('fileToRead.txt')) {
            throw new Error('FS operation failed');
        }
        
        console.log(await fs.readFile(pathToDir('files/fileToRead.txt'), 'utf8'));
   } catch (err) {
    throw new Error(err);
   }
};

await read();