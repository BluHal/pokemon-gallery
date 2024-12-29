import { json } from "@sveltejs/kit";
import { Buffer } from "buffer";
import type { RequestEvent } from "./$types";

const API_URL = `https://api.pokemontcg.io/v2/cards?&pageSize=1&select=id,images,name,artist,flavorText`;
const QUERY = `!rarity:"Illustration Rare"`;
const SPECIAL_QUERY = `!rarity:"Special Illustration Rare"`;
const API_KEY = Deno.env.get("API_KEY") || "";

async function fetchWithRetry(event: RequestEvent, url: string, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      });
      if (response.ok) {
        const data = await response.json();

        await event.fetch("/api/gallery", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: data.data[0].id,
            imageUrl: data.data[0].images.large,
          }),
        });

        const imgResponse = await fetch(data.data[0].images.large);
        const buffer = await imgResponse.arrayBuffer();
        const base64Image = `data:${imgResponse.headers.get(
          "content-type"
        )};base64,${Buffer.from(buffer).toString("base64")}`;

        data.data[0].images.large = base64Image;

        return data.data[0];
      }
    } catch (error) {
      if (i === retries - 1) {
        throw error;
      }
    }
  }
  throw new Error("Failed to fetch after multiple retries");
}

async function getIllustrationRareTotalQuantity(): Promise<number> {
  const response = await fetch(`${API_URL}&q=${QUERY}&page=1`);
  const data = await response.json();
  return data.totalCount;
}

async function getSpecialIllustrationRareTotalQuantity(): Promise<number> {
  const response = await fetch(`${API_URL}&q=${SPECIAL_QUERY}&page=1`);
  const data = await response.json();
  return data.totalCount;
}

export async function GET(event: RequestEvent) {
  const results: PokemonCard[] = [];

  const illustrationRareTotalQuantity =
    await getIllustrationRareTotalQuantity();
  const specialIllustrationRareTotalQuantity =
    await getSpecialIllustrationRareTotalQuantity();

  while (results.length < 5) {
    try {
      let queryToUse = results.length === 4 ? SPECIAL_QUERY : QUERY;

      const randomPage =
        Math.floor(
          Math.random() *
            (results.length === 4
              ? specialIllustrationRareTotalQuantity
              : illustrationRareTotalQuantity)
        ) + 1;

      const data = await fetchWithRetry(
        event,
        `${API_URL}&q=${queryToUse}&page=${randomPage}`
      );
      results.push(data);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  }
  return json(results);
}
