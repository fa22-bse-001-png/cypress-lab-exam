# Cypress Lab Exam — Spring 2026

## Student Info
- **Course:** Software Testing (CSE482)
- **Semester:** 8th | Batch: FA22-BSE

## Description
This project contains End-to-End (E2E) tests written using the Cypress framework.
- **Task 1** tests the website https://www.saucedemo.com
- **Task 2** tests the website https://the-internet.herokuapp.com

---

## How to Run the Tests

### Step 1 — Install dependencies
npm install

### Step 2 — Open Cypress
npx cypress open

### Step 3 — Run the tests
- Click E2E Testing
- Select Chrome
- Click any test file to run it

---

## Folder Structure

cypress/e2e/
├── task1/
│   ├── login.cy.js
│   ├── navigation.cy.js
│   └── form.cy.js
└── task2/
    ├── assertions.cy.js
    └── aliases.cy.js

cypress/support/
    └── commands.js

---

## Task 1 — UI Test Suite (saucedemo.com)

| File | Description |
|------|-------------|
| login.cy.js | 3 login tests (valid, wrong password, empty fields) |
| navigation.cy.js | 2 navigation tests (menu, pages in sequence) |
| form.cy.js | 1 form test (checkout form submission) |

---

## Task 2 — Assertions, Aliases and Custom Commands (the-internet.herokuapp.com)

| File | Description |
|------|-------------|
| assertions.cy.js | 3 assertion types + 1 negative assertion |
| aliases.cy.js | Alias practice + custom login command |
| cypress/support/commands.js | Custom loginHeroku() command |

---

## What I Found Difficult

Setting up Cypress for the first time was challenging because I was not familiar with the folder structure and how selectors work. I solved this by carefully reading the Cypress documentation and testing each selector in the browser developer tools. Keeping Task 1 and Task 2 files in separate folders was also something I learned to do for better project organization. Overall this project helped me understand how automated End-to-End testing works in real applications.

---

## GitHub Repository
https://github.com/fa22-bse-001-png/cypress-lab-exam