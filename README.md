# Dockerized Full-Stack Mall Demo
There's db.sql in root folder.
If there is any problem running the program, please contact WeChat: tracyfour
Appreciate！

如果运行程序有问题请联系微信：tracyfour 感谢
## Folder structure

```
📦dockerized-full-stack-environment
 ┣ 📂mysql-db
 ┃ ┣ 📜00-create-db.sql
 ┃ ┣ 📜01-create-table.sql
 ┃ ┗ 📜02-populate-db.sql
 ┣ 📂nestjs-app
 ┃ ┣ 📂node_modules
 ┃ ┣ 📂src
 ┃ ┣ ┣📂components - 主要逻辑
 ┃ ┣ 📂test
 ┃ ┣ 📜.dockerignore
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜package.json
 ┃ ┗ 📜webpack-hmr.config.js
 ┣ 📂nextjs-app
 ┃ ┣ 📂node_modules
 ┃ ┣ 📂pages
 ┃ ┣ 📂public
 ┃ ┣ 📂styles
 ┃ ┣ 📜.dockerignore
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜package.json
 ┃ ┗ 📜next.config.js
 ┣ 📜.env
 ┣ 📜docker-compose.yml
 ┗ 📜package.json
 ```

## Run everything together 

Run `docker-compose up`

## Run projects separeted

### Run the mysql-db

`npm run start:db` or  
`docker-compose up mysql-db`

### Run the nestjs-app

`npm run start:back` or  
`docker-compose up nestjs-app`  

### Run the nextjs-app

`npm run start:front` or  
`docker-compose up nextjs-app`

### Clean the database volume

Run `npm run clean` or `docker-compose down -v`

## 进入项目：Enter project
http://localhost:3000/login

email:aoeu@oaeu.com

password：1234

## 项目技术点 Project technical points：
### 后端 backend：
框架 framework
nestjs
#### authication: jwt passport 
typeorm:onetomany/manytomany/manytoone/queryBuilder/entity
## 前端 frontend：
nextjs

mui

tailwindcss

nesting css