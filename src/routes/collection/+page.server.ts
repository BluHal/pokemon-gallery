export const load = async ({ fetch }) => {
  const response = await fetch("/api/gallery");

  if (!response.ok) {
    throw new Error(`Failed to fetch pokemon data: ${response.statusText}`);
  }
  const collection: Collection = await response.json();

  return { collection };
};
