// performance-test-multi.js
import fs from "fs";
import lighthouse from "lighthouse";
import { chromium } from "playwright";
import { URL } from "url";

// Масив сценаріїв тестування
const scenarios = [
  {
    name: "Головна сторінка",
    url: "http://localhost:3000",
    actions: async (page) => {
      // Можна додати клік по першій події
      await page.waitForSelector("ul li");
      await page.click("ul li:first-child");
      await page.waitForTimeout(500); // пауза для стабілізації
    }
  },
  {
    name: "Сторінка події",
    url: "http://localhost:3000/event/1",
    actions: async (page) => {
      // Можна перевірити наявність кнопки
      await page.waitForSelector("button");
      await page.waitForTimeout(500);
    }
  }
];

async function runScenario(scenario, browser) {
  const wsEndpoint = browser.wsEndpoint();
  const urlObj = new URL(wsEndpoint);
  const port = urlObj.port;

  console.log(`\n=== Запуск Lighthouse для сценарію: ${scenario.name} ===`);

  // Відкриваємо нову сторінку через Playwright
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(scenario.url, { waitUntil: "networkidle" });

  // Виконуємо додаткові дії сценарію
  if (scenario.actions) {
    await scenario.actions(page);
  }

  // Запускаємо Lighthouse
  const options = {
    port: port,
    output: "html",
    logLevel: "info",
  };

  const runnerResult = await lighthouse(scenario.url, options);

  // Зберігаємо HTML-звіт
  const reportHtml = runnerResult.report;
  const filename = `lighthouse-report-${scenario.name.replace(/\s+/g, "_")}.html`;
  fs.writeFileSync(filename, reportHtml);
  console.log(`Звіт збережено як ${filename}`);

  // Виводимо ключові метрики
  const lhr = runnerResult.lhr;
  console.log("Основні метрики:");
  console.log(`Performance Score: ${lhr.categories.performance.score * 100}`);
  console.log(`FCP: ${lhr.audits["first-contentful-paint"].displayValue}`);
  console.log(`LCP: ${lhr.audits["largest-contentful-paint"].displayValue}`);
  console.log(`TTI: ${lhr.audits["interactive"].displayValue}`);
  console.log(`TBT: ${lhr.audits["total-blocking-time"].displayValue}`);
  console.log(`CLS: ${lhr.audits["cumulative-layout-shift"].displayValue}`);

  await context.close();
}

async function runAllScenarios() {
  const browser = await chromium.launch({ headless: true });

  for (const scenario of scenarios) {
    try {
      await runScenario(scenario, browser);
    } catch (err) {
      console.error(`Помилка у сценарії "${scenario.name}":`, err);
    }
  }

  await browser.close();
  console.log("\n=== Всі сценарії виконані ===");
}

runAllScenarios().catch(err => console.error("Помилка при запуску тестів:", err));
