import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
console.log('Supabase url', supabaseUrl)
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

console.log('Connected to Supabase')

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
