Vetty Angular Assignment – Frontend Test

A simple Angular application demonstrating a login page, routing, and a Trello-style board page with dynamic task creation.

 How to Run
git clone https://github.com/Pratikkumar11/vetty-angular-test.git
cd vetty-angular-test
npm install
ng serve


Open in browser:

http://localhost:4200/login

 Login

Use any non-empty username and password, e.g.:

Username: admin
Password: admin123


After login → automatically redirected to the board page.

 Board Page Features

3 Columns: To Do, In Progress, Completed

Click + under any column → enter task → task appears immediately

Tasks are stored in component state (todo[], progress[], completed[])



 Project Structure
src/app/pages/login
 ├─ login.html
 ├─ login.scss
 └─ login.ts

src/app/pages/board
 ├─ board.html
 ├─ board.scss
 └─ board.ts

src/app/app.routes.ts

Routing
/login     → LoginComponent
/board     → BoardComponent
/          → redirects to /login

 UI Overview

Centered login card with modern styling

Dark themed board layout

Responsive 3-column grid

Minimal SCSS for cards, buttons, spacing & layout








Author

Pratik Kumar — Frontend Developer

