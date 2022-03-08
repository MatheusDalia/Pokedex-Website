<p align="center">
  <a href="http://citi.org.br">
    <img src="https://raw.githubusercontent.com/jrmmendes/citi-doc-utils/master/citi_black.png" alt="CITi logo"/>
  </a>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/staging branch-develop-pink" alt="staging">
  <img src="https://img.shields.io/badge/production branch-main-blue" alt="production">
</p>

# CITi+ Server
This is a project created with Node.js, Express.js, Typescript and PostgreSQL that aims to develop the CITi+ system server, which is a web system developed to organize and store the trainings given by the company's members aimed at internal and aspirants' training


## Running the project

1. Be sure you have **docker/docker-compose** and **yarn** (or **npm**, if you use it) installed.
2. Clone the repository by running 
```bash 
git clone git@github.com:CITi-UFPE/citiplus-server.git
```
3. Install all the dependencies by running
```bash 
yarn install
# or
npm install
```
4. Create a **.env** file and copy the following content to it:
```dotenv
# ###### GENERAL SETTINGS #######
PROJECT_NAME=citiplus

# ###### SERVER SETTINGS #######
SERVER_PORT=3001

# ###### DATABASE SETTINGS #######
DATABASE_HOST=citiplus-db
DATABASE_TYPE=postgres
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=docker
DATABASE_DB=citiplus

# ###### TEST DATABASE SETTINGS #######
DATABASE_TEST_HOST=localhost
DATABASE_TEST_PORT=5433
DATABASE_TEST_USER=postgres
DATABASE_TEST_PASSWORD=docker
DATABASE_TEST_DB=citiplus-test
```
  
5. To run the development server, run
```bash
docker-compose up
```
6. To run the migrations, open your .env, and change your DATABASE_HOST to this:
```bash
DATABASE_HOST=localhost
```
7. On a new terminal, run:
```bash
yarn migration
```
8. Switch your .env DATABASE_HOST back to this:
```bash
DATABASE_HOST=citiplus-db
```
9. Now the server should be running!

## Development team

- **Caio Barreto** - *Project manager* - [CaiolBarreto](https://github.com/CaiolBarreto)
- **Matheus Dalia** - *Front-end/Back-end developer* - [MatheusDalia](https://github.com/MatheusDalia)
- **Maike Menezes** - *Front-end/Back-end developer* - [maikermenezes](https://github.com/maikermenezes)
- **Pedro Queiroz** - *Front-end/Back-end developer* - [pccql](https://github.com/pccql)

## Design team

- **Maria Vitória Bandeira** - *UX/UI designer*
- **Brenda Bezerra** - *UX/UI designer*
