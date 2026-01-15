import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Función auxiliar para obtener la URL pública de un archivo en Supabase Storage
 * @param {string} bucket - El nombre del bucket (por ejemplo, 'portfolio-images')
 * @param {string} path - La ruta del archivo dentro del bucket (por ejemplo, 'projects/first-cv.png')
 * @returns {string} La URL pública del archivo
 */
export const getStorageUrl = (bucket, path) => {
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${path}`;
};
