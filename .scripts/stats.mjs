#!/usr/bin/env node
// Private usage check -- not part of the deployed site. Run: npm run stats
// Uses your local `wrangler` login to read the live D1.
import { execSync } from 'node:child_process';

const SQL = [
  "SELECT",
  "(SELECT COUNT(*) FROM user_state) AS planners_total,",
  "(SELECT COUNT(*) FROM user_state WHERE onboarded = 1) AS planners_onboarded,",
  "(SELECT COUNT(*) FROM users) AS accounts,",
  "(SELECT COUNT(*) FROM user_state WHERE created_at >= date('now','-7 days')) AS new_last_7d,",
  "(SELECT COUNT(*) FROM user_state WHERE created_at >= date('now','-30 days')) AS new_last_30d,",
  "(SELECT COUNT(DISTINCT state_uuid) FROM schedule_entries WHERE term = 'winter') AS have_winter_sched",
].join(' ');

const raw = execSync(
  `npx wrangler d1 execute mcmaster-meal-plan-users --remote --json --command "${SQL}"`,
  { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
);
const r = JSON.parse(raw.slice(raw.indexOf('[')))[0].results[0];
const when = new Date().toISOString().replace('T', ' ').slice(0, 16);

console.log(`
  Mac Meal Planner - usage   (${when} UTC)
  --------------------------------------
  planners (any save)      ${r.planners_total}
  ...finished setup        ${r.planners_onboarded}
  accounts                 ${r.accounts}
  new in last 7 days       ${r.new_last_7d}
  new in last 30 days      ${r.new_last_30d}
  have a Winter timetable  ${r.have_winter_sched}
`);
