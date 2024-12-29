<script lang="ts">
  import { goto } from "$app/navigation";
  export let data;

  $: ({ pokemonCards } = data);

  let currentIndex = 0;
  let revealedCards = new Map<string, boolean>();
  let isPackOpen = false;

  async function showNext() {
    if (currentIndex + 1 === 5) {
      goToPackOpenedPage();
    }
    const cards = await pokemonCards;
    currentIndex = (currentIndex + 1) % cards.length;
  }

  function revealCard(id: string, index: number) {
    revealedCards = new Map(revealedCards);
    revealedCards.set(`${id}_${index}`, true);
  }

  async function goToPackOpenedPage() {
    const cards = await pokemonCards;
    goto("/pack-opening/opened", {
      state: {
        cards: cards,
      },
    });
  }
</script>

{#await data.pokemonCards}
  <main
    class="p-5 h-screen flex justify-center items-center bg-gradient-to-b from-[#cbddee] to-[#82cee7]"
  >
    <img src="spinner.png" alt="" class="animate-spin w-16 h-16" />
  </main>
{:then pokemonCards}
  <main
    class="p-5 h-screen flex justify-center items-center bg-gradient-to-b from-[#cbddee] to-[#82cee7]"
  >
    {#if pokemonCards.length === 0}
      <p>Loading...</p>
    {:else}
      <div class="relative w-full h-full flex justify-center items-center">
        {#if isPackOpen}
          {#if revealedCards.get(`${pokemonCards[currentIndex].id}_${currentIndex}`)}
            <button
              class="w-full h-full object-contain bg-transparent border-none p-0"
              on:click={showNext}
              style="background-image: url({pokemonCards[currentIndex].images
                .large}); background-size: contain; background-repeat: no-repeat; background-position: center;"
              aria-label="Reveal card"
            ></button>
          {:else}
            <button
              class="w-full h-full object-contain bg-transparent border-none p-0"
              on:click={() =>
                revealCard(pokemonCards[currentIndex].id, currentIndex)}
              style="background-image: url('back.png'); background-size: contain; background-repeat: no-repeat; background-position: center;"
              aria-label="Reveal card"
            ></button>
          {/if}
        {:else}
          <button
            class="w-full h-full object-contain bg-transparent border-none p-0"
            on:click={() => (isPackOpen = true)}
            style="background-image: url('pack.png'); background-size: contain; background-repeat: no-repeat; background-position: center;"
            aria-label="Reveal card"
          ></button>
        {/if}
      </div>
    {/if}
  </main>
{/await}
