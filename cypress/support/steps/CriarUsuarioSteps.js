/* global Given, Then, When */

import { HomePage } from "../pageobjects/HomePage"
import { CriarUsuarioPage } from "../pageobjects/CriarUsuarioPage"
import { MenuLateralPage } from "../pageobjects/MenuLateralPage"
import { ListarUsuariosPage } from "../pageobjects/ListarUsuariosPage"
import { MostrarUsuarioPage } from "../pageobjects/MostrarUsuarioPage"

const homePage = new HomePage ()
const criarUsuarioPage = new CriarUsuarioPage ()
const menuLateralPage = new MenuLateralPage ()
const listarUsuariosPage = new ListarUsuariosPage ()
const mostrarUsuarioPage = new MostrarUsuarioPage ()

Given("Eu acesso a home do site", () => {
    homePage.acessarPagina()
})

Given("Eu acesso a página de criacão de usuário", () => {
    menuLateralPage.acessarUsuarios()
    listarUsuariosPage.criarNovoUsuario()
})

When("Preencho os dados {}, {}, {}, {} e confirmo o cadastro", (login,nome,email,idade) => {
    criarUsuarioPage.preencherLogin(login)
    criarUsuarioPage.preencherNome(nome)
    criarUsuarioPage.preencherEmail(email)
    criarUsuarioPage.preencherIdade(idade)
    criarUsuarioPage.salvarCadastro()
    mostrarUsuarioPage.pegarIdDeUsuario()
})

Then("Devo visualizar uma mensagem de sucesso e as informações do usuário cadastrado", () => {
    mostrarUsuarioPage.validarCadastroDeNovoUsuario('Usuário foi criado com sucesso.')
})