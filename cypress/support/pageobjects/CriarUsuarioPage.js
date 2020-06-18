/// <reference types="Cypress" />

import {CriarUsuarioElements} from '../elements/CriarUsuarioElements'
const criarUsuarioElements = new CriarUsuarioElements

export class CriarUsuarioPage {
    
    preencherLogin(login) {
        cy.get(criarUsuarioElements.inputLogin()).type(login)
    }

    preencherNome(nome) {
        cy.get(criarUsuarioElements.inputNome()).type(nome)
    }

    preencherEmail(email) {
        cy.get(criarUsuarioElements.inputEmail()).type(email)
    }

    preencherIdade(idade) {
        cy.get(criarUsuarioElements.inputIdade()).type(idade)
    }

    salvarCadastro() {
        cy.get(criarUsuarioElements.botaoSalvar()).click()
        }
    
}