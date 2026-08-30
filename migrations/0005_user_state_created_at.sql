-- Timestamp when a planner is first saved, so user growth can be tracked
-- privately (see `npm run stats`). Rows that existed before this migration
-- stay NULL ("before tracking").
ALTER TABLE user_state ADD COLUMN created_at TEXT;
