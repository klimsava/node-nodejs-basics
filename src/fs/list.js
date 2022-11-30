import { promises as fs } from 'fs';
import path from 'path';

const list = async () => {
    // Write your code here
    try {
        const pathToDir = (name = '') => path.resolve(name);
        const allFilesAndDir = await fs.readdir(pathToDir());

        if (!allFilesAndDir.includes('files')) {
            throw new Error('FS operation failed');
        }

        const allFiles = await fs.readdir(pathToDir('files'));

        for (const file of allFiles) {
            // or can use stdout
            console.log(file.trim());
        }
    } catch (err) {
        throw new Error(err);
    }
};

await list();
