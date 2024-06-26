# Plano de Testes de Software


Os testes funcionais a serem realizados na aplicação são descritos a seguir. 

|Caso de Teste    | CT 001 – Cadastro de nova senha incorreta.|
|:---|:---|
| Requisitos Associados | RF-11 O sistema deve permitir que o usúario altere sua senha, caso perca ou esqueça|
| Objetivo do Teste | Sistema deve identificar quando usuário cadastrar nova senha, se possuem menos de 8 caracteres e se estão iguais |
| Passos | 1. É fornecido uma nova senha no campo “Insira a sua nova senha”. 2. É fornecido uma nova senha (diferente da primeira) no campo “Confirme sua senha”.|
| Critérios de êxito | Aparecer mensagem de erro |
| Responsável pela elaborar do caso de Teste | Felipe Nicolau |




|Caso de Teste    | CT 002 - Adicionar Produto|
|:---|:---|
| Requisitos Associados | 1.RF-05	O sistema deve registrar a data de validade dos alimentos. 2.RF-04 O sistema deve alterar a quantidade de alimentos doados/solicitados. 3.RF-06	O sistema deve enviar essas informações para o banco de dados local. |
| Objetivo do Teste | Verificar se a doação é armazenada no local storage e se os campos são limpos. |
| Passos | 1-Preencher os campos da tela faça doações. 2-Clicar no botão "Adicionar Produto". |
| Critérios de êxito |  Os dados devem estar armazenados no local storage e os campos devem estar limpos, para a realização de mais uma doação.|
| Responsável pela elaborar do caso de Teste | Sidney Gabriel|


|Caso de Teste    | CT 003- Confirmação da Doação |
|:---|:---|
| Requisitos Associados | RF-10 O sistema deve mostrar uma mensagem de confirmação de solicitação/doação. RF-06	O sistema deve enviar essas informações para o banco de dados local. |
| Objetivo do Teste | Verificar se a doação é armazenada no local storage e se a mensagem de confirmação aparece na tela. |
| Passos |  1-Preencher os campos da tela faça doações. 2-Clicar no botão "Confirmar". |
| Critérios de êxito | Os dados devem estar armazenados no local storage e a mensagem deve aparecer na tela confirmando que a doação foi realizada.  |
| Responsável pela elaborar do caso de Teste | Sidney Gabriel |

|Caso de Teste    | CT 004 - Login Realizado|
|:---|:---|
| Requisitos Associados | RF-01	O sistema permite manipular dados dos doadores (CRUD). (Nome completo, CPF, RG, CEP, endereço e data de nascimento) RF-06	O sistema deve enviar essas informações para o banco de dados local. |
| Objetivo do Teste | Verificar se o login é armazenado no local storage. |
| Passos | 1-Preencher os campos da tela de login. 2-Clicar no botão "confirmar". |
| Critérios de êxito |  Os dados devem estar armazenados no local storage. |
| Responsável pela elaborar do caso de Teste | Marcus Ian|

|Caso de Teste    | CT 005- Confirmação de Solicitação de doação |
|:---|:---|
| Requisitos Associados | RF-10 O sistema deve mostrar uma mensagem de confirmação de solicitação/doação. RF-06	O sistema deve enviar essas informações para o banco de dados local. |
| Objetivo do Teste | Verificar se a doação é armazenada no local storage e se a mensagem de confirmação aparece na tela. |
| Passos |  1-Preencher os campos da tela faça doações. 2-Clicar no botão "Confirmar". |
| Critérios de êxito | Os dados devem estar armazenados no local storage e a mensagem deve aparecer na tela confirmando que solicitação de uma doação foi realizada.  |
| Responsável pela elaborar do caso de Teste | Kamilly Macedo |

|Caso de Teste    | CT 006 - Adicionar Produto na Solicitação de uma Doação|
|:---|:---|
| Requisitos Associados | 1.RF-05	O sistema deve registrar a data de validade dos alimentos. 2.RF-04 O sistema deve alterar a quantidade de alimentos doados/solicitados. 3.RF-06	O sistema deve enviar essas informações para o banco de dados local. |
| Objetivo do Teste | Verificar se a doação é armazenada no local storage e se os campos são limpos. |
| Passos | 1-Preencher os campos da tela faça doações. 2-Clicar no botão "Adicionar Produto". |
| Critérios de êxito |  Os dados devem estar armazenados no local storage e os campos devem estar limpos, para a realização de mais uma doação.|
| Responsável pela elaborar do caso de Teste | Kamilly Macedo|

|Caso de Teste    | CT 007 - Recuperar senha|
|:---|:---|
| Requisitos Associados | RF-11 O sistema deve permitir que o usuario altere sua senha, caso perca ou esqueça |
| Objetivo do Teste | Verificar se as senhas estão iguais |
| Passos | 1-Preencher os campos de recuperar senha. 2-Clicar no botão "confirmar". |
| Critérios de êxito |  Se as senhas não estiverem iguais, aparecer uma mensagem dizendo que os mesmos não correspondem ou que são menos de 8 caracteres |
| Responsável pela elaborar do caso de Teste | Lucas Araújo|

|Caso de Teste    | CT 008 - Cadastro Realizado|
|:---|:---|
| Requisitos Associados | RF-01	O sistema permite manipular dados dos doadores (CRUD). (Nome completo, CPF, RG, CEP, endereço e data de nascimento) RF-06	O sistema deve enviar essas informações para o banco de dados local. |
| Objetivo do Teste | Verificar se o cadastro é armazenado no local storage. |
| Passos | 1-Preencher os campos da tela de cadastro. 2-Clicar no botão "proximo". |
| Critérios de êxito |  Os dados devem estar armazenados no local storage. |
| Responsável pela elaborar do caso de Teste | Marcus Ian|

|Caso de Teste    | CT 009 - Cadastro Realizado|
|:---|:---|
| Requisitos Associados | RF-01	O sistema permite manipular dados dos doadores (CRUD). (Nome completo, CPF, RG, CEP, endereço e data de nascimento) RF-06	O sistema deve enviar essas informações para o banco de dados local. |
| Objetivo do Teste | Verificar se o cadastro é armazenado no local storage. |
| Passos | 1-Preencher os campos da tela de cadastro. 2-Clicar no botão "Confirmar". |
| Critérios de êxito |  Os dados devem estar armazenados no local storage. |
| Responsável pela elaborar do caso de Teste | Marcus Ian|


|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
