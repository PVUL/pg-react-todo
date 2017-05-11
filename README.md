# pg-react-todo

1. Install javascript packages by running `npm install`
2. Create database by running `createdb <your_db_name>`
3. Migrate database by running `sequelize db:migrate`
4. Using `sample.env` as an example, set up your `.env` file
5. Start server by running `npm run start:dev`
6. Go to `http://localhost:8000/api`

Make sure you have latest nodemon and sequelize
`npm install -g nodemon`
`npm install -g sequelize-cli`

Todo:
1. Create a seed file

Add a record via postman
1. Make post request to `localhost:8000/api/todos`
2. Params to pass in:
```  
  {
    title: <your_todo_name>
  }
