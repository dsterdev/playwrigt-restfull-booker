import { test, expect } from '@playwright/test';

//data driven para probar la misma prueba con diferentes datos de entrada
[
    { username: 'admin', email: 'admin@example.com', password: 'password', isDisabled: true },
    { username: 'admin', email: 'admin@example.com', password: 'password', isDisabled: true },
    { username: 'admin', email: 'admin@example.com', password: 'password', isDisabled: true },
    { username: 'admin', email: 'admin@example.com', password: 'password', isDisabled: true },
    { username: 'admin', email: 'admin@example.com', password: 'password', isDisabled: true },
].forEach(({ username, email, password, isDisabled }) => {
    //test

})

test('should first', async ({ page }) => {
    //para en caso de los test seasn mas lentos producto a retrasos de la API
    test.slow()

    await page.goto('https://conduit.bondaracademy.com/');

    const titleLocator = page.locator('.logo-font');

    // Generic action 
    const titleText = await titleLocator.textContent();
    expect(titleText).toEqual('conduit');

    // Locator Asertions utiliza la validacion directa del localizador no toma un valor en si
    await expect(titleLocator).toHaveText('conduit');

    //Generic action
    const articleList = page.locator('app-article-list');
    //este metodo espera cualquier texto por lo que al entrar a la pagina la api genera el estado de Loading y no recoge el texto esperado.
    const allText = await articleList.textContent();
    // expect(allText).toContain('Bondar Academy');

    await expect(articleList).toContainText('Bondar Academy');

})

//Fixture