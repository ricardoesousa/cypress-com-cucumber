Feature: Criacão de Usuário

Background: Acessar o site Agapito Software Testing
        Given  Eu acesso a home do site

   
    Scenario Outline: Criar novo usuário com sucesso
        Given Eu acesso a página de criacão de usuário
        When Preencho os dados <login>, <nome>, <email>, <idade> e confirmo o cadastro
        Then Devo visualizar uma mensagem de sucesso e as informações do usuário cadastrado
        
            Examples:
            | login   | nome    | email        | idade |
            | ricardo | Ricardo | roes@gft.com | 30    |
         
