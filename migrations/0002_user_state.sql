-- Move per-user planner state out of the KV blob and into real tables.
-- Runs against the USERS_DB D1 database (see wrangler.toml).

-- ---------------------------------------------------------------------------
-- user_state: one row per state_uuid (the id in the ?u= share link).
-- The scalar fields become real columns. The small arrays/objects stay as
-- JSON text for now -- they are always read and written as a whole, never
-- queried, so a child table would be cost with no benefit.
-- ---------------------------------------------------------------------------
CREATE TABLE user_state (
  state_uuid       TEXT PRIMARY KEY,
  residence        TEXT    NOT NULL DEFAULT 'pgcll',
  term_budget      REAL    NOT NULL DEFAULT 3522.50,
  term_start       TEXT    NOT NULL DEFAULT '2026-09-01',
  term_end         TEXT    NOT NULL DEFAULT '2026-12-23',
  onboarded        INTEGER NOT NULL DEFAULT 0,     -- SQLite has no boolean: 0 / 1
  dietary          TEXT    NOT NULL DEFAULT '[]',  -- JSON array
  home_days        TEXT    NOT NULL DEFAULT '[]',  -- JSON array
  favorite_venues  TEXT    NOT NULL DEFAULT '[]',  -- JSON array
  hidden_venues    TEXT    NOT NULL DEFAULT '[]',  -- JSON array
  venue_choices    TEXT    NOT NULL DEFAULT '{}',  -- JSON object
  updated_at       TEXT
);

-- ---------------------------------------------------------------------------
-- schedule_entries: one row per class. This is the relationship we model
-- "properly" -- a child table pointing back at user_state with a foreign key.
-- ---------------------------------------------------------------------------
CREATE TABLE schedule_entries (
  id          INTEGER PRIMARY KEY,   -- plain INTEGER PK auto-fills as rowid
  state_uuid  TEXT NOT NULL REFERENCES user_state(state_uuid) ON DELETE CASCADE,
  day         INTEGER NOT NULL,      -- 0 = Sun ... 6 = Sat
  start_time  TEXT NOT NULL,         -- 'HH:MM'  (avoid the SQL keyword "end")
  end_time    TEXT NOT NULL,
  course      TEXT NOT NULL DEFAULT '',
  building    TEXT NOT NULL DEFAULT '',
  position    INTEGER NOT NULL DEFAULT 0   -- preserves the original array order
);

-- Every read of a user's schedule filters by state_uuid, so index it.
CREATE INDEX idx_schedule_state ON schedule_entries (state_uuid);
