export const load = async ({ fetch }) => {
  const fetchPack = async (): Promise<PokemonCard[]> => {
    const response = await fetch("/api/pack-opening");

    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon data: ${response.statusText}`);
    }
    const data: PokemonCard[] = await response.json();
    return data;
  };

  return { pokemonCards: fetchPack() };
};
