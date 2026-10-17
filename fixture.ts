import { test as base } from '@playwright/test';


type MyFixtures = {
    //por ahora string para use 
    fixure_1: string,
    fixture_2: string
}

//worker fixtures se ejecutan una sola vez por worker y no por test, 
// es decir que si tienes 10 test y 2 worker, se ejecutara 2 veces, y podras ejecutar preuebas en paralelo, 
// por ejemplo para crear un usuario y que se pueda usar en todos los test
type WorkerFixtures = {
    cup: string
}

export const test = base.extend<MyFixtures, WorkerFixtures>({

    fixure_1: async ({ }, use) => {
        // Setup code for fixture_1
        //beore test 
        const saludo = '<HolaMundo/>'

        //pasas al test lo que colocas en use
        await use(saludo);
        //after test
    },

    fixture_2: async ({ }, use) => {
        const saludo = '<AdiosMundo/>'
        //pasas al test lo que colocas en use
        await use(saludo);
        //after test
    },

    //sintaxis para worker fixtures, se ejecuta una sola vez por worker y no por test,
    cup: [async ({ }, use, workerInfo) => {
        const cup_coffe = `The worker id is ${workerInfo.workerIndex} and the cup of coffee is ready!`;

        await use(cup_coffe);

    }, { scope: 'worker' }]


})

