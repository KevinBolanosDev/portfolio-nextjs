import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper function to get the public URL for a file in Supabase Storage
 * @param {string} bucket - The name of the bucket (e.g., 'portfolio-images')
 * @param {string} path - The path to the file within the bucket (e.g., 'projects/first-cv.png')
 * @returns {string} The public URL for the file
 */
export const getStorageUrl = (bucket, path) => {
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${path}`;
};
