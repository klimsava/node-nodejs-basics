import { promises as fs } from 'fs';
import path from 'path';

const copy = async () => {
    // Write your code here
    try {
        await fs.cp(
            path.resolve('files'),
            path.resolve('files_copy'),
            { recursive: true, errorOnExist: true, force: false },
        );
    } catch (e) {
        if (e.code !== 'ERR_FS_CP_EEXIST') {
            throw new Error(e);
        }

        throw new Error('FS operation failed');
    }
};

copy();
