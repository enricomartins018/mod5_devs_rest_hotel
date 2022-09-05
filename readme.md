# Dev´s Rest Hotel

<p align="center">
<img src="./src/assets/logo readme.svg"/>
</p>

<div align="center">

### Tecnologias Utilizadas

<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" /><br>
<img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><br>
<img alt="MaterialUi" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" />

</div>

<div id="inicio" align="center">
  <a href="#Projeto">Projeto  |</a>&nbsp;&nbsp;
  <a href="#Squad"> Squad  |</a>&nbsp;&nbsp;
  <a href="#Api-utilizada"> Api utilizada |</a>&nbsp;&nbsp;
  <a href="#pré-requisitos"> Pré-requisitos  |</a>&nbsp;&nbsp;
  <a href="#packages"> Packages  |</a>&nbsp;&nbsp;
  <a href="#Aplicação-de-forma-local">Aplicação de forma local</a>&nbsp;&nbsp;
</div>

<div id="inicio" align="center">
  <a href="#Implatação-da-aplicação">Implatação da aplicação  |</a>&nbsp;&nbsp;
</div>


# Projeto

Desenvolver uma aplicação, estruturado com react e que consuma a Api.<br>
Definimos que vamos utilizar as entidades reservas e hóspedes da Api Hotel, e implementamos utilizando o **CRUD**.
Uma aplicação que simula um site de resevas de um hotel, onde você gera um novo cadastro, consegue consultar seus dados, excluir e atualizar.

**Curso:** Web Dev FullStack <br> 
**Instituição:** [Resilia Educação](https://www.resilia.com.br/)  <br>
**Projeto:** Final - Módulo 5 <br>



# Squad 

<table>
  <tr>
    <td align="center"  width="180px;"> <br>
      <img src="https://avatars.githubusercontent.com/u/93949826?v=4" width="80px;">
       <h4>Igor Diego</h4> 
       <a href="https://github.com/igor-diego">
          <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" width="30px;">
       </a>
       <a href="https://www.linkedin.com/in/igord-reis/">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28px;">
       </a>
    </td>   
    <td align="center" width="180px;"> <br>
    <img src="https://avatars.githubusercontent.com/u/102865744?v=4" width="80px;">
      <h4>Élica Dias</h4>
       <a href="https://github.com/elicadv">
          <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" width="30px;">
       </a>
       <a href="https://www.linkedin.com/in/%C3%A9lica-dias-a4989116b/">
               <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28px;">
       </a>
    </td>   
    <td align="center" width="180px;">  <br>
      <img src="https://avatars.githubusercontent.com/u/102622514?v=4" width="80px;">
      <h4>Enrico Martins</h4>
      <a href="https://github.com/enricomartins018">
         <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" width="30px;">
      </a>
      <a href="https://www.linkedin.com/in/enricomartins018/">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28px;">
      </a>
    </td>   
    <td align="center" width="180px;"> <br>
    <img src="https://avatars.githubusercontent.com/u/83434769?v=4" width="80px;">
        <h4>Rosana Ribeiro</h4>
          <a href="https://github.com/rosana-ctrl">
      <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" width="30px;">
      </a>
      <a href="https://www.linkedin.com/in/rosana-ribeiro-39364a35/">
               <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28px;">
      </a>
    </tr>
    </table>

# Api utilizada 

Link GitHub: https://github.com/rosana-ctrl/projeto_final_m4


# Pré-requisitos
`Node.js` <sup> v.16.15.1 </sup><br>
`NPM` <sup>v.8.11.0 </sup><br>

# Packages
`react`<br>
`react-icons `<br>
`@mui/material`<br>
`react-material-ui-carousel `<br>
`react-hook-form`

# Aplicação de forma local

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone https://github.com/enricomartins018/mod5_devs_rest_hotel.git
```

Entrando na pasta:
```
cd mod5_devs_rest_hotel
```

Instalando os pacotes:
```
npm install
```

Rodando o projeto:
```
npm run dev 
```

# Implatação da aplicação:

### PAGES

### CadastroHospede: /cadastro

● Operação do Crud: Create

Formulário de Cadastro hóspede:

Usuário vai preenche com as informações necessárias para ser feito o cadastro.

### FacaSuaReserva: /facasuareserva

● Operação do Crud: Create

Formulário de Cadastro Reservas:

Usuário preenche com as informações necessário para ser feita sua reserva.

### Login:/login

● Operação do Crud: Create

Formulário de Login:

Usuário preenche com as informações necessário para ser feito um login.

### SuasReservas: /suasreservas

● Operação do Crud: Read

Usuário vai realizar a busca da sua reserva pelo id.

● Operação do Crud: Delete

Usuário vai deletar sua reserva pelo id.

### AtualizacaoReserva: /atualizareserva

● Operação do Crud: Update

Usuário vai realizar a atualização da sua reserva pelo id.