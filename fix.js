const fs = require('fs');

function fixFile(path, replaces) {
  let file = fs.readFileSync(path, 'utf8');
  for (const [search, replace] of replaces) {
    file = file.replace(search, replace);
  }
  fs.writeFileSync(path, file);
}

fixFile('src/app/pdf/extract-pages/page.tsx', [
  [/don't/g, 'don&apos;t'],
  [/That's/g, 'That&apos;s'],
  [/aren't/g, 'aren&apos;t'],
  [/device's/g, 'device&apos;s'],
  [/won't/g, 'won&apos;t'],
  [/it's/g, 'it&apos;s'],
  [/document's/g, 'document&apos;s'],
  [/"1, 3, 5-10"/g, '&quot;1, 3, 5-10&quot;'],
  [/"1, 3, 5-8"/g, '&quot;1, 3, 5-8&quot;'],
  [/"Annual_Report_Financials_Pages_10-15.pdf"/g, '&quot;Annual_Report_Financials_Pages_10-15.pdf&quot;']
]);

fixFile('src/app/pdf/reorder-pages/page.tsx', [
  [/don't/g, 'don&apos;t'],
  [/That's/g, 'That&apos;s'],
  [/aren't/g, 'aren&apos;t'],
  [/device's/g, 'device&apos;s'],
  [/won't/g, 'won&apos;t'],
  [/it's/g, 'it&apos;s'],
  [/document's/g, 'document&apos;s'],
  [/"Save PDF"/g, '&quot;Save PDF&quot;']
]);

fixFile('src/app/pdf/reorder-pages/Client.tsx', [
  [/won't/g, 'won&apos;t']
]);
