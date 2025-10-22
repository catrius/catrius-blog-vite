import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_PUBLIC_DATABASESUPABASE_URL,
  import.meta.env.VITE_PUBLIC_DATABASESUPABASE_ANON_KEY,
);

export default supabase;
