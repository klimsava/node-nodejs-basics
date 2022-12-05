import { promises as fs } from 'fs';
import path from 'path';

const create = async (text) => {
    // Write your code here
    try {
        await fs.writeFile(path.resolve('files', 'fresh.txt'), text, { flag: 'wx' });
    } catch (e) {
        if (e.code !== 'EEXIST') {
            throw new Error(e);
        }

        throw new Error('FS operation failed');
    }
};

await create('I am fresh and young');
