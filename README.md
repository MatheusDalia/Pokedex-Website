# Introduction.

Hello, tudo joia? This project, based on a selective test by the company Redfox, was a challenge that I set myself to test my skills as a developer. From an excel file containing a list of pokemons, I created a pokedex site where the user can view all pokemons and their attributes in a friendly interface. The pokedex site also allows the user to search, delete and create a pokemon.

For the development, I used Node.js, Express.js, Typescript and PostgreSQL

## Running the project:

**Pre-setup:**
1. Be sure you have **docker/docker-compose** and **yarn** (or **npm**, if you use it) installed.
2. Clone the repository by running 
```bash 
git clone https://github.com/MatheusDalia/teste-desenvolvimento-web.git
```

**Server setup:**

1. In the server folder, install all the dependencies by running
```bash 
yarn install
# or
npm install
```
2. Create a **.env** file and copy the following content to it:
```dotenv
# ###### GENERAL SETTINGS #######
PROJECT_NAME=pokemon

# ###### SERVER SETTINGS #######
SERVER_PORT=3001

# ###### DATABASE SETTINGS #######
DATABASE_HOST=pokemon-db
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
  
3. To run the development server, run
```bash
docker-compose up
```
4. To run the migrations, open your .env, and change your DATABASE_HOST to this:
```bash
DATABASE_HOST=localhost
```
5. On a new terminal, run:
```bash
yarn migration
```
6. Switch your .env DATABASE_HOST back to this:
```bash
DATABASE_HOST=citiplus-db
```
7. Now the server should be running!

**Client setup:**

1. In the client folder, install all the dependencies by running
```bash 
yarn install
# or
npm install
```
2. To run the development server, run
```bash
yarn dev
# or
npm dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development team

- **Matheus Dalia** - *Front-end/Back-end developer* - [MatheusDalia](https://github.com/MatheusDalia)
