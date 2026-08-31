-- Per-user log of real MacExpress balance readings. Lets the planner compare
-- the user's actual visible balance against McMaster's recommended pace and
-- recompute a daily spending target from what's really left.
--
-- Stored as a JSON array of { d: 'YYYY-MM-DD', v: <visible balance> }, read and
-- written as a whole like the other small arrays on user_state. Nullable-with-
-- default so every existing row keeps working unchanged.
ALTER TABLE user_state ADD COLUMN balance_log TEXT NOT NULL DEFAULT '[]';
