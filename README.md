# E-Book

This project use Angular CLI version 8.3.21. Node js > 10.x

[Project status and story tasks](https://github.com/nasraldin/e-book/projects/1)

Vist
[Demo](https://ebook-test.azurewebsites.net) link.

\*\* System analyst and test case

- [SRS](https://github.com/nasraldin/e-book/blob/master/docs/E-book%20%20SRS%20v%200.1.pdf) file
- [SIS](https://github.com/nasraldin/e-book/blob/master/docs/E-book%20SIs%20v.0.1.pdf) file
- [Wireframe](https://github.com/nasraldin/e-book/blob/master/docs/Ebook-Wireframe.png)
- [Case Diagram](https://github.com/nasraldin/e-book/blob/master/docs/Ebook-Use-Case-Diagram.png)
- [Ebook Client and server](https://github.com/nasraldin/e-book/blob/master/docs/Ebook.png)
- [draw file](https://github.com/nasraldin/e-book/blob/master/docs/Ebook.drawio) view by draw.io

## Development server

Run `npm run start-app` for a dev server. Navigate to `http://localhost:4200`. for frontend app and navigate to `http://localhost:3000`. for bacnkend API server.

Also, you can run frontend by `npm run start-frontend`
and backend by `npm run start-backend`

## Build

Run `npm run build-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Development process

- Clean code
- I use some of the DevOps principles for Continuous Integration (CI), Continuous Delivery (CD).
  CD automates the release process building on the automated testing in CI so that new builds can be released at detecting staging prod release from repository pushed this will push to an azure pipeline to valid release and make sure the build is valid and tested for deploying to production

- [Azure DevOps Pipelines](https://nasraldin.visualstudio.com/E-Book/_build) for our test app

- [Github repository actions]()

- We provide 3 branches staging releases in our project for release test app. master for stable and tested, dev for development stag, prod for deploying to production.
