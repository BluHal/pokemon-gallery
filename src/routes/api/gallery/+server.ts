import { addCard, getAllCards, initializeDB } from "$lib/db";
import { json } from "@sveltejs/kit";

initializeDB();

export const GET = async () => {
  const cardIds = await getAllCards();
  return json({ cardIds });
};

export const POST = async ({ request }) => {
  const { id, imageUrl } = await request.json();
  addCard(id, imageUrl);
  return json({ id, imageUrl });
};
