<h1 align="center">✨Blogger✨</h1>

<p>
<a href="https://opensource.org/licenses/MIT">
<img alt = "License MIT" src="https://img.shields.io/badge/license-MIT-success.svg" target="_blank" /></a>
</p>

## 📜 Description

> Blog post forum where developers can publish their blog posts and comment on other developers’ posts. 

🔗 <a href = 'https://github.com/magfinn/blogger'>Link</a>

## ✅ Installing / Getting Started

> ### 🧰 Requirements
>>RESTful API
> Node.js
> Express.js 

>> Database
> MySQL
> MySQL2
> Sequelize
> donenv

>> Front-end
> Handlebars.js
> bcrypt
> express-session and connect-session-sequelize

>> Deployed with Heroku

To get started, clone the repo:
`git clone git@github.com:magfinn/blogger.git`

> > This project uses the Express MySQL2 and Sequelize packages to connect Express.js API to a MySQl database and the dotenv package to use environment variables to store sensitive data, including your MySQl username and password.

Using the node installer package, install dependencies:
`npm i`

Create a new .env file and enter your credentials:
DB_Name='blogger'
DB_User=[your username]
DB_PW=[your password]

Create your database:

Log in with the MySQl Shell command
`mysql -u [username] -p`

and enter your password.

Create your database:
`source db/schema.sql`

Confirm that you created the db:
`SHOW DATABASES`

Exit MySQL `quit`

In your root directory, seed your database with the command:
`npm run seed`

Start your server:
`npm start`

## Demo

<img src='./public/assets/screenshot'>

## 🚥 Tests

Tested routes with Insomnia. Tested on localhost before deploying to Heroku. 

## 🤝 Contributing

## ❓ Questions?

> Have questions or need more information? Contact me by <a href='mailto:magfin@github.com'>e-mail</a>.

**Maggie Finnegan**

- Github: [@magfinn](https://github.com/magfinn)

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

---

\_This README was generated with ❤️ by [Quick, Read Me!](https://github.com/magfinn/Quick-README-)