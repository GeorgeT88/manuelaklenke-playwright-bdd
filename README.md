# <img src="https://cdn.simpleicons.org/cucumber/23D96C" height="32" align="center" /> Playwright BDD Tests — manuelaklenke.com

BDD test suite for [manuelaklenke.com](https://manuelaklenke.com) using Playwright and Cucumber. Tests are written as Gherkin scenarios in Xray (Jira), run automatically after every deployment, and results are reported back to Xray.

---

## 📊 Reports

| Report | Link |
|---|---|
| Latest BDD run | [GitHub Pages](https://georget88.github.io/manuelaklenke-playwright-bdd/) |
| Xray Test Plan | [KAN-6 — manuelaklenke.com E2E Test Plan](https://manuelaklenke.atlassian.net/browse/KAN-6) |
| Xray Metrics | [Test Plans Metrics Report](https://manuelaklenke.atlassian.net/jira/software/projects/KAN/boards?selectedReportKey=test-plans-metrics) |

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

## ✅ Test Coverage

| Feature | Scenarios | Xray issues |
|---|---|---|
| Home | Home page loads successfully | KAN-4 |
| Navigation | Navbar visible, all page links, footer, 404 | KAN-7 to KAN-13 |

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
