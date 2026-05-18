# Cypress Lab Exam — Spring 2026

## Student Info
- **Course:** Software Testing (CSE482)
- **Semester:** 8th | Batch: FA22-BSE

## Description
This project contains End-to-End (E2E) tests written using the Cypress framework for the website https://www.saucedemo.com

---

## How to Run the Tests

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Open Cypress
```bash
npx cypress open
```

### Step 3 — Run the tests
- Click **E2E Testing**
- Select **Chrome**
- Click any test file to run it

---

## Task 1 — UI Test Suite

| File | Description |
|------|-------------|
| login.cy.js | 3 login tests (valid, wrong password, empty fields) |
| navigation.cy.js | 2 navigation tests (menu, pages in sequence) |
| form.cy.js | 1 form test (checkout form submission) |

---

## Task 2 — Assertions, Aliases & Custom Commands

| File | Description |
|------|-------------|
| assertions.cy.js | 3 assertion types + 1 negative assertion |
| aliases.cy.js | Alias practice + custom login command |
| cypress/support/commands.js | Custom login() command |

---

## What I Found Difficult
Setting up Cypress for the first time was challenging because I was not familiar with the folder structure and how selectors work. I solved this by using the Cypress documentation and testing each selector in the browser. I also had trouble with the cart link attribute assertion, which I fixed by changing the assertion to check the class instead. Overall, the experience helped me understand how automated testing works in real projects.