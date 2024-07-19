import LoginPage from "../pages/login_Page"
const loginPage = new LoginPage
Given(/^que eu queira acessar o sistema$/, () => {
    loginPage.acessarHomePage();
});

When(/^eu insirá meu login e senha corretamente$/, () => {
    loginPage.preencherDadosNaTela();
});
When(/^clicar no botão entrar$/, () => {
    loginPage.clickEmLogin();
});

Then(/^tenho meu acesso realizado com sucesso$/, () => {
    return true;
});






When(/^eu insirá meu login "([^"]*)" e senha "([^"]*)"$/, (args1, args2) => {
    console.log(args1, args2);
    return true;
});



Then(/^tenho meu acesso "([^"]*)"$/, (args1) => {
    console.log(args1);
    return true;
});
