const parseEnv = () => {
    // Write your code here
    const arrayEnv = Object.entries(process.env);

    const result = arrayEnv.filter(array => array[0].startsWith('RSS_')).map(elem => elem.join("="));

    console.log(result);
};

parseEnv();
