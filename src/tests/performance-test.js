// src/tests/performance-test.js
const { exec } = require('child_process');
const path = require('path');

// URL сторінки
const url = 'http://localhost:3000';
const reportPath = path.join(__dirname, '..', `lighthouse-report-Головна_сторінка.html`);

// Команда для запуску Lighthouse через CLI
const cmd = `npx lighthouse ${url} --output html --output-path ${reportPath} --chrome-flags="--headless" --quiet`;

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка виконання Lighthouse: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Lighthouse stderr: ${stderr}`);
  }
  console.log(`Lighthouse завершено. Звіт збережено за шляхом: ${reportPath}`);
});
