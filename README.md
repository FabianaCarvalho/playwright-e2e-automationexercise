🧪 Playwright E2E Automation – AutomationExercise
📌 About the project
This project contains a complete End-to-End (E2E) test flow automated with Playwright + TypeScript, covering everything from user registration to checkout, following solid automation best practices and a scalable test architecture.
The main goal is to demonstrate:
* reliable test automation
* clean and maintainable code
* scalable project structure
* stable, non-flaky tests

🚀 Tech stack
* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)

🧠 Test strategy
The project is structured using Page Object Model, with a clear separation of concerns:
* Pages → UI actions and locators
* Tests → E2E scenarios
* Test Data → reusable data (e.g. payment info)

Additionally:
* semantic waits (toBeVisible, waitForSelector)
* assertions based on real user behavior
* strong focus on stability and readability

🧩 Automated E2E flow
The main scenario covers:
1) Access Home page
2) Navigate to Login
3) Register a new user
4) Validate account creation
5) Load product listing
6) Add products to cart
7) Navigate to cart
8) Complete checkout with payment data
9) Finish purchase successfully

📁 Project structure
├── pages
│   ├── homePage.ts
│   ├── signupPage.ts
│   ├── productsPage.ts
│   └── checkoutPage.ts
├── tests
│   └── e2e.spec.ts
├── test-data
│   └── payment.ts
├── playwright.config.ts
└── README.md

▶️ How to run the tests
* Install dependencies
npm install

* Run tests
npx playwright test

* Run tests in headed mode
npx playwright test --headed

🧪 Execution notes
Tests can be executed across multiple browsers configured in playwright.config.ts, ensuring cross-browser coverage.

🌱 Next steps
* Expand test coverage
* CI pipeline integration
* Experiments with Playwright + AI for smarter test creation and maintenance

👩‍💻 Author: Fabiana Carvalho
QA Engineer | Test Automation | Playwright | TypeScript
