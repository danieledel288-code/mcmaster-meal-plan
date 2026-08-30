#!/usr/bin/env node
// Private user-count check. Not served (dot-dir). Run: npm run stats
// Talks to the live D1 through wrangler using your local Cloudflare login.
import { execFileSync } from 'node:child_process';

const DB = 'mcmaster-meal-plan-users';
const SQL = `
  SELECT
    (SELECT COUNT(*) FROM user_state)                                             AS planners_total,
    (SELECT COUNT(*) FROM user_state WHERE onboarded = 1)                          AS planners_onboarded,
    (SELECT COUNT(*) FROM users)                                                   AS accounts,
    (SELECT COUNT(*) FROM user_state WHERE created_at >= date('now','-7 days'))    AS new_last_7d,
    (SELECT COUNT(*) FROM user_state WHERE created_at >= date('now','-30 days'))   AS new_last_30d,
    (SELECT COUNT(*) FROM schedule_entries WHERE term = 'winter')                  AS winter_class_rows
`.replace(/\s+/g, ' ').trim();

const out = execFileSync(
  'npx',
  ['wrangler', 'd1', 'execute', DB, '--remote', '--json', '--command', SQL],
  { encoding: 'utf8', shell: process.platform === 'win32' },
);

const row = JSON.parse(out.slice(out.indexOf('[')))[0].results[0];
const when = new Date().toISOString().replace('T', ' ').slice(0, 16);

console.log(`\n  Mac Meal Planner — usage  (${when} UTC)\n  ${'-'.repeat(38)}`);
console.log(`  planners total        ${row.planners_total}`);
console.log(`  ...finished setup     ${row.planners_onboarded}`);
console.log(`  accounts              ${row.accounts}`);
console.log(`  new in last 7 days    ${row.new_last_7d}`);
console.log(`  new in last 30 days   ${row.new_last_30d}`);
console.log(`  planners with a Winter timetable   ~${row.winter_class_rows > 0 ? 'yes' : '0'}`);
console.log('');
