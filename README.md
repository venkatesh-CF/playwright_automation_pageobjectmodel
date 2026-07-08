# playwright_automation_pageobjectmodel
# Playwright Automation Framework (JavaScript)

A scalable end-to-end UI automation framework built using **Playwright**, **JavaScript**, and the **Page Object Model (POM)** design pattern. The framework follows industry best practices with reusable page objects, fixtures, centralized test data, and maintainable project structure.

---

## Features

* Playwright with JavaScript
* Page Object Model (POM)
* Custom Playwright Fixtures
* Reusable Base Page
* Modular Page Objects
* Centralized Test Data
* Cross-browser execution
* HTML Reporting
* Automatic Screenshots on Failure
* Configurable via `playwright.config.js`
* Easy to extend for API + UI automation

---

## Tech Stack

* JavaScript (ES6)
* Playwright
* Node.js
* Visual Studio Code
* Git & GitHub

---

## Project Structure

```text
playwright-framework/
│
├── fixtures/
│   └── testFixture.js
│
├── pages/
│   ├── basePage.js
│   ├── loginPage.js
│   ├── registerPage.js
│   ├── productPage.js
│   ├── cartPage.js
│   └── checkoutPage.js
│
├── components/
│   └── AddressForm.js
│
├── utils/
│   ├── user.js
│   ├── address.js
│   └── helper.js
│
├── tests/
│   ├── login/
│   ├── register/
│   ├── product/
│   └── checkout/
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Framework Design

The framework follows the **Page Object Model (POM)** pattern.

* Each application page has its own Page Object.
* Tests contain only business scenarios.
* Locators and page actions are maintained inside Page Objects.
* Common functionality is placed in `BasePage`.
* Shared UI sections can be extracted into reusable components.
* Fixtures create and inject Page Objects into tests.

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd playwright-framework
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Running Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/login/login.spec.js
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Run tests in debug mode

```bash
npx playwright test --debug
```

Run tests on Chromium only

```bash
npx playwright test --project=chromium
```

---

## Test Reports

Generate and open the Playwright HTML Report

```bash
npx playwright show-report
```

---

## Sample Test Flow

### Login

* Navigate to Login page
* Enter credentials
* Login successfully
* Verify Account page

### Registration

* Register a new customer
* Generate unique email address
* Verify successful registration

### Product

* Search product
* Add product to cart

### Checkout

* Login
* Add product to cart
* Complete billing address
* Select payment method
* Verify successful order

---

## Best Practices Implemented

* Page Object Model
* Reusable Page Methods
* Custom Fixtures
* Explicit Assertions
* Reusable Test Data
* Base Page for common actions
* Independent Test Cases
* Readable Locator Strategy
* Maintainable Folder Structure

---

## Future Enhancements

* API Automation Integration
* Allure Reporting
* CI/CD with GitHub Actions
* Docker Support
* Environment Configuration
* Retry Mechanism
* Logging
* Data-driven Testing
* Parallel Execution Optimization

---

## Author

**Venkatesh Poshanapelli**

 Software Test Engineer

### Skills

* Manual Testing
* Playwright Automation
* API Testing
* JavaScript
* SQL
* Git & GitHub

---

## License

This project is created for learning, demonstration, and portfolio purposes.
