// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wfbqbbzmsqapdfzmctwf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmYnFiYnptc3FhcGRmem1jdHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzMzI1NzEsImV4cCI6MjA1NDkwODU3MX0.2eevHG1BkvSLHAudg1pTd3Y0Sz6UCyHqBQTwRs372gg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);