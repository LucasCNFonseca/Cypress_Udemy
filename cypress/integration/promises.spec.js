it('sem testes, ainda', () => {});

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
};

// const system = () => {
//     console.log('init');
//     getSomething().then(something => {
//         console.log(`Something is ${something}`); 
//         /* Outra forma de fazer -> console.log('Something is ' + something); */
//         console.log('end');
//     });
// };

const system = async () => {
    console.log('init');
    const something = await getSomething()
    console.log(`Something is ${something}`); 
    /* Outra forma de fazer -> console.log('Something is ' + something); */
    console.log('end');
};

system();
