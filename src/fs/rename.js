import { promises as fs } from 'fs';
import path from 'path';

const rename = async () => {
    // Write your code here
    const allFiles = await fs.readdir(path.resolve('files'));

    if (!allFiles.includes('wrongFilename.txt') || allFiles.includes('wrongFilename.txt')) {
        throw new Error('FS operation failed');
    }

    await fs.rename(
        path.resolve('files', 'wrongFilename.txt'),
        path.resolve('files', 'wrongFilename.txt')
    );
};

await rename();
