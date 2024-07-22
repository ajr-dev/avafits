import { createClient } from '@supabase/supabase-js'
import { DB_PASS, DB_URI, DB_API_KEY } from "$env/static/private"

const supabaseUrl = process.env.DB_URI
const supabaseKey = process.env.DB_API_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)