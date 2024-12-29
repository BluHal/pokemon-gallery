import { createClient } from "@libsql/client";

const client = createClient({
  url: "file:pokemon-gallery.db",
});

export const initializeDB = async () => {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS pokemonGallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    card_id TEXT NOT NULL,
    image_url TEXT NOT NULL
  );
  `);
};

export const addCard = async (id: string, imageUrl: string) => {
  await client.execute({
    sql: "INSERT INTO pokemonGallery(card_id, image_url) VALUES (?, ?)",
    args: [id, imageUrl],
  });
};

export const getAllCards = async () => {
  const cards = await client.execute("SELECT * FROM pokemonGallery");

  return cards.rows.map((row) => ({
    id: row[0],
    cardId: row[1],
    imageUrl: row[2],
  }));
};

export const closeDB = () => {
  client.close();
};
