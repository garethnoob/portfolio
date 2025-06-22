import sanityClient from '$lib/utils/sanity';

export const load = async () => {
  const devExperience = await sanityClient.fetch(`*[_type == "devExperience"] | order(startDate desc)`);
  return {
    devExperience
  }
}