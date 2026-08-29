-- Second-semester (Winter) support: a separate Winter timetable, Winter term
-- dates, and which term the user is currently viewing. Everything a user
-- already has stays as their Fall term (term = 'fall' default).

ALTER TABLE user_state ADD COLUMN winter_start TEXT NOT NULL DEFAULT '2027-01-05';
ALTER TABLE user_state ADD COLUMN winter_end   TEXT NOT NULL DEFAULT '2027-04-30';
ALTER TABLE user_state ADD COLUMN view_term    TEXT NOT NULL DEFAULT 'fall';   -- 'fall' | 'winter'

ALTER TABLE schedule_entries ADD COLUMN term   TEXT NOT NULL DEFAULT 'fall';   -- 'fall' | 'winter'
CREATE INDEX idx_schedule_state_term ON schedule_entries (state_uuid, term);
