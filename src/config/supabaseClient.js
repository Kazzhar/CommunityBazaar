import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pibocyssfkqnnshfrnnc.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYm9jeXNzZmtxbm5zaGZybm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5MzY2MTgsImV4cCI6MTk5NzUxMjYxOH0.5xAH9Q8HoUuAi49RczmiS28E3b7pcGjEGb453HLVpZc";
export const supabase = createClient(supabaseUrl, supabaseKey);