# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Receptor da Doação </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Pessoa que necessita de doações para sua subsistência.</td>
</tr>
<tr>
<td><b>Necessidades:</b></td>
<td>
1- Uma plataforma de doação e recepção de alimentos acessível.
2- Um ambiente intuitivo. 
3- Facilidade na identificação do alimento solicitado.
4- Identificação da validade do produto.
5- Informação do polo físico.
6- Facilidade de retirada.
</td>
</tr>
</tbody>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Doador de Alimentos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa que pretende realizar uma doação. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1- Uma aba de cadastro intuitiva.
2- Segurança na implementação de seus dados pessoais.
3- Variedade de alimentos a serem doados.
4- Fácil implementação da informação dos alimentos (qual alimento, data de validade).
5- Facilidade do encontro dos pólos físicos.
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Doador             | Contribuir para o bem-estar e a segurança alimentar da comunidade.|Para garantir que as pessoas em necessidade tenham acesso a alimentos nutritivos e adequados, promovendo assim a saúde e o bem-estar geral.|
| Doador             |Sentir-me mais envolvido sobre o impacto positivo das minhas ações.|Para promover um maior engajamento e incentivar a continuidade do apoio às iniciativas de ajuda alimentar.|
| Doador             | Fornecer alimentos que sejam mais necessários e úteis para as pessoas em situação de vulnerabilidade.| Para garantir que minhas doações sejam eficazes e atendam às necessidades reais daqueles que estão em dificuldades.|
| Recebedor          |Garantir que meus filhos tenham acesso a uma alimentação adequada e nutritiva, mesmo quando enfrentamos dificuldades financeiras.| Para assegurar o crescimento saudável e o desenvolvimento adequado de meus filhos, mesmo em tempos de adversidade econômica.|
| Recebedor          | Receber ajuda alimentar para enfrentar as dificuldades da vida na rua e ter uma chance de reconstruir minha vida em segurança.| Para garantir que eu tenha acesso a alimentos suficientes para sobreviver e começar a reconstruir minha vida em direção a uma situação mais estável e segura.|
| Recebedor          |Garantir que irei receber alimentos de forma segura e dentro do prazo de validade. | Para assegurar que os alimentos consumidos não me farão mal.|


## Requisitos do Projeto

Com base nos objetivos propostos acima, é notório a necessidade de definir as condições e as especificidades para que a ONG seja realizada de forma efetiva satisfazendo as expectativas dos usuários, para isso, detalhamos os requisitos funcionais e não funcionais necessários de acordo com as expectativas do projeto.

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | O sistema permite manipular dados dos doadores (CRUD). (Nome completo, CPF, RG, CEP, endereço e data de nascimento) | Alta | 
| RF-02 | O sistema deve adicionar o alimento doado. |  Alta |
| RF-03 | O sistema deve mostrar opções de alimentos para escolher. |  Alta | 
| RF-04 | O sistema deve alterar a quantidade de alimentos doados/solicitados.   |  Alta  |
| RF-05 | O sistema deve registrar a data de validade dos alimentos. |  Alta  | 
| RF-06 | O sistema deve enviar essas informações para o banco de dados local. | Alta |
| RF-07 | O sistema deve mostrar em qual unidade vai estar o alimento solicitado. | Alta |
| RF-08 | O sistema deve ter dois cadastro, um para doador e outro para receptor | Alta |
| RF-09 | O sistema deve ter uma aba de ajuda ao usuario ao realizar o casdastro | Média|
| RF-10 | O sistema deve mostrar uma mensagem de confirmação de solicitação/doação | Média|
| RF-11 | O sistema deve permitir que o usúario altere sua senha, caso perca ou esqueça | Média|

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |O cadastro deve ser projetado com medidas de segurança adequadas para proteger as informações do usuário e evitar qualquer tipo de violação de dados.| Alta |
| RNF-02 |  Deve ser fácil de usar e intuitivo, permitindo que os usuários interajam com ele de maneira eficiente e eficaz. | Alta |
| RNF-03 |  Deve estar disponível 24 horas por dia, 7 dias por semana, para que os usuários possam acessá-lo sempre que precisarem. | Alta |
| RNF-04 |  O site deve ser capaz de responder rapidamente às solicitações do usuário, idealmente em tempo real. | Alta  | 
| RNF-04 |  Deve ser capaz de lidar com um grande número de solicitações de usuários simultaneamente, sem perder a qualidade ou a velocidade de resposta. | Alta | 


**Prioridade: Alta / Média / Baixa. 

