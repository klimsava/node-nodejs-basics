const parseArgs = () => {
    // Write your code here
    const arrayArgs = process.argv.slice(2);
    const resultKey = [];
    const resultItem = [];
    let result = [];

    for (const arg of arrayArgs) {
        if (arg.startsWith('--')) {
            resultKey.push(arg);
        } else {
            resultItem.push(arg);
        }
    }

    for (let i = 0; i < resultKey.length; i++) {
        result.push(`${resultKey[i]} is ${resultItem[i]}`);
    }
    
    result = result.join(', ');

    console.log(result);
};

parseArgs();