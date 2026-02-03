import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '/utils/supabase/info';

// Create a singleton Supabase client for the browser
export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);
