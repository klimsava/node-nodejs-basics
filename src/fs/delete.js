import { promises as fs } from 'fs';
import path from 'path';

const remove = async () => {
    // Write your code here
    const allFiles = await fs.readdir(path.resolve('files'));

    if (!allFiles.includes('fileToRemove.txt')) {
        throw new Error('FS operation failed');
    }

    await fs.unlink(path.resolve('files', 'fileToRemove.txt'));
};

await remove();
