# Instagram Clone(Frontend)

This is the frontend repository of an instagram clone Made on MERN stack, for backend repository, please check out [Instagram Clone(BackEnd)](https://github.com/101Loop/InstagramClone-BE) 🎉🎉🎉

We implement features such as:

* Signin 🙋‍♂️
* Signup 📝
* Profile 📜
* Create Post 📰
* View Posts of Others 👀

## Table of Contents 📚

* [Requirement](#Requirement)
* [Contributing](#Contributing)
  * [Report Bugs](#Report-Bugs)
  * [Fix Bugs](#Fix-Bugs)
  * [Implement Features](#Implement-Features)
  * [Submit Feedback](#Submit-Feedback)
* [How to Setup](#How-to-Setup)
* [Other Repositories](#Other-Repositories)
* [Contributors](#Contributors)

## Requirement 🔍

* nodejs 12.x.x or later
* npm 6.x.x or later

## Contributing ✏️

Contributions are welcome, and they are greatly appreciated! Every little bit helps, and credit will always be given.

You can contribute in many ways:

### Report Bugs 🐞

Report bugs at our [issues](https://github.com/101Loop/InstagramClone-FE/issues).

If you are reporting a bug🐝, please include:

* Your operating system name and version.
* Any details about your local setup that might be helpful in troubleshooting.
* Detailed steps to reproduce the bug.

### Fix Bugs 🐛

Look through our [issues](https://github.com/101Loop/InstagramClone-FE/issues) for bugs. Anything tagged with "bug" is open to whoever wants to implement it.

### Implement Features 🏷️

Look through our [issues](https://github.com/101Loop/InstagramClone-FE/issues) for features. Anything tagged with "feature" is open to whoever wants to implement it.

### Submit Feedback 📑

The best way to send feedback is to file an issue at [issues](https://github.com/rolando/scrapy-redis/issues).

If you are proposing a feature:

* Explain in detail how it would work.
* Keep the scope as narrow as possible, to make it easier to implement.
* Remember that this is a volunteer-driven project, and that contributions are welcome :)

## How to Setup 💻

If you have yarn installed, you can use yarn instead.

For setting up this repo , you need to clone both [frontend](https://github.com/101Loop/InstagramClone-FE) and [backend](https://github.com/101Loop/InstagramClone-BE) repositories.

### Setup Backend ⌨️

```shell=bash
git clone https://github.com/101Loop/InstagramClone-BE.git
cd InstagramClone-BE/
npm install
# For Linux & Mac users
cp keys.js.env keys.js
# For Windows users
copy keys.js.env keys.js
```

* Open keys.js and modified the elements as below

  * \<databaseUsername\> -> Your database user
  * \<password\> -> Your database password
  * \<dbname\> -> The database you create
  * \<YOUR JWT_SECRET KEY(random)\> -> You need to create a JWT token with a secret of at least 14 characters

* Start backend server

```shell=bash
nodemon app
```

### Setup Frontend 🖲️

```shell=bash
cd InstagramClone-FE/
npm install
npm start
```

## Contributors 👨‍👩‍👦‍👦

* [Stephin Reji](https://github.com/stephin007)
