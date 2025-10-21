import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_ENV_SUPABASE_URL, import.meta.env.VITE_ENV_API_KEY);

export default supabase;
