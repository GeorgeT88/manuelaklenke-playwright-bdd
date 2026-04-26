# <img src="https://cdn.simpleicons.org/cucumber/23D96C" height="32" align="center" /> Playwright BDD Tests — manuelaklenke.com

BDD test suite for [manuelaklenke.com](https://manuelaklenke.com) using Playwright and Cucumber. Tests are written as Gherkin scenarios in Xray (Jira), run automatically after every deployment, and results are reported back to Xray.

---

## 📊 Reports

| Report | Link |
|---|---|
| Latest BDD run | [GitHub Pages](https://georget88.github.io/manuelaklenke-playwright-bdd/) |
| Xray Test Plan | [KAN-6 — manuelaklenke.com E2E Test Plan](https://manuelaklenke.atlassian.net/browse/KAN-6) |
| Xray Metrics | [Reporting Center](https://manuelaklenke.atlassian.net/plugins/servlet/ac/com.xpandit.plugins.xray/testplans-metrics-report-page?project.key=KAN&project.id=10001) |

---

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/) — browser automation
- [Cucumber](https://cucumber.io/) — BDD test runner
- [Xray for Jira](https://www.getxray.app/) — test management and reporting
- TypeScript
- GitHub Actions — CI/CD pipeline
- GitHub Pages — HTML report hosting

---

## 📁 Project Structure

```
features/
├── home.feature          # Home page scenarios
└── navigation.feature    # Navigation scenarios
steps/
├── home.steps.ts         # Home page step definitions
└── navigation.steps.ts   # Navigation step definitions
support/
├── hooks.ts              # Browser setup/teardown, default timeout
└── world.ts              # Playwright World context
cucumber.js               # Cucumber configuration
```

---

## 🗺️ Test Map

> Update this table whenever a new scenario is added. Check here before writing new tests to avoid duplicates.

### Global

| Scenario | Xray | Feature file | Status |
|---|---|---|---|
| Navbar is visible on all pages | KAN-7 | navigation.feature | ✅ Covered |
| Footer is visible on all pages | KAN-12 | navigation.feature | ✅ Covered |
| Unknown URL shows 404 page | KAN-13 | navigation.feature | ✅ Covered |

### Home

| Scenario | Xray | Feature file | Status |
|---|---|---|---|
| Home page loads successfully | KAN-4 | home.feature | ✅ Covered |
| Hero section is visible | — | home.feature | ❌ Not covered |
| Language switcher changes content | — | home.feature | ❌ Not covered |

### Navigation (Navbar links)

| Scenario | Xray | Feature file | Status |
|---|---|---|---|
| Navigate to About page | KAN-8 | navigation.feature | ✅ Covered |
| Navigate to Portfolio page | KAN-9 | navigation.feature | ✅ Covered |
| Navigate to Events page | KAN-10 | navigation.feature | ✅ Covered |
| Navigate to Contact page | KAN-11 | navigation.feature | ✅ Covered |

### About

| Scenario | Xray | Feature file | Status |
|---|---|---|---|
| About page loads successfully | — | about.feature | ❌ Not covered |
| About page content is visible | — | about.feature | ❌ Not covered |

### Portfolio (Translated Books)

| Scenario | Xray | Feature file | Status |
|---|---|---|---|
| Portfolio page loads successfully | — | portfolio.feature | ❌ Not covered |
| Book list is visible | — | portfolio.feature | ❌ Not covered |

### Events

| Scenario | Xray | Feature file | Status |
|---|---|---|---|
| Events page loads successfully | — | events.feature | ❌ Not covered |
| Events list is visible | — | events.feature | ❌ Not covered |

### Contact

| Scenario | Xray | Feature file | Status |
|---|---|---|---|
| Contact page loads successfully | — | contact.feature | ❌ Not covered |
| Contact form is visible | — | contact.feature | ❌ Not covered |
| Submit contact form with valid data | — | contact.feature | ❌ Not covered |

---

## ⚙️ CI/CD Pipeline

Tests are triggered automatically by [GeorgeT88/manuelaklenke-web](https://github.com/GeorgeT88/manuelaklenke-web) after every push to `main`, once the Vercel production deployment is confirmed live:

```
📦 Push to manuelaklenke-web
        ↓
🔨 Build passes
        ↓
⏳ Vercel deployment confirmed live
        ↓
⚡ repository_dispatch: vercel-deploy
        ↓
🥒 BDD tests run against https://manuelaklenke.com
        ↓
📊 HTML report published to GitHub Pages
        ↓
📋 Results submitted to Xray (KAN-6 Test Plan)

(in parallel: 🎭 Playwright E2E, 🔬 Selenium E2E, 🌲 Cypress E2E)
(after all E2E: 🔒 Snyk SCA + 🔎 Semgrep SAST in parallel)
```

Tests can also be triggered manually from **Actions → Playwright BDD Tests → Run workflow**, and run on a nightly schedule at **07:00 UTC**.

---

## 🏷️ Run Name Convention

| Trigger | Run name |
|---|---|
| Push via app repo | `Playwright BDD Tests — triggered by Vercel deploy` |
| Manual | `Playwright BDD Tests — manual run` |
| Nightly schedule (07:00 UTC) | `Playwright BDD Tests — nightly run` |

---

## ⚠️ Known App Issues

- `ipapi.co` CORS errors on all pages — caused by IP-based language detection on a free-tier API
