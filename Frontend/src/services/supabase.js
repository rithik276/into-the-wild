import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kqmvshnefdvlkevvgyhd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxbXZzaG5lZmR2bGtldnZneWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1MzQzODUsImV4cCI6MjAyMDExMDM4NX0.jzUH88JcbusMnDcOPP51djIEJnZaEZ3Ieo8FSwBMbTU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
