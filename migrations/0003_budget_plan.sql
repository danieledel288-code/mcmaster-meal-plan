-- Meal-plan selection + budget window mode for the per-user planner state.
-- Both nullable-with-default so every existing row keeps working unchanged.

ALTER TABLE user_state ADD COLUMN meal_plan   TEXT NOT NULL DEFAULT 'custom';  -- 'custom' | 'trad-a'..'trad-d' | 'apt-a'..'apt-d'
ALTER TABLE user_state ADD COLUMN budget_mode TEXT NOT NULL DEFAULT 'term';    -- 'term' (Fall only) | 'year' (Aug 30 -> Apr 18)
