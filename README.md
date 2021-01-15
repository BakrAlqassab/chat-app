# chat-app

This Full stack Chat app project will be done with Html,Css, React as Front-end and node.js and PostgreSQL  as back-End

to use the app need to :

1- The postgreSQL Database installed and create new 'Database' called chat-app
2-install npm in both frontend and backend side,and run nodemon start in backend side.with sure of the port number is 3000|| or edit the .env APP_PORT.
note!! probeply will face Sass installing issue because of the debug from the home server. google search offer various wways to solve it.for now iam using old version 4.14.1 v version.
3-insert your postgreSQL access data in .env file
4-!! this step is already done and added in database/migrations file . but to show you what kind of data is created in the DB. 
sequelize model:create --name User --attributes firstName:string , lastName:string,email:string,password:string,gender:string,avatar:string.

5- sequelize  db:migrate:all to mirge the new columns in your databsase
6-insert npm start in new terminal inside the chat-frontend path
