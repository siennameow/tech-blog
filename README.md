# Techship Blog 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/siennameow/tech-blog/blob/main/LICENSE)

## Description 📝 

Techship Blog provides a content management system (CMS) to run a blog site. Users can log in to publish a post on the site and leave comments on posts. Logged in users have the ability to edit or delete previous posts from their dashboard. Non-logged in users can freely view published posts, but need to sign up to publish posts or leave comments.

Techship Blog is a full stack web application built following the Model View Controller (MVC) design paradigm. It uses MySQL and Sequelize for model definition and interaction, handlebars.js as the HTML view templating engine, and express.js for the server. The site uses cookies and session data to restrict access to publishing posts and comments to logged in users.

The web application is hosted on Heroku. Link to deployed website: https://techship.herokuapp.com/

## Table of Contents 📖

* [Application Preview ⭐](#application-preview-)
* [Features 📋](#features-)
* [Code Snippet 💻](#code-snippet-)
* [Installation 🗳](#installation-)
* [Usage 💡](#usage-)
* [Technologies 🔧](#technologies-)
* [Contribution 👩🏻‍💻](#contribution-)
* [Questions ❓](#questions-)
* [Credits 🙌](#credits-)

## Application Preview ⭐

Application Preview:

Homepage
![Screen Shot 2022-05-08 at 3 34 49 PM](https://user-images.githubusercontent.com/101283174/167319115-c90311ad-5489-47c3-8230-2929eae7c628.png)

Login Page
![Screen Shot 2022-05-08 at 3 35 02 PM](https://user-images.githubusercontent.com/101283174/167319124-772f20d2-3e0c-4ad9-a8e8-29d6ee3e228a.png)


Logged in user feature:
| Dashboard | comment post|
|-----------|-----------|
| ![Screen Shot 2022-05-08 at 3 41 24 PM](https://user-images.githubusercontent.com/101283174/167318785-03358eac-3709-4a77-8e16-d1f0111a2822.png)|![Screen Shot 2022-05-08 at 3 43 28 PM](https://user-images.githubusercontent.com/101283174/167319229-d071e25c-08e9-4ce9-a7d0-2fa83aee510c.png)|

| add post | edit/delete post|
|-----------|-----------|
| ![Screen Shot 2022-05-08 at 3 42 34 PM](https://user-images.githubusercontent.com/101283174/167319220-a6a07ab1-cf4c-4b2c-808e-7d774fadb804.png)| ![Screen Shot 2022-05-08 at 3 43 07 PM](https://user-images.githubusercontent.com/101283174/167319221-59b3a9e0-ee8c-4c84-b270-1673dea3b53a.png)|
## Features 📋

⚡️ User-Friendly Interface\
⚡️ Data Collection and Caching\
⚡️ Security\
⚡️ Social Integration\
⚡️ Simplicity

## Code Snippet 💻

API Routes
The PUT `/api/posts/:id` route update selected post(by `id`) data with new data

```JavaScript
router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((postData) => {
      if (!postData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(postData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
```

Model association

```JavaScript
//User has many post
User.hasMany(Post, {foreignKey: 'user_id'})
//post belong to user
Post.belongsTo(User, {foreignKey: 'user_id', onDelete: "cascade"})
//user has many comment
User.hasMany(Comment, { foreignKey: 'user_id', onDelete: "cascade"});
//comment belong to user
Comment.belongsTo(User, { foreignKey: 'user_id', onDelete: "cascade"});
//post has many comment
Post.hasMany(Comment, { foreignKey: 'post_id', onDelete: "cascade"})
//comment belong to post
Comment.belongsTo(Post, { foreignKey: 'post_id', onDelete: "cascade"});
```

Views/Handlebars
Dashboard handlebars render all the posts from this specific logged in user and use `dashboard-detail.handlebars` partials to build the template

```handlebars
{{#if posts.length}}
<section>
  <h2>Post History</h2>
    {{#each posts as |post|}}
      {{> dashboard-detail post}}
    {{/each}}

</section>
{{/if}}
```

## Installation 🗳 

The web application is free to use at: https://techship.herokuapp.com/

If you would like to install this project on your local computer:
- Download or clone repository to use this application on local machine.
- Node.js is required to run the application
- To install necessary dependencies, run the following command :
>    `npm i`

Note:

- If you would like to build your own website, make sure you have a database you can run the seeds into. Seeds are sample rows for each model (table), to give you some starter data. Reading the package.json and make sure you read the script and seeds code, as well as run an npm install.

- This project is hosted on Heroku and utilizes JawsDB. The .env is not uploaded to GitHub for security reasons, but to fully replicate this website on a cloud-based platform, you will need to generate a connection string in order to seed the data through a database on such a platform as Heroku.

## Usage 💡

The web application is deployed on Heroku and feel free to explore: https://techship.herokuapp.com/

## Technologies 🔧

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [Model-View-Controller paradigm](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) is followed to build the structures
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) to implement Handlebars.js for Views
* [dotenv](https://www.npmjs.com/package/dotenv) to load environment variables from a .env file into `process.env` and store configuration in the environment separate from code
* [bcrypt](https://www.npmjs.com/package/bcrypt) package to hash passwords
* [express.js](https://expressjs.com/) and [sequelize](https://sequelize.org/)to build api routes
* [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)packages to add authentication
* [MySQL](https://www.mysql.com/)packages to connect to MySQL database for Models
* [Handlebars.js](https://handlebarsjs.com/)for templating language

## License 📜
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/siennameow/tech-blog/blob/main/LICENSE)
MIT License

Copyright (c) 2022 Sienna Li

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contribution 👩🏻‍💻 
If you would like to contribute to this project reach out to me. Contact Information can be found below or by clicking on the `Questions` link provided in the Table of Contents.

## Questions ❓

📩 If you have any question, email me here at : lihexuan1@gmail.com<br/>
:octocat: My Github page is [siennameow](https://github.com/siennameow)


## Credits 🙌

Thanks to the following people who helped me in this project:
- Jerome Chenette
- Manuel Nunes
- Vince Lee
