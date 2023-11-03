import { PUBLIC_EOTDL_API } from '$env/static/public';
import fetchEOTDL from '$lib/shared/fetchEOTDL';

export default async (id, token) => {
  let url = `${PUBLIC_EOTDL_API}/datasets/${id}/download`;
  const { data, error } = await fetchEOTDL(url, token);
  if (error) throw new Error(error);
  return data;
};
